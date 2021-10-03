$(document).ready(function() {

    // Add click event listener for the grid expander 
    $(".grid-expander").on("click", function() {
        $(this).parents(".grid-unit").find(".hidden-info").slideToggle(300);
        $(this).toggleClass("rotate-expander");
    });

    // Add click event for the div expanders on the projects page

    $(".expand-all-projects").on("click", function() {
        
        const expandText = "Expand All";
        const collapseText = "Collapse All";
        var text = $(this).text();
        //console.log(text);
        
        // Toggle the text in the button and rotate all div expanders
        if (text.includes(expandText)) {
            $(".expand-all-projects").text(collapseText);
            $(".hidden-info").slideDown();
            $(".grid-expander").addClass("rotate-expander");
        }
        
        if (text.includes(collapseText)) {
            $(".expand-all-projects").text(expandText);
            $(".hidden-info").slideUp();
            $(".grid-expander").removeClass("rotate-expander");
        }
        
    });

});