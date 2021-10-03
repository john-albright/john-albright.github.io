$(document).ready(function() {

    // Add click event listener for the divs 
    $(".grid-expander").on("click", function() {
        $(this).parents(".grid-unit").find(".hidden-info").slideToggle(300);
        $(this).toggleClass("rotate-expander");
    });
});