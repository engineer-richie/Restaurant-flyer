"use strict";


const price1 = document.getElementById("price-tag1");
const price2 = document.getElementById("price-tag2");
const price3 = document.getElementById("price-tag3");
const locations = document.getElementById("locations");

const hexImgs = document.getElementsByClassName("img");





const firstHex = ["1", "2","3","4"];
const secondHex = ["a","b","c","d"];
const thirdHex = ["a1","b2","c3","d4"];


const prices = ["$11", "$12","$13","$17"];
const prices1 = ["$13", "$15","$7","$16"];
const prices2 = ["$8", "$6","$5","$18"];


const richestCities = ["New York City", "Tokyo", "Lodon", "Singapore", "Los Angeles"]


function updateDivWithImages(divId, imagePaths, delayInSeconds) {
  const arrayLength = imagePaths.length;
  let i = 0;

  function showNextImage() {
    const index = i % arrayLength;
    const currentImagePath = imagePaths[index];


    if (divId.className === "img") {
      updateDivContent(divId, `<img src="flyerImgs/subImg${currentImagePath}.jpg" alt="">`);
    }

    else{
      updateDivContent(divId, `${currentImagePath}`);
    }
    // Increment the index for the next iteration
    i++;

    // Call the function recursively after the specified delay
    setTimeout(showNextImage, delayInSeconds * 1000);
  }

  // Start the loop
  showNextImage();
}

// Function to update the innerHTML of a specified div
function updateDivContent(divId, content) {


  if (divId) {
    divId.innerHTML = content;
  } else {
    console.error(`Div with id '${divId}' not found.`);
  }
}


updateDivWithImages(hexImgs[0], firstHex, 5);
updateDivWithImages(hexImgs[1], secondHex, 5);
updateDivWithImages(hexImgs[2], thirdHex, 5);
updateDivWithImages(price1, prices, 5);
updateDivWithImages(price2, prices1, 5);
updateDivWithImages(price3, prices2, 5);
updateDivWithImages(locations, richestCities, 5);


