$(document).ready(function() {
  $("#menuIcon").click(function() {
    $("#menuIcon").toggleClass("change");
    $("#toggleMenu").slideToggle();
  });

  $("#searchIcon").click(function() {
    $("#searchInput").toggle("drop");
    $("#searchIcon").toggleClass("activeSearchIcon");
  });
});
