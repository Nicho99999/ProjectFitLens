document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("createMealModal");
    const searchInput = document.getElementById("mealSearch");
    const searchResults = document.getElementById("searchResults1");
    const mealContainer = document.getElementById("mealContainer");
    const saveMealBtn = document.getElementById("saveMeal");
    const mealNameInput = document.getElementById("mealName");
    const closeModalButton = document.getElementById('closeModal1');


    let currentMeal = {
        name: '',
        items: [],
        nutrition: {
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0,
            fiber: 0,
            sugar: 0,
            sodium: 0,
            cholesterol: 0,
          
            
        }
    };


    function getMealByName(mealName) {
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        return meals.find(meal => meal.name === mealName);
    }


    function getMealProteinByName(mealName) {
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        const meal = meals.find(meal => meal.name === mealName);
        return meal ? meal.protein : null;
    }
    function getMealFatsByName(mealName) {
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        const meal = meals.find(meal => meal.name === mealName);
        return meal ? meal.fats : null;
    }

    function getMealCarbsByName(mealName) {
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        const meal = meals.find(meal => meal.name === mealName);
        return meal ? meal.carbs : null;
    }
    function getMealFiberByName(mealName) {
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        const meal = meals.find(meal => meal.name === mealName);
        return meal ? meal.fiber : null;
    }
    function getMealSugarByName(mealName) {
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        const meal = meals.find(meal => meal.name === mealName);
        return meal ? meal.sugar : null;
    }
    function getMealSodiumByName(mealName) {
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        const meal = meals.find(meal => meal.name === mealName);
        return meal ? meal.sodium : null;
    }
    function getMealCholesterolByName(mealName) {
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        const meal = meals.find(meal => meal.name === mealName);
        return meal ? meal.cholesterol : null;
    }
    
    function getMealItems(mealName){
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        const meal = meals.find(meal => meal.name === mealName);
        return meal ? meal.items : null;



    }

   


   






    function loadSavedMeals() {
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        const savedMealsList = document.getElementById('savedMealsList');
        savedMealsList.innerHTML = '';  // Clear existing entries in the list

        meals.forEach(meal => displaySavedMeal(meal));
    }

    function openCreateMealModal() {
        modal.style.display = "block";
        loadSavedMeals();  // Load saved meals when modal is opened
    }

    function closeCreateMealModal() {
        modal.style.display = "none";
        searchInput.value = "";
        searchResults.innerHTML = "";
        mealContainer.innerHTML = "";
        mealNameInput.value = "";
        currentMeal = { name: '', items: [], nutrition: { calories: 0, protein: 0, carbs: 0, fiber: 0, sugar: 0, sodium: 0, cholesterol: 0, fats: 0} };
    }

    
    
    
    
    
    
    
    
    
    
    
    function removeMealFromStorage(mealName, mealDiv) {
        let meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        meals = meals.filter(m => m.name !== mealName);
        localStorage.setItem('savedMeals', JSON.stringify(meals));
        mealDiv.remove(); // Remove the div from the DOM immediately
    }
    
    
    
    
    
    function displaySavedMeal(meal) {
        const modal = document.getElementById("nutritionFactsModal");
        const closeBtn = document.querySelector(".nutrition-close");

        closeBtn.onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };

        const mealDiv = document.createElement('div');
        mealDiv.className = 'saved-meal';
        mealDiv.style.cssText = ' display: flex; align-items: center; padding: 8px; justify-content: space-between;';
       

        const mealName = document.createElement('div');
        mealName.textContent = meal.name;
        mealDiv.appendChild(mealName);
        mealName.style.flexGrow = '1';
        

        mealName.onclick = function() {
            const mealDetails = getMealByName(meal.name);
            const protein = getMealProteinByName(meal.name);
            const fiber = getMealFiberByName(meal.name);
            const fats = getMealFiberByName(meal.name);
            const carbs = getMealCarbsByName(meal.name);
            const sugar = getMealSugarByName(meal.name);
            const sodium = getMealSodiumByName(meal.name);
            const cholestrol = getMealCholesterolByName(meal.name);




            const mealitems = getMealItems(meal.name)
           
            if (mealitems && mealitems.length > 0) {
                mealitems.forEach(item => {
                    displayMealResults(item);
                    console.log(item);
                });
            }
                
                
            if (mealDetails) {

                
                function updateTotalNutritionProtein(consumed, circleType, mealName ) {

                    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .nutrition-progress`);
                    const displayText = document.getElementById("proteinDisplayText");
                    
                    // ProtienText should display green to pulsing green when its beyond
                    // consumed amount 
                    
                    const nutritionProteinGoal = 20

                    const radius = 40; // Matches the 'r' attribute of the circle
                    const circumference = 2 * Math.PI * radius;

                    // Ensure progress is capped at 100%
                    const progress = Math.min(consumed / nutritionProteinGoal, 1); // Progress as a fraction (0 to 1)

                    // Calculate the stroke-dashoffset for forward progress
                    const offset = circumference * (1 - progress);

                    // Apply the calculated styles
                    progressCircle.style.strokeDasharray = `${circumference}`;
                    progressCircle.style.strokeDashoffset = `${offset}`;
                    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing

                    

                    // Check if the goal is hit or exceeded
                    if (consumed >= 20) {
                        progressCircle.classList.add("nutritionproteinnglow"); // Add glow effect
                       displayText.style.color = 'green'
                        
                    } else {
                        progressCircle.classList.remove("nutritionproteinnglow"); // Remove glow effect
                        displayText.style.color = '';


                    }

                    
                    const remainingNutritionProtein = protein;
                    document.getElementById("nutritionProteinDisplay").textContent = `${remainingNutritionProtein} g`;
                    

                }
                
                
                updateTotalNutritionProtein(protein, "NutritionProtein", mealDetails.name);
                
                console.log(protein)
               


             

                function updateTotalNutritionCarbs(consumed, circleType, mealName ) {

                    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .nutrition-progress`);
                    const nutritionCarbsGoal = 45; // Defined globally or passed in context where used


                    const radius = 40; // Matches the 'r' attribute of the circle
                    const circumference = 2 * Math.PI * radius;

                    // Ensure progress is capped at 100%
                    const progress = Math.min(consumed / nutritionCarbsGoal, 1); // Progress as a fraction (0 to 1)

                    // Calculate the stroke-dashoffset for forward progress
                    const offset = circumference * (1 - progress);

                    // Apply the calculated styles
                    progressCircle.style.strokeDasharray = `${circumference}`;
                    progressCircle.style.strokeDashoffset = `${offset}`;
                    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing

                    
                    // Check if the goal is hit or exceeded
                    if (consumed >= 45) {
                        progressCircle.classList.add("nutritioncarbsglow"); // Add glow effect
                    } else {
                        progressCircle.classList.remove("nutritioncarbsglow"); // Remove glow effect
                    }
                    
                    const remainingNutritionCarbs = carbs;
                    document.getElementById("nutritionCarbsDisplay").textContent = `${remainingNutritionCarbs} g`;

                    
                    console.log(remainingNutritionCarbs);
                   
                }
                
                updateTotalNutritionCarbs(carbs, "NutritionCarbs", mealDetails.name);

                
                
                
                

                function updateTotalNutritionFats(consumed, circleType, mealName ) {

                    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .nutrition-progress`);
                    const nutritionFatsGoal = 15; // Defined globally or passed in context where used


                    const radius = 40; // Matches the 'r' attribute of the circle
                    const circumference = 2 * Math.PI * radius;

                    // Ensure progress is capped at 100%
                    const progress = Math.min(consumed / nutritionFatsGoal, 1); // Progress as a fraction (0 to 1)

                    // Calculate the stroke-dashoffset for forward progress
                    const offset = circumference * (1 - progress);

                    // Apply the calculated styles
                    progressCircle.style.strokeDasharray = `${circumference}`;
                    progressCircle.style.strokeDashoffset = `${offset}`;
                    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing

                    
                    // Check if the goal is hit or exceeded
                    if (consumed >= 15) {
                        progressCircle.classList.add("nutritionfatsglow"); // Add glow effect
                    } else {
                        progressCircle.classList.remove("nutritionfatsglow"); // Remove glow effect
                    }
                    
                    const remainingNutritionFats =  fats;
                    document.getElementById("nutritionFatsDisplay").textContent = `${remainingNutritionFats} g`;


                }

                updateTotalNutritionFats(fats, "NutritionFats", mealDetails.name);








                function updateTotalNutritionFiber(consumed, circleType, mealName ) {

                    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .nutrition-progress`);
                    const nutritionFiberGoal = 5; // Defined globally or passed in context where used


                    const radius = 40; // Matches the 'r' attribute of the circle
                    const circumference = 2 * Math.PI * radius;

                    // Ensure progress is capped at 100%
                    const progress = Math.min(consumed / nutritionFiberGoal, 1); // Progress as a fraction (0 to 1)

                    // Calculate the stroke-dashoffset for forward progress
                    const offset = circumference * (1 - progress);

                    // Apply the calculated styles
                    progressCircle.style.strokeDasharray = `${circumference}`;
                    progressCircle.style.strokeDashoffset = `${offset}`;
                    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing




                    // Check if the goal is hit or exceeded
                    if (consumed >= 5) {
                        progressCircle.classList.add("nutritionfiberglow"); // Add glow effect
                    } else {
                        progressCircle.classList.remove("nutritionfiberglow"); // Remove glow effect
                    }

                    
                    const remainingNutritionFiber =  fiber;
                    document.getElementById("nutritionFiberDisplay").textContent = `${remainingNutritionFiber} g`;

                    console.log(remainingNutritionFiber)

                }

                
                updateTotalNutritionFiber(fiber, "NutritionFiber", mealDetails.name);







                function updateTotalNutritionSugar(consumed, circleType, mealName ) {

                    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .nutrition-progress`);
                    const nutritionSugarGoal = 10; // Defined globally or passed in context where used


                    const radius = 40; // Matches the 'r' attribute of the circle
                    const circumference = 2 * Math.PI * radius;

                    // Ensure progress is capped at 100%
                    const progress = Math.min(consumed / nutritionSugarGoal, 1); // Progress as a fraction (0 to 1)

                    // Calculate the stroke-dashoffset for forward progress
                    const offset = circumference * (1 - progress);

                    // Apply the calculated styles
                    progressCircle.style.strokeDasharray = `${circumference}`;
                    progressCircle.style.strokeDashoffset = `${offset}`;
                    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing




                    // Check if the goal is hit or exceeded
                    if (consumed >= 10) {
                        progressCircle.classList.add("nutritionsugarglow"); // Add glow effect
                    } else {
                        progressCircle.classList.remove("nutritionsugarglow"); // Remove glow effect
                    }




                    const remainingNutritionSugar =  sugar;
                    document.getElementById("nutritionSugarDisplay").textContent = `${remainingNutritionSugar} g`;


                }
                
                updateTotalNutritionSugar(sugar, "NutritionSugar", mealDetails.name);








                
                function updateTotalNutritionSodium(consumed, circleType, mealName ) {

                    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .nutrition-progress`);
                    const nutritionSodiumGoal = 500; // Defined globally or passed in context where used


                    const radius = 40; // Matches the 'r' attribute of the circle
                    const circumference = 2 * Math.PI * radius;

                    // Ensure progress is capped at 100%
                    const progress = Math.min(consumed / nutritionSodiumGoal, 1); // Progress as a fraction (0 to 1)

                    // Calculate the stroke-dashoffset for forward progress
                    const offset = circumference * (1 - progress);

                    // Apply the calculated styles
                    progressCircle.style.strokeDasharray = `${circumference}`;
                    progressCircle.style.strokeDashoffset = `${offset}`;
                    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing




                    // Check if the goal is hit or exceeded
                    if (consumed >= 500) {
                        progressCircle.classList.add("nutritionsodiumglow"); // Add glow effect
                    } else {
                        progressCircle.classList.remove("nutritionsodiumglow"); // Remove glow effect
                    }




                    const remainingNutritionSodium =  sodium;
                    document.getElementById("nutritionSodiumDisplay").textContent = `${remainingNutritionSodium} g`;


                }



                updateTotalNutritionSodium(sodium, "NutritionSodium", mealDetails.name);



                
            } else {
                console.log(`No details found for meal '${meal.name}'.`);
            }
            
            
            
            
            
            modal.style.display = "block";
        };
        




        const iconsDiv = document.createElement('div');
        iconsDiv.style.textAlign = 'right';

        const deleteSpan = document.createElement('span');
        deleteSpan.textContent = '✖';
        deleteSpan.style.cursor = 'pointer';
        deleteSpan.onclick = function(event) {
            event.stopPropagation();
            removeMealFromStorage(meal.name, mealDiv);
        };
        iconsDiv.appendChild(deleteSpan);

        mealDiv.appendChild(iconsDiv);

        document.getElementById('savedMealsList').appendChild(mealDiv);
    }


   




















































    // ✅ Fetch Data for Create a Meal (EXACTLY like Quick Add)
    async function searchCreateMealResults() {
        const query = searchInput.value.trim();
        searchResults.innerHTML = "";

        if (query.length < 1) {
            searchResults.innerHTML = "<p>Search by food, brand, restaurant...</p>";
            return;
        }

        try {
            // Call the C# backend API to fetch data
            const response = await fetch(`/api/foodDatabase/search?query=${encodeURIComponent(query)}`);
            const data = await response.json();

            const databaseResponse = await fetch(`/api/FoodDatabase/getfoods?query=${encodeURIComponent(query)}`);
            const databaseData = await databaseResponse.json();

            // Clear previous search results
            searchResults.innerHTML = '';

            // 🌟 Process and display Database results first
            databaseData.forEach(food => {
                const foodItem = {
                    name: food.name || "Unknown Food",
                    brand: food.brand || "Unknown Brand",
                    servingsize: food.servingsize || "N/A",
                    servingunit: food.servingUnit || "Serving",
                    calories: Math.round(food.calories) || 0,
                    protein: Math.round(food.protein) || 0,
                    totalFat: Math.round(food.fats) || 0,
                    carbs: Math.round(food.carbs) || 0,
                    fiber: Math.round(food.fiber) || 0,
                    sugar: Math.round(food.sugar) || 0,
                    sodium: Math.round(food.sodium) || 0,
                    cholesterol: Math.round(food.cholesterol) || 0
                };
                displayCreateMealResult(foodItem, true);
            });

            // ✅ Process and display FatSecret API results
            if (data && data.foods_search && data.foods_search.results && data.foods_search.results.food.length > 0) {
                const totalResults = data.foods_search.total_results;
                const maxResults = data.foods_search.max_results;

                // Display a summary of results
                const summary = document.createElement("div");
                summary.className = "results-summary";
                summary.innerHTML = `<span style="display: block; text-align: center;">Showing ${maxResults} results out of ${totalResults} total results</span>`;
                searchResults.appendChild(summary);

                // Process API results
                data.foods_search.results.food.forEach(food => {
                    const foodName = food.food_name || "Unknown Food";
                    const foodURL = food.food_url;
                    const brandName = (food.food_type === "Brand" && food.brand_name) ? food.brand_name : "Generic";
                    const checkIcon = food.food_type === "Brand" ?
                        `<img src="/logos/verifiedlogo1.svg" alt="Verified" class="verified-icon" />` : "";

                    // Extract the first serving (if available)
                    const serving = food.servings && food.servings.serving
                        ? (Array.isArray(food.servings.serving) ? food.servings.serving[0] : food.servings.serving)
                        : null;

                    // Extract serving details
                    const servingSize = serving ? serving.serving_description : "N/A";
                    const calories = serving && serving.calories ? Math.round(serving.calories) : 0;
                    const protein = serving && serving.protein ? Math.round(serving.protein) : 0;
                    const totalFat = serving && serving.fat ? Math.round(serving.fat) : 0;
                    const carbs = serving && serving.carbohydrate ? Math.round(serving.carbohydrate) : 0;
                    const fiber = serving && serving.fiber ? Math.round(serving.fiber) : 0;
                    const sugar = serving && serving.sugar ? Math.round(serving.sugar) : 0;
                    const sodium = serving && serving.sodium ? Math.round(serving.sodium) : 0;
                    const cholesterol = serving && serving.cholesterol ? Math.round(serving.cholesterol) : 0;
                    const vitaminc = serving && serving.vitamin_c ? Math.round(serving.vitamin_c) : 0;
                    const potassium = serving && serving.potassium ? Math.round(serving.potassium) : 0;
                    const calcium = serving && serving.calcium ? Math.round(serving.calcium) : 0;
                    const iron = serving && serving.iron ? Math.round(serving.iron) : 0;

                    // Create food item
                    const foodItem = {
                        name: foodName,
                        fooddescription: foodURL,
                        brand: brandName,
                        servingsize: servingSize,
                        servingunit: "",
                        calories,
                        protein,
                        totalFat,
                        carbs,
                        fiber,
                        sugar,
                        sodium,
                        cholesterol
                    };
                    displayCreateMealResult(foodItem);
                   
                });
            } else {
                searchResults.innerHTML += "<p>No results found.</p>";
            }

        } catch (error) {
            console.error("Error fetching meal data:", error);
            searchResults.innerHTML = "<p>Something went wrong. Please try again later.</p>";
        }
    }


   

    


    function displayCreateMealResult(food) {
        
        const resultItem = document.createElement("div");
        const checkIcon = food.brand !== "Generic" ?
            `<img src="/logos/verifiedlogo1.svg" alt="Verified" class="verified-icon" />` : "";

        resultItem.className = "quick-add-result-item";
        resultItem.innerHTML = `
            <div class="food-item">
                <div class="food-title">
                    <span style="color: #cf3d3f; font-weight: bold;">${food.name}</span>
                    <span class="verified-icon">${checkIcon}</span>
                </div>
                <div class="food-brand">${food.brand}</div>
                <div class="food-details">${food.calories} Calories</div>
                <div class="food-details">${food.servingsize} ${food.servingunit}</div>
            </div>
        `;

        resultItem.draggable = true;
        resultItem.dataset.food = JSON.stringify(food);
        resultItem.addEventListener("dragstart", function (e) {
            const foodDataString = JSON.stringify(food);
            console.log("Dragging food data:", foodDataString); // Debug: Log the data being dragged
            e.dataTransfer.setData("text/plain", foodDataString);
        });

        searchResults.appendChild(resultItem);
    }

    
    searchInput.addEventListener('input', async () => {
        await searchCreateMealResults();
    });

    mealContainer.addEventListener('dragover', (e) => e.preventDefault());








    mealContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const itemData = JSON.parse(e.dataTransfer.getData('text/plain'));
        currentMeal.name = mealNameInput.value;
        console.log(itemData)
        createMealItem(itemData);
        
        
            currentMeal.items.push(itemData);
            
            currentMeal.nutrition.protein += parseInt(itemData.protein) || 0;
            currentMeal.nutrition.carbs += parseInt(itemData.carbs) || 0;
            currentMeal.nutrition.fats += parseInt(itemData.totalFat) || 0;
            currentMeal.nutrition.fiber += parseInt(itemData.fiber) || 0;
            currentMeal.nutrition.sugar += parseInt(itemData.sugar) || 0;
            currentMeal.nutrition.sodium += parseInt(itemData.sodium) || 0;



            

    });

    closeModalButton.addEventListener('click', closeCreateMealModal);
    
    saveMealBtn.addEventListener("click", function () {
        const meals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        const mealData = {
            name: mealNameInput.value,
            items: currentMeal.items,
            protein: currentMeal.nutrition.protein, // Ensure nutrition data is included
            carbs: currentMeal.nutrition.carbs,
            fiber: currentMeal.nutrition.fiber,
            fats: currentMeal.nutrition.fats,
            sugar: currentMeal.nutrition.sugar,
            sodium: currentMeal.nutrition.sodium,
            cholesterol: currentMeal.nutrition.cholesterol

        };
        
        
        
        meals.push(mealData);
        localStorage.setItem('savedMeals', JSON.stringify(meals));
        displaySavedMeal(mealData);
        clearMealCreationUI()
        
        
        
        closeCreateMealModal();  // Close modal and reset UI after saving
    });



















    function clearMealCreationUI() {
        currentMeal = { name: '', items: [], nutrition: { calories: 0, protein: 0, fiber: 0, carbs: 0, sugar: 0, sodium: 0, cholesterol: 0, fats: 0 }};
        mealNameInput.value = '';
    }


  


    function createMealItem(itemData) {
        
        
        const mealItem = document.createElement('div');
        mealItem.className = 'meal-item';
        mealItem.textContent = `${itemData.name} - ${itemData.calories} calories `;

        const deleteBtn = document.createElement('span');
        deleteBtn.className = 'deletemeal-btn';
        deleteBtn.textContent = '✖';
        deleteBtn.onclick = () => {
            totalnutritionProtein -= parseInt(itemData.protein) || 0;
            mealItem.remove();
        };

        mealItem.appendChild(deleteBtn);
        
        mealContainer.appendChild(mealItem);
        
        return mealItem;
    }




   


    document.getElementById("closeModal1").addEventListener("click", closeCreateMealModal);
    window.openCreateMealModal = openCreateMealModal;


});










