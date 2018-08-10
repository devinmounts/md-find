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

      for(let i=0; i<body.data.length; i++){
        const firstName = body.data[i].profile.first_name;
        const lastName = body.data[i].profile.last_name;
        const title = body.data[i].profile.title;
        const address = body.data[i]
      }
      const firstName = body.
      if ()
    });
  });
});
