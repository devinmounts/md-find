import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ApiCall } from './md-calls.js';

$(document).ready(() => {
  const search = new ApiCall();
  const promiseConditions = search.getConditions();

  promiseConditions.then((response) => {
    const body = JSON.parse(response);

    for(let i=0; i<body.data.length; i++) {
      const condition = body.data[i].name;
      $('#conditionsDropdown').append(`<option>${condition}</option>`);
    }
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

  $('#conditions-form').submit(function(event){
    event.preventDefault();
    const query = $('#conditionsDropdown').find(':selected').text();

    const promiseQuery = search.getDoctorsByCondition(query);

    promiseQuery.then(function(response) {
      const body = JSON.parse(response);
      const docArray = [];
      for(let i=0; i<body.data.length; i++){
        const docObject = {};
        const firstName = body.data[i].profile.first_name;
        const lastName = body.data[i].profile.last_name;
        const title = body.data[i].profile.title;
        docObject["firstName"] = firstName;
        docObject["lastName"] = lastName;
        docObject["title"] = title;
        for(let j=0; j<body.data[i].practices.length; j++){
          const inArea = body.data[i].practices[j].within_search_area;
          const hasWebsite = body.data[i].practices[j].website;
          if( inArea === true ){
            const acceptsNewPatient = body.data[i].practices[j].accepts_new_patients;
            const city = body.data[i].practices[j].visit_address.city;
            const state = body.data[i].practices[j].visit_address.state;
            const street = body.data[i].practices[j].visit_address.street;
            const zip = body.data[i].practices[j].visit_address.zip;
            docObject["acceptsNewPatient"] = acceptsNewPatient;
            docObject["city"] = city;
            docObject["state"] = state;
            docObject["street"] = street;
            docObject["zip"] = zip;
          }
          if(hasWebsite !== undefined){
            const website = body.data[i].practices[j].website;
            docObject["website"] = website;
          }
          for(let k=0; k<body.data[i].practices[j].phones.length; k++){
            const isLandLine = body.data[i].practices[j].phones[k].type;
            if( isLandLine === "landline"){
              const phone = body.data[i].practices[j].phones[k].number;
              docObject["phone"] = phone;
            }
          }
        }
        console.log(docObject);
        docArray.push(docObject);
      }
      docArray.forEach((doctor)=>{
        if (!docArray.length === 0) {
          $(".show-md").append(`<h4><li>${doctor.firstName} ${doctor.lastName}, ${doctor.title}</h4><ul><li>Accepting Patients: ${doctor.acceptsNewPatient}</li><li>Address: ${doctor.street}. ${doctor.city}, ${doctor.state}. ${doctor.zip}</li><li>Phone: ${doctor.phone}</li><li>Site: ${doctor.website}</li></ul>`);
        } else {
          $(".show-md").text(`<h4>No doctors matched your search</h4>`)
        }
      })
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
