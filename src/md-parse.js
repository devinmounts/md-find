import { ApiCall } from './md-calls.js';

export class UserSearch{


  // const search = new ApiCall();
  // const promiseConditions = search.getConditions();

  parseConditions() {
    promiseConditions.then((response) => {
      const conditions = [];
      const body = JSON.parse(response);

      for(let i=0; i<body.data.length; i++) {
        const condition = body.data[i].name;
        conditions.push(condition);
      }
    }, function(error) {
      return `There was an error processing your request: ${error.message}`
    });
    return conditions;
  }


  // $('#conditions-form').submit(function(event){
  //   event.preventDefault();
  //   $(".show-md").empty();
  //
  //   const query = $('#conditionsDropdown').find(':selected').text();
  // const promiseQuery = search.getDoctorsByCondition(query);

  parseConditionsQuery(){
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
        docArray.push(docObject);
      }
      return docArray;
      });
    }, function(error) {
      return `There was an error processing your request: ${error.message}`;
  }

  parseDoctorNameQuery(){
    promiseName.then(function(response) {
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
        docArray.push(docObject);
      }
      return docArray;
    }, function(error) {
      return `There was an error processing your request: ${error.message}`;
  }

}
