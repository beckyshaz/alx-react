import $ from 'jquery';
import _ from 'lodash';

// Add elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="button">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Track and display the button click count
let count = 0;
const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
};

// Use Lodash's debounce for the click event
$('#button').on('click', _.debounce(updateCounter, 300));

