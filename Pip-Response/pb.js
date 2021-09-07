$(document).ready(function() {
  $('.nav.nav-tabs li a.sec').on('click', function() {
    $('.sat').addClass('o5');
    $('.sat').removeClass('o2');
    $('.sec').removeClass('o2');
    $('.sec').removeClass('o5');
    $('.prk').addClass('o5');
    $('.prk').removeClass('o2');
  });
  $('.nav.nav-tabs li a.prk').on('click', function() {
    $('.sat').addClass('o2');
    $('.sat').removeClass('o5');
    $('.sec').addClass('o5');
    $('.sec').removeClass('o2');
    $('.prk').removeClass('o2');
    $('.prk').removeClass('o5');
  });
  $('.nav.nav-tabs li a.sat').on('click', function() {
    $('.sat').removeClass('o2');
    $('.sat').removeClass('o5');
    $('.sec').addClass('o5');
    $('.sec').removeClass('o2');
    $('.prk').addClass('o2');
    $('.prk').removeClass('o5');
  });
});
