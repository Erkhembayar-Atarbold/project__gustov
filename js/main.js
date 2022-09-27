//Create a function that gets image from a food menu API

//Get recipe from API

function getRecipeAPI(foodName, DOMImage, DOMGuide, DOMul) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.meals[0]);
      document.querySelector(DOMImage).src = data.meals[0].strMealThumb;
      document.querySelector(DOMGuide).textContent =
        data.meals[0].strInstructions;

      for (let i = 1; i <= 20; i++) {
        if (
          data.meals[0][`strIngredient${i}`] !== "" &&
          data.meals[0][`strIngredient${i}`] !== null
        ) {
          console.log(data.meals[0][`strIngredient${i}`]);
          const li = document.createElement("li");
          li.textContent = data.meals[0][`strIngredient${i}`];
          document.querySelector(`${DOMul}`).append(li);
        }
      }
    });
}

getRecipeAPI(
  "Lasagna",
  ".lasagana-img",
  ".lasagna-description",
  ".lasagana-grocery"
);

getRecipeAPI("Pizza", ".pizza-img", ".pizza-discription", ".pizza-el");

getRecipeAPI(
  "Salmon Avocado Salad",
  ".salad-img",
  ".ceasar-description",
  ".ceasar-recipe"
);

getRecipeAPI(
  "Laksa King Prawn Noodles",
  ".noodle-img",
  ".noodle-decription",
  ".noodles-recipe"
);

getRecipeAPI(
  "Rigatoni with fennel sausage sauce",
  ".specials-img",
  ".special-order",
  ".specials-recipe"
);
