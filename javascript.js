"use strict";

//Call elemnt
const submit = document.querySelector(".button-submit");
const ul = document.querySelector(".info");
const email = document.querySelector(".email");
const form = document.getElementById("emailForm");
const img_navbar = document.querySelector(".img-navbar");
const viewMore = document.querySelectorAll(".view-more");
const content1 = document.querySelectorAll(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelectorAll(".content3");
const job1 = document.querySelectorAll("#container-information-job1");
const job2 = document.querySelectorAll("#container-information-job2");
const viewLess = document.querySelectorAll("#view-less");
const addHidden = function (element) {
  element.classList.add("hidden");
};
const removeHidden = function (element) {
  element.classList.remove("hidden");
};
const body = document.querySelector("body");
//Starting code

form.addEventListener("submit", function (event) {
  // Ngăn chặn hành vi mặc định của form
  event.preventDefault();

  //code
  var contentOfEmail = email.value;
  if (contentOfEmail) {
    addHidden(form);
    removeHidden(ul);
    img_navbar.src = "images/avatar.jpg";
  } else {
    alert(`PLease enter your email 😂`);
  }
  console.log(contentOfEmail);
});

// View More
const button_ViewMore = function (i) {
  viewMore[i].addEventListener("click", function () {
    if (i < 3) {
      //Media querry
      // if(body.)

      job1[i].classList.remove("container-view");
      job1[i].classList.add("container1");
      // content1[i].classList.remove("hidden");
      removeHidden(content1[i]);
      job1[i].classList.add("height1");
    } else {
      job2[i - 3].classList.remove("container-view");
      job2[i - 3].classList.add("container2");
      job2[i - 3].classList.add("height2");
      if (i === 3) {
        // content2.classList.remove("hidden");
        removeHidden(content2);
      } else {
        removeHidden(content3[i - 4]);
      }
    }

    //VIEW LESS
    // viewLess[i].classList.remove("hidden");
    removeHidden(viewLess[i]);
    viewLess[i].addEventListener("click", function () {
      if (i < 3) {
        job1[i].classList.add("container-view");
        job1[i].classList.remove("container1");
        addHidden(content1[i]);
        job1[i].classList.remove("height1");
      } else {
        job2[i - 3].classList.add("container-view");
        job2[i - 3].classList.remove("container2");
        job2[i - 3].classList.remove("height2");
        if (i === 3) {
          addHidden(content2);
        } else {
          addHidden(content3[i - 4]);
        }
      }
      addHidden(viewLess[i]);
    });
  });
};
for (let i = 0; i < viewMore.length; ++i) {
  button_ViewMore(i);
}

// Advanced
alert("You can click on image-project to come to Project Chapter😁");
