import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ApiCall } from './md-find.js';

$(document).ready(() => {
  let search = new ApiCall();
  let promiseConditions = search.getConditions();

  promiseConditions.then((response) => {
    let body = JSON.parse(response);

    for(let i=0; i<body.data.length; i++) {
      $('#conditionsDropdown').append(`<option>${body.data[i].name}</option>`);
    }

  });
});
