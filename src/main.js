import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ApiCall } from './md-find.js';

$(document).ready(() => {
  let search = new ApiCall();
  let promise = search.getConditions();

  promise.then((response) => {
    let body = JSON.parse(response);
    console.log(body);

  });
});
