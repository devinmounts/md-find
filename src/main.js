import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ApiCall } from './md-find.js';

$(document).ready(() => {
  const search = new ApiCall();
  const promiseConditions = search.getConditions();

  promiseConditions.then((response) => {
    const body = JSON.parse(response);

    for(let i=0; i<body.data.length; i++) {
      const condition = body.data[i].name;
      $('#conditionsDropdown').append(`<option>${condition}</option>`);
    }}, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

  $('#conditions-form').submit(function(event){
    event.preventDefault();
    const query = $('#conditionsDropdown').find(':selected').text();

    const promiseQuery = search.getDoctors(query);

    promiseQuery.then((response) => {
      const body = JSON.parse(response);
      console.log(body);
      console.log(body.data[0].practices[0].visit_address.city);
      console.log(body.data[0].practices[0].phones[0].type);
      const docObject = {};
      for(let i=0; i<body.data.length; i++){
        const firstName = body.data[i].profile.first_name;
        const lastName = body.data[i].profile.last_name;
        const title = body.data[i].profile.title;
        for(let j=0; j<body.data[i].practices.length; j++){
          const inArea = body.data[i].practices[j].within_search_area;
          if( inArea === true ){
            const accpeptsNewPatient = body.data[i].practices[j].accepts_new_patients;
            const city = body.data[i].practices[j].visit_address.city;
            const state = body.data[i].practices[j].visit_address.state;
            const street = body.data[i].practices[j].visit_address.street;
            const zip = body.data[i].practices[j].visit_address.street;
            for(let k=0; k<body.data[i].practices[j].phones.length; k++){
              const isLandLine = body.data[i].practices[j].phones[k].type
            }
              if( isLandLine === "landline")
            const phone = body.data[i].practices[j].phones.street;

      
          }
        }
      }

    });
  });
});