function displayMealResults(food) {

    const resultItem = document.createElement("div");
    const checkIcon = food.brand !== "Generic" ?
        `<img src="/logos/verifiedlogo1.svg" alt="Verified" class="verified-icon" />` : "";

    resultItem.className = "quick-add-result-item";
    resultItem.style.transform = "scale(0.8)"; // Apply a scale transform to make the element smaller
    resultItem.style.transformOrigin = "top left"; // Set the origin of transformation
    resultItem.style.width = "125%";  // Increase width to compensate for scaling down

    resultItem.innerHTML = `
        <div class="food-item">
                <div class="food-title">
                    <span style="color: #cf3d3f; font-weight: bold;">${food.name}</span>
                    <span class="verified-icon">${checkIcon}</span>
                </div>
                <div class="food-brand">${food.brand}</div>
                <div style="color: #ff7e7e; font-weight: bolder" class="food-details">${food.calories} Calories</div> 
               
                <div class="food-details">${food.servingsize} ${food.servingunit}</div>
            </div>
        `;


    console.log(food.fooddescription)


    resultItem.addEventListener('click', function() {
        window.open(food.fooddescription, '_blank'); // Opens the link in a new tab
        
    });
    
    const mealsListContainer = document.getElementById('savedMealsListProtein');
    mealsListContainer.appendChild(resultItem);

}



































  
    

























