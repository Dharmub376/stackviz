(function($) {
  "use strict";

  //Page cursors

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px",
      t.style.top = n.clientY + "px",
      e.style.left = n.clientX + "px",
      e.style.top = n.clientY + "px",
      i.style.left = n.clientX + "px",
      i.style.top = n.clientY + "px"
  });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");

  function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
  }

  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
  }
  s();
  for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
  }

  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
  }

  //Navigation

  var app = function() {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function() {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  }();


  //Switch light/dark
$("#switch").on('click', function() {
  if ($("body").hasClass("light")) {
    $("body").removeClass("light");
    $("#switch").removeClass("switched");
  } else {
    $("body").addClass("light");
    $("#switch").addClass("switched");
  }
});
})(jQuery);


function switchCode(language) {
  let codeBox = document.getElementById("codeBox");

  if (language === 'C') {
    codeBox.textContent = `
    #include <stdio.h>
    #define MAX 10
    int stack[MAX];
    int top = -1;

    void push(int val) {
      if (top >= MAX - 1) {
        printf("Stack Overflow\\n");
      } else {
        stack[++top] = val;
        printf("%d pushed to stack\\n", val);
      }
    }

    void pop() {
      if (top == -1) {
        printf("Stack Underflow\\n");
      } else {
        printf("%d popped from stack\\n", stack[top--]);
      }
    }

    void peek() {
      if (top == -1) {
        printf("Stack is empty\\n");
      } else {
        printf("Top element is %d\\n", stack[top]);
      }
    }
    `;
  } else if (language === 'C++') {
    codeBox.textContent = `
    #include <iostream>
    #define MAX 10
    int stack[MAX];
    int top = -1;

    void push(int val) {
      if (top >= MAX - 1) {
        std::cout << "Stack Overflow\\n";
      } else {
        stack[++top] = val;
        std::cout << val << " pushed to stack\\n";
      }
    }

    void pop() {
      if (top == -1) {
        std::cout << "Stack Underflow\\n";
      } else {
        std::cout << stack[top--] << " popped from stack\\n";
      }
    }

    void peek() {
      if (top == -1) {
        std::cout << "Stack is empty\\n";
      } else {
        std::cout << "Top element is " << stack[top] << "\\n";
      }
    }
    `;
  } else if (language === 'JavaScript') {
    codeBox.textContent = `
    const MAX = 10;
    let stack = [];
    
    function push(val) {
      if (stack.length >= MAX) {
        console.log("Stack Overflow");
      } else {
        stack.push(val);
        console.log(val + " pushed to stack");
      }
    }

    function pop() {
      if (stack.length === 0) {
        console.log("Stack Underflow");
      } else {
        console.log(stack.pop() + " popped from stack");
      }
    }

    function peek() {
      if (stack.length === 0) {
        console.log("Stack is empty");
      } else {
        console.log("Top element is " + stack[stack.length - 1]);
      }
    }
    `;
  }
}

// JavaScript for the Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;

function changeSlide() {
  // Hide all images
  slides.forEach(slide => slide.style.opacity = 0);

  // Show the current image
  slides[currentSlide].style.opacity = 1;

  // Update the current slide index
  currentSlide = (currentSlide + 1) % totalSlides;
}

// Change slide every 3 seconds
setInterval(changeSlide, 1000);

// Initialize the first slide
changeSlide();