document.addEventListener('DOMContentLoaded', function () {
    fetchRecipes(); // Call the function when the page loads
  
    // Fetch data from the API
    function fetchRecipes() {
      fetch('https://67014509b52042b542d74b34.mockapi.io/diet-api/food')
        .then(response => response.json())
        .then(data => {
          generateCarouselItems(data); // Pass the fetched data to another function
        })
        .catch(error => console.error('Error fetching recipes:', error));
    }
  
    // Generate the carousel items dynamically
    function generateCarouselItems(recipes) {
      const carouselInner = document.querySelector('.carousel-inner');
  
      recipes.forEach((recipe, index) => {
        // Create the carousel item element
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
          carouselItem.classList.add('active'); // Set the first item as active
        }
  
        // Create the recipe card structure
        const recipeCard = `
          <h2 class="diet-title">${recipe.name}</h2>
          <p class="diet-date">${new Date().toLocaleDateString()}</p>
          <div class="diet_card">
            <div class="diet_img">
              <img src="${recipe.img}" width="300px" alt="${recipe.name}">
            </div>
            <div class="diet_content">
              <span class="material-icons">restaurant</span>
              <h4>${recipe.name}</h4>
              <p>${recipe.description || 'This recipe is packed with nutrients and easy to prepare.'}</p>
              <button class="btn-show-more" onclick="openPopup('popup${recipe.id}')">Show More</button>
            </div>
          </div>
  
          <!-- Popup for each recipe -->
          <div class="popup" id="popup${recipe.id}">
            <div class="popup-content">
              <span class="close-btn" onclick="closePopup('popup${recipe.id}')">&times;</span>
              <img src="${recipe.img}" alt="${recipe.name}" width="300px">
              <h3>${recipe.name} Recipe</h3>
              <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
              <p>Instructions: ${recipe.instructions}</p>
            </div>
          </div>
        `;
  
        carouselItem.innerHTML = recipeCard; // Insert the card HTML
        carouselInner.appendChild(carouselItem); // Append it to the carousel
      });
    }
  
    // Function to open the popup
    function openPopup(popupId) {
      document.getElementById(popupId).style.display = 'flex';
      document.body.classList.add('hide-carousel-btns');
    }
  
    // Function to close the popup
    function closePopup(popupId) {
      document.getElementById(popupId).style.display = 'none';
      document.body.classList.remove('hide-carousel-btns');
    }
  });
  