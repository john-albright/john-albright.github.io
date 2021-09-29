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
  
  // Add some Bootstrap classes
  $(".expand-all-btn").addClass("float-right");
  $("#navbar > ul").addClass("d-flex flex-row");
  
  // Reveal the hidden content of each education-entry div
  $(".div-expander").on('click', expandOneDiv);
  
  // reveal all hidden content (other-details) of the education section
  $(".expand-all-btn").on("click", function() {
    $(".other-details").slideToggle(300);
    $(".div-expander").toggleClass("rotate-expander");
    var text = $(this).text();
    $(".expand-all-btn").text(text == "Collapse" ? "Expand" : "Collapse");
  });
  
  function expandOneDiv() {
    $(this).parents(".education-entry").find(".other-details").slideToggle(300);
    $(this).toggleClass("rotate-expander");
  }
  
  // Call function on load
  changeProjectImageHeight();
  
  // Call function every time the div projects is resized
  $(window).on("resize", changeProjectImageHeight);
  
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

  /**************
  Old code for transitioning colors with svg symbols
  I couldn't get the colors to transition properly. 
    
  var replitClasses = $("#replit-logo").find(".cls-3, .cls-2");
  var codePenClasses = $("#codepen-logo").find(".inner-box, .outer-ring");
  var lightPink = replitClasses.css("fill");
  var purpleRed = "rgba(50, 0, 40, 0.967)";
  
  // Create hover effect for Replit svg
  /*$(".replit-logo-footer").hover(
    function() {
      replitClasses.animate({"fill": purpleRed}, 1000);
    }, function() {
      replitClasses.animate({"fill": lightPink}, 1000);
  });
  
  // Create hover effect for CodePen svg
  $(".codepen-logo-footer").hover(
    function() {
      codePenClasses.css({"fill": purpleRed});
  }, function() {
      codePenClasses.css({"fill": lightPink});
  }); 
  ********/
  
}); // end of jQuery document.ready() function