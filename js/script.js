const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("May 10, 2022 18:00:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText =
      Math.floor(distance / day) > 0 ? Math.floor(distance / day) : 0),
      (document.getElementById("hours").innerText =
        Math.floor((distance % day) / hour) > 0
          ? Math.floor((distance % day) / hour)
          : 0),
      (document.getElementById("minutes").innerText =
        Math.floor((distance % hour) / minute) > 0
          ? Math.floor((distance % hour) / minute)
          : 0),
      (document.getElementById("seconds").innerText =
        Math.floor((distance % minute) / second) > 0
          ? Math.floor((distance % minute) / second)
          : 0);

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S COUNTED DOWN!;
    //}
  }, second);

const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  console.log(items);
  items.forEach((item) => {
    item.classList.remove("active");
    item.nextElementSibling.classList.remove("active");
  });
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

       // Typerwrite text content. Use a pipe to indicate the start of the second line "|". 
       
       var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;
    
       var textArray = [
         "","",
        "Technovacion'22",
         "May 16th - 18th 2022",
         "Technovacion'22",
         "May 16th - 18th 2022",
         "Technovacion'22",
         "May 16th - 18th 2022",
         "Technovacion'22", 
         "May 16th - 18th 2022"
        ];
        
        // Speed (in milliseconds) of typing.
        var speedForward = 100, //Typing Speed
          speedWait = 1000, // Wait between typing and backspacing
          speedBetweenLines = 1000, //Wait between first and second lines
          speedBackspace = 25; //Backspace Speed
        
        //Run the loop
        typeWriter("output", textArray);
        
        function typeWriter(id, ar) {
        var element = $("#" + id),
            aString = ar[a],
            eHeader = element.children("h3"), //Header element
            eParagraph = element.children("p"); //Subheader element
        
        // Determine if animation should be typing or backspacing
        if (!isBackspacing) {
          
          // If full string hasn't yet been typed out, continue typing
          if (i < aString.length) {
            
            // If character about to be typed is a pipe, switch to second line and continue.
            if (aString.charAt(i) == "|") {
              isParagraph = true;
              eHeader.removeClass("cursor");
              eParagraph.addClass("cursor");
              i++;
              setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
              
            // If character isn't a pipe, continue typing.
            } else {
              // Type header or subheader depending on whether pipe has been detected
              if (!isParagraph) {
                eHeader.text(eHeader.text() + aString.charAt(i));
              } else {
                eParagraph.text(eParagraph.text() + aString.charAt(i));
              }
              i++;
              setTimeout(function(){ typeWriter(id, ar); }, speedForward);
            }
            
          // If full string has been typed, switch to backspace mode.
          } else if (i == aString.length) {
            
            isBackspacing = true;
            setTimeout(function(){ typeWriter(id, ar); }, speedWait);
            
          }
          
        // If backspacing is enabled
        } 
        else {
          
          // If either the header or the paragraph still has text, continue backspacing
          if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
            
            // If paragraph still has text, continue erasing, otherwise switch to the header.
            if (eParagraph.text().length > 0) {
              eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
            } else if (eHeader.text().length > 0) {
              eParagraph.removeClass("cursor");
              eHeader.addClass("cursor");
              eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
            }
            setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
          
          // If neither head or paragraph still has text, switch to next quote in array and start typing.
          } 
          else 
          { 
            
            isBackspacing = false;
            i = 0;
            isParagraph = false;
            a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
            setTimeout(function(){ typeWriter(id, ar); }, 50);
            
          }
        }
        }

  
        
        
        
        
        
