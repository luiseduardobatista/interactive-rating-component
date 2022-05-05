let mainScreen = document.getElementsByClassName("mainCard")[0];
let secondScreen = document.getElementsByClassName("tyCard")[0];
let ratingButtons = document.getElementsByClassName("rating")[0].children;
let userSelection;
let finalRating = document.getElementById("finalRating");
let isSelected = false;

function onButtonClick(selection) {
  userSelection = selection;

  for (let i = 0; i < ratingButtons.length; i++) {
    if (selection === i) {
      changeClass(ratingButtons[i]);
      isSelected = true;
    } else {
      removeClass(ratingButtons[i]);
    }
  }
}

function changeClass(element) {
  element.classList.add("rateSelected");
}

function removeClass(element) {
  element.classList.remove("rateSelected");
}

function onClickSubmit() {
  if (isSelected) {
    mainScreen.style.display = "none";
    secondScreen.style.display = "flex";
    finalRating.innerHTML = userSelection + 1;
  } else {
    window.alert("Please select a rating!");
  }
}
