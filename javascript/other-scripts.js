$(document).ready(function() {

    // Add click event listener for the grid expander 
    $(".grid-expander").on("click", function() {
        $(this).parents(".grid-unit").find(".hidden-info").slideToggle(300);
        $(this).toggleClass("rotate-expander");
    });

    // Constants for next two listener events
    const expandText = "Expand All";
    const collapseText = "Collapse All";

    // Add click event for the div expanders on the projects page
    $(".expand-all-projects").on("click", function() {
        
        var text = $(this).text();
        //console.log(text);
        
        // Toggle the text in the button and rotate all div expanders
        if (text.includes(expandText)) {
            $(this).text(collapseText);

            var currentDivGrid = $(this).parents("h4").next();
            currentDivGrid.find(".hidden-info").slideDown();
            currentDivGrid.find(".grid-expander").addClass("rotate-expander");
        }
        
        if (text.includes(collapseText)) {
            $(this).text(expandText);
            
            var currentDivGrid = $(this).parents("h4").next();
            currentDivGrid.find(".hidden-info").slideUp();
            currentDivGrid.find(".grid-expander").removeClass("rotate-expander");
        }
        
    });

    // Add click event for the div expanders on the experience page
    $(".expand-all-experience").on("click", function() {
        var text = $(this).text();

        //console.log(text);

        $(this).text(text.includes(expandText) ? collapseText : expandText);
        $(".hidden-info").slideToggle(300);
        $(".grid-expander").addClass("rotate-expander");
    });

});