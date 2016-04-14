'use strict';

/* globals EventSource */

var dataDiv = document.querySelector('#data');

function log(message) {
  dataDiv.innerHTML = message + '<br />' + dataDiv.innerHTML;
}

var source = new EventSource('stream.php');

source.onmessage = function(e) {
  log(e.data);
};
