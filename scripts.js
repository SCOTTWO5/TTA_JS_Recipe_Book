const recipes = [
    {
        title: "Spaghetti Bolognese",
        ingredients: "spaghetti, Ground Beef, Tomato Sauce, Garlic, Onion, Olive Oli",
        steps: "1. Boil pasta. 2.Cook ground beef. 3.Add sauce and Garlic. 4.Mix with pasta."
    },
    {
        title: "Chicken Curry",
        ingredients: "Chicken, Curry Powder, Coconut Milk, Onions, Garlic, Ginger",
        steps: "1. Cook chicken. 2. Add Onions, garlic, ginger. 3. Add Coconut Milk and Curry Powder. 4. Simmer."
    },
    {
        title: "Vegetable Stir-fry",
        ingredients: "Broccoli, Carrots, Bell Peppers, Soy Sauce, Olive Oli",
        steps: "1. Stir-fry vegetables in olive oil. 2. Add garlic and soy sauce. 3. Serve with rice."
    }
];

const displayRecipes = () => {
    const recipeList = document.querySelector("#recipeList");
    recipeList.innerHTML = "";

    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("bg-white", "p-4", "rounded", "shadow", "mb-4");

        recipeCard.innerHTML = `
            <h2 class="text-lg font-bold">${recipe.title}</h2>
            <p class="text-sm text-gray-500"><strong>Ingredients: &emsp;</strong>${recipe.ingredients}</p>
            <p class="text-sm"><strong>Steps: &emsp;</strong>${recipe.steps}</p>}
        `;
        recipeList.appendChild(recipeCard);
    })
}


displayRecipes();