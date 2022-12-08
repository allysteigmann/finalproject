// JavaScript for final project


// function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();
}

//new recipe object 
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {

  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;

  this.displayRecipe = function() {

    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");

  }

}

ChiaCherrySmoothie = new Recipe(
  "Chia Cherry Smoothie", "Ally Steigmann", "https://www.harryanddavid.com/blog/wp-content/uploads/2017/06/feat-cherry-smoothie.jpg",
  "ingredients.html",
  "equipment.html",
  "directions.html");

IrishCoffee = new Recipe(
  "Irish Coffee", "Ally Steigmann", "https://www.harryanddavid.com/blog/wp-content/uploads/2018/12/Irish-Whiskey-Coffee.jpg",
  "irish-ingredients.html",
  "irish-equipment.html",
  "irish-directions.html");

ConfettiPancakes = new Recipe(
  "Confetti Pancakes",
  "Ally Steigmann",
  "https://www.harryanddavid.com/blog/wp-content/uploads/2021/08/confetti-pancakes-closeup.jpg",
  "pancakes-ingredients.html",
  "pancakes-equipment.html",
  "pancakes-directions.html", );

MiniBreakfastSandwich = new Recipe(
  "Mini Breakfast Sandwich",
  "Ally Steigmann",
  "https://www.harryanddavid.com/blog/wp-content/uploads/2021/04/Curtis-Stone-Breakfast-Sandwich.jpg",
  "sandwich-ingredients.html",
  "sandwich-equipment.html",
  "sandwich-directions.html", );

BaconFrittata = new Recipe(
  "Bacon Frittata",
  "Ally Steigmann",
  "https://www.harryanddavid.com/blog/wp-content/uploads/2022/05/frittata-hero.jpg",
  "frittata-ingredients.html",
  "frittata-equipment.html",
  "frittata-directions.html", );

BreakfastScramble = new Recipe(
  "Breakfast Scramble",
  "Ally Steigmann",
  "https://www.acouplecooks.com/wp-content/uploads/2020/09/Veggie-Breakfast-Scramble-007.jpg",
  "scramble-ingredients.html",
  "scramble-equipment.html",
  "scramble-directions.html", );

PeanutButterOatmeal = new Recipe(
  "Peanut Butter Oatmeal",
  "Ally Steigmann",
  "https://www.acouplecooks.com/wp-content/uploads/2021/01/Peanut-Butter-Oatmeal-013.jpg",
  "oatmeal-ingredients.html",
  "oatmeal-equipment.html",
  "oatmeal-directions.html", );

YogurtParfait = new Recipe(
  "YogurtParfait",
  "Ally Steigmann",
  "https://www.acouplecooks.com/wp-content/uploads/2022/01/Yogurt-Parfait-015.jpg",
  "parfait-ingredients.html",
  "parfait-equipment.html",
  "parfait-directions.html", );

FriedEggs = new Recipe(
  "Fried Eggs",
  "Ally Steigmann",
  "https://www.acouplecooks.com/wp-content/uploads/2020/12/How-to-Fry-an-Egg-075.jpg",
  "eggs-ingredients.html",
  "eggs-equipment.html",
  "eggs-directions.html", );

CottageCheeseBreakfastBowl = new Recipe(
  "Cottage Cheese Breakfast Bowl",
  "Ally Steigmann",
  "https://www.acouplecooks.com/wp-content/uploads/2022/01/Cottage-Cheese-Breakfast-004.jpg",
  "cottage-ingredients.html",
  "cottage-equipment.html",
  "cottage-directions.html", );

GoodOldfashionedPancakes = new Recipe(
  "Good Old fashioned Pancakes",
  "Ally Steigmann",
  "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "pancakes-ingredients.html",
  "pancakes-equipment.html",
  "pancakes-directions.html", );

GoodOldfashionedPancakes = new Recipe(
  "Good Old fashioned Pancakes",
  "Ally Steigmann",
  "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "pancakes-ingredients.html",
  "pancakes-equipment.html",
  "pancakes-directions.html", );

GoodOldfashionedPancakes = new Recipe(
  "Good Old fashioned Pancakes",
  "Ally Steigmann",
  "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "pancakes-ingredients.html",
  "pancakes-equipment.html",
  "pancakes-directions.html", );

GoodOldfashionedPancakes = new Recipe(
  "Good Old fashioned Pancakes",
  "Ally Steigmann",
  "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "pancakes-ingredients.html",
  "pancakes-equipment.html",
  "pancakes-directions.html", );

GoodOldfashionedPancakes = new Recipe(
  "Good Old fashioned Pancakes",
  "Ally Steigmann",
  "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "pancakes-ingredients.html",
  "pancakes-equipment.html",
  "pancakes-directions.html", );


window.onload = function() {

  document.querySelector("#firstRecipe").onclick = function() {
    ChiaCherrySmoothie.displayRecipe();
  }

  document.querySelector("#secondRecipe").onclick = function() {
    IrishCoffee.displayRecipe();
  }

  document.querySelector("#thirdRecipe").onclick = function() {
    ConfettiPancakes.displayRecipe();
  }

  document.querySelector("#fourthRecipe").onclick = function() {
    MiniBreakfastSandwich.displayRecipe();
  }
  
  document.querySelector("#fifthRecipe").onclick = function() {
    BaconFrittata.displayRecipe();
  }
  
  document.querySelector("#sixthRecipe").onclick = function() {
    BreakfastScramble.displayRecipe();
  }
  
  document.querySelector("#seventhRecipe").onclick = function() {
    PeanutButterOatmeal.displayRecipe();
  }
  
  document.querySelector("#eighthRecipe").onclick = function() {
    YogurtParfait.displayRecipe();
  }
  
  document.querySelector("#ninthRecipe").onclick = function() {
    FriedEggs.displayRecipe();
  }
  
  document.querySelector("#tenthRecipe").onclick = function() {
    CottageCheeseBreakfastBowl.displayRecipe();
  }
  
  document.querySelector("#eleventhRecipe").onclick = function() {
    GoodOldfashionedPancakes.displayRecipe();
  }
  
  document.querySelector("#twelvthRecipe").onclick = function() {
    GoodOldfashionedPancakes.displayRecipe();
  }
  
  document.querySelector("#thirteenthRecipe").onclick = function() {
    GoodOldfashionedPancakes.displayRecipe();
  }
  
  document.querySelector("#fourteenthRecipe").onclick = function() {
    GoodOldfashionedPancakes.displayRecipe();
  }
  
  document.querySelector("#fifteenthRecipe").onclick = function() {
    GoodOldfashionedPancakes.displayRecipe();
  }










} //end window.onload