$(document).ready(function() {

    // Constants for event listeners
    const expandText = "Expand All";
    const collapseText = "Collapse All";

    // Add click event listener for the grid expander 
    $(".grid-expander").on("click", function() {
        var hiddenInfo = $(this).parents(".grid-unit").find(".hidden-info");
        hiddenInfo.slideToggle(300);
        $(this).toggleClass("rotate-expander");

        var allUnits = $(this).parents(".div-grid").find(".grid-unit");

        // If every unit's grid-expander has the class rotate-expander, change the "Expand All" text to "Collapse All"
        if ([...allUnits].every((div) => $(div).find(".grid-expander").hasClass("rotate-expander"))) {
            $(this).parents(".div-grid").prev("h4").find(".expand-all-projects").text(collapseText);
        }

        // Print statement to check the status of each div in the group 
        // [...allUnits].forEach((div, index) => console.log(`${index}: ${$(div).find(".grid-expander").hasClass("rotate-expander")}`));

        // If every unit's grid-expander doesn't have the class rotate-expander, change the "Collapse All" text to "Expand All"
        if ([...allUnits].every((div) => !$(div).find(".grid-expander").hasClass("rotate-expander"))) {
            $(this).parents(".div-grid").prev("h4").find(".expand-all-projects").text(expandText);
        }

    });

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