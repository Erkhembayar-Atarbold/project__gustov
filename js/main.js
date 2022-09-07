//Create a function that gets image from a food menu

//Get recipe from API

function getRecipeAPI(foodName, DOMImage, DOMGuide) {
  let sum = `strIngredient${addOne()}`;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.meals[0]);
      document.querySelector(DOMImage).src = data.meals[0].strMealThumb;
      document.querySelector(DOMGuide).textContent =
        data.meals[0].strInstructions;
    });
}

function showMeal() {
  getRecipeAPI("Lasagna", ".lasgana-img", ".lasagna-description");
}
showMeal();

function addOne(a, b) {
  let count = 0;
  for (let i = a; i <= b; i++) {
    count++;
  }
  return count;
}
