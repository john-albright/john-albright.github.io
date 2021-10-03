// CONSTANTS

// English text
const courseTitleEng = "Introduction to Programming in Java";
const universityNameEng = "University of Madrid Carlos III";
const module1Eng = "Starting to Program";
const module2Eng = "Writing Good Code";
const module3Eng = "Data Structures and Algorithms";
const linkEng = "https://www.edx.org/professional-certificate/uc3mx-introduction-java-programming";

// Spanish text
const courseTitleEsp = "Introducción a la programación en Java";
const universityNameEsp = "Universidad Carlos III de Madrid";
const module1Esp = "Empezando a programar";
const module2Esp = "Escribiendo buen código";
const module3Esp = "Estructuras de datos y algoritmos";
const linkEsp = "https://www.edx.org/professional-certificate/uc3mx-introduccion-a-la-programacion-en-java";

// jQuery functions to be applied once the document is loaded
$(document).ready(function() {
  
  /**
   * Add a custom function toggleHTML()
   * 
   * Idea for function below taken from JxAxMxIxN's response 
   * to the StackOverflow discussion at the link:    
   * https://stackoverflow.com/questions/2155453/jquery-toggle-text 
   */ 
  $.fn.extend({
    toggleHTML: function(a, b) {
      if (this.html().includes(a)) {
        // console.log("includes " + a);
        this.html(this.html().replace(a, b));
      } else if (this.html().includes(b)) {
        // console.log("includes " + b);
        this.html(this.html().replace(b, a));
      } else {
        this.html();
      }
    }
  });
  
  // Add a Bootstrap class
  $(".expand-all-btn").addClass("float-right");
  
  // Reveal the hidden content of each education-entry div
  $(".div-expander").on('click', expandOneDiv);
  
  function expandOneDiv() {
    $(this).parents(".education-entry").find(".other-details").slideToggle(300);
    $(this).toggleClass("rotate-expander");
  }

  // Reveal all hidden content (other-details) of the education section
  $(".expand-all-btn").on("click", function() {
    $(".other-details").slideToggle(300);
    $(".div-expander").toggleClass("rotate-expander");
    var text = $(this).text();
    $(".expand-all-btn").text(text == "Collapse" ? "Expand" : "Collapse");
  });

  // Reveal the sub-navbar when the navbar-submenu-expander is clicked
  $("#navbar-submenu-expander, #other-pages-links").on("click", function() {
    var width = $(window).width();
    //console.log(width);
    
    if ($("#navbar > ul").is(":visible") && width < 600) {
      toggleNavBar(100);
    }
    toggleSubNavBar(400);
  });

  // Reveal the navbar unordered list when the navbar-menu-expander is clicked
  $("#navbar-menu-expander, #this-page-links").on("click", function() {
    if ($("#sub-navbar").is(":visible")) {
      toggleSubNavBar(100);
    }
    toggleNavBar(400);
  });

  function toggleNavBar(time) {
    $("#navbar > ul").toggle(time).css("display", "grid");
    $("#navbar-menu-expander").toggleClass("rotate-expander");
  }

  function toggleSubNavBar(time) {
    $("#sub-navbar").toggle(time).css("display", "grid");
    $("#navbar-submenu-expander").toggleClass("rotate-expander");
  }
  
  // Call function on load to determine size of projects background image 
  changeProjectImageHeight();
  
  // Operations to perform when the window is resized
  $(window).on("resize", function() {
    changeProjectImageHeight();

    var width = $(window).width();

    if (width > 600 && !$("#navbar > ul").is(":visible")) {
      $("#navbar > ul").show();
      $("#navbar-menu-expander").css("transform", "rotate(0deg)");
    }
  });
  
  // Change the height of the img in the projects section to match the size of the div
  function changeProjectImageHeight() {
    var height = $("#projects").css("height");
    //console.log(height);
    $("#project-background-image").css("height", height);
  }

  // Translate the text in the div of the Spanish course to English
  $("#translate-course").on("click", translateCourse);
  
  function translateCourse() {
    
    // Get the appropriate text to be translated
    var degreeDiv = $(this).closest(".degree");
    // console.log(degreeDiv.html())
    var schoolInfoDiv = degreeDiv.siblings(".school-info");
    // console.log(schoolInfoDiv.html());
    var institutionDiv = schoolInfoDiv.find(".institution");
    // console.log(institutionDiv.html());
    var otherDetailsDiv = schoolInfoDiv.children(".other-details");
    // console.log(otherDetailsDiv.html());
    
    // Get the 1st-3rd Spanish words in the other-details div
    var otherDetailsChildren = otherDetailsDiv.find(".java-info-to-fade");
    var otherDetailsFirst = otherDetailsChildren.first();
    var otherDetailsSecond = otherDetailsChildren.slice(1, 2);
    var otherDetailsThird = otherDetailsChildren.slice(2);
    
    // Fade out all elements that have the class java-info-to-fade
    $(".java-info-to-fade").fadeOut(300, function() {
      
      // Toggle the text in two different languages
      // console.log(degreeDiv.html().substring(0, 70));
      degreeDiv.toggleHTML(courseTitleEsp, courseTitleEng);
      degreeDiv.toggleHTML(linkEsp, linkEng);
      institutionDiv.toggleHTML(universityNameEsp, universityNameEng);
      otherDetailsFirst.toggleHTML(module1Esp, module1Eng);
      otherDetailsSecond.toggleHTML(module2Esp, module2Eng);
      otherDetailsThird.toggleHTML(module3Esp, module3Eng);

      // Re-add the on click event listeners
      degreeDiv.children("#translate-course").on("click", translateCourse);
      degreeDiv.children(".div-expander").on("click", expandOneDiv);
      
      // Fade in the elements
      $(".java-info-to-fade").fadeIn(300);
      
      // Fix for bug that makes the title of the certificate disappear
      $(".java-info-to-fade").slice(0, 1).css("opacity", "1"); 
      
    });
  }
  
}); // end of jQuery document.ready() function