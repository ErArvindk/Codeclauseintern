document.addEventListener('DOMContentLoaded', () => {
    const addRecipeBtn = document.getElementById('addRecipeBtn');
    const recipeModal = document.getElementById('recipeModal');
    const recipeForm = document.getElementById('recipeForm');
    const recipeList = document.getElementById('recipeList');
    // Show to the  add recipe
    addRecipeBtn.addEventListener('click', () => {
        recipeModal.style.display = 'block';
    });

    // Close modal when clicking the  close button 
    document.querySelector('.close').addEventListener('click', () => {
        recipeModal.style.display = 'none';
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', (e) => {
        if (e.target == recipeModal) {
            recipeModal.style.display = 'none';
        }
    });

    // Save  to the recipe
    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('recipeName').value;
        const image = document.getElementById('recipeImage').value;
        const ingredients = document.getElementById('recipeIngredients').value;
        const instructions = document.getElementById('recipeInstructions').value;
        addRecipe(name, image, ingredients, instructions);
        recipeForm.reset();
        recipeModal.style.display = 'none';
    });

    // Add recipe to the list
    function addRecipe(name, image, ingredients, instructions) {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
            <h2>${name}</h2>
            <img src="${image}" alt="${name}">
            <h3>Ingredients</h3>
            <p>${ingredients}</p>
            <h3>Instructions</h3>
            <p>${instructions}</p>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;
        recipeList.appendChild(recipeItem);

        // Add event listener for edit and delete buttons in this sections 


        const editBtn = recipeItem.querySelector('.editBtn');
        editBtn.addEventListener('click', () => editRecipe(recipeItem));

        const deleteBtn = recipeItem.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => deleteRecipe(recipeItem));
    }

    // Edit sections 
    function editRecipe(recipeItem) {
        const name = recipeItem.querySelector('h2').textContent;
        const image = recipeItem.querySelector('img').getAttribute('src');
        const ingredients = recipeItem.querySelectorAll('p')[0].textContent;
        const instructions = recipeItem.querySelectorAll('p')[1].textContent;

        // Fill in form with existing data

        document.getElementById('recipeName').value = name;
        document.getElementById('recipeImage').value = image;
        document.getElementById('recipeIngredients').value = ingredients;
        document.getElementById('recipeInstructions').value = instructions;

        // Delete the existing recipe from the list

        recipeItem.remove();
        recipeModal.style.display = 'block';
    }

    // Delete to the  recipe

    function deleteRecipe(recipeItem) {
        recipeItem.remove();
    }
});