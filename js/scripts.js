function changeRecipe() {
    const recipeTitle = document.getElementById('recipeTitle');
    const recipeDescription = document.getElementById('recipeDescription');
    
    if (recipeTitle.textContent === 'Quinoa Salad') {
        recipeTitle.textContent = 'Avocado Toast';
        recipeDescription.textContent = 'A simple and nutritious avocado toast with whole grain bread and a sprinkle of sea salt.';
    } else {
        recipeTitle.textContent = 'Quinoa Salad';
        recipeDescription.textContent = 'A healthy and delicious quinoa salad with fresh vegetables and a tangy dressing.';
    }
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been submitted successfully.');
    } else {
        alert('Please fill out all fields before submitting.');
    }
}