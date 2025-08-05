// Open the Quick Add Modal
function openQuickAddModal() {
    const modal = document.getElementById("quickAddModal");
    modal.style.display = "block";
}

// Close the Quick Add Modal
function closeQuickAddModal() {
    const modal = document.getElementById("quickAddModal");
    modal.style.display = "none";
}



function deleteQuickAddRow(button) {
    const row = button.closest('tr');  // Use closest to ensure you're targeting the row directly

    // Ensure the row has the expected number of cells before accessing them
    const cells = row.children;
    if (cells.length < 10) {
        console.error("Row does not have the expected number of cells.");
        return;
    }

    // Extract the food item data from the row
    const calories = parseFloat(cells[2].textContent) || 0;
    const protein = parseFloat(cells[3].textContent) || 0;
    const fats = parseFloat(cells[4].textContent) || 0;
    const carbs = parseFloat(cells[5].textContent) || 0;
    const fiber = parseFloat(cells[6].textContent) || 0;
    const sugar = parseFloat(cells[7].textContent) || 0;
    const sodium = parseFloat(cells[8].textContent) || 0;
    const cholesterol = parseFloat(cells[9].textContent) || 0;
    const vitaminc = parseFloat(row.children[11].textContent)|| 0;
    const vitamind = parseFloat(row.children[12].textContent)|| 0;
    const calcium = parseFloat(row.children[15].textContent)|| 0;
    const iron = parseFloat(row.children[16].textContent)|| 0;
    const potassium = parseFloat(row.children[18].textContent)|| 0;
  
    // Update the dashboard totals
    totalCalories -= calories;
    totalProtein -= protein;
    totalFiber -= fiber;
    totalSugar -= sugar;
    totalsodium -= sodium;
    totalCarbs -= carbs;
    totalFats -= fats
    totalCholesterol -= cholesterol;

    totalvitaminC -= vitaminc;
    totalvitaminD -= vitamind;
    totalcalcium -= calcium;
    totaliron -= iron;
    totalpotassium -= potassium;


    updateTotalCaloriesDisplay();
    updateTotalProteinDisplay();
    updateTotalFiberDisplay();
    updateTotalSugarDisplay();
    updateTotalSodiumDisplay();
    updateTotalCarbsDisplay();
    updateTotalFatsDisplay();
    updateTotalCholesterolDisplay();


    updateTotalVitaminCDisplay();
    updateTotalVitaminDDisplay();
    updateTotalCalciumDisplay();
    updateTotalIronDisplay();
    updateTotalPotassiumDisplay();

    // Remove the row from the table
    row.remove();  // `remove()` is more straightforward than `parentNode.removeChild`

    // Save to backend & local storage (ensure these functions are correctly implemented)
    saveRowToBackend(row);
    saveToLocalStorage(row);
}









// Assuming you are using the oauth-1.0a library (install this using npm)
async function searchQuickAddResults() {
    const query = document.getElementById("quickAddSearchBar").value.trim();
    const resultsContainer = document.getElementById("quickAddResultsContainer");

    resultsContainer.innerHTML = "";

    if (query.length < 1) {
        // Clear any previous results and show the message
        resultsContainer.innerHTML = "<p>Search by food, brand, restaurant.........</p>";
        
        return;
    }



    try {
        // Call the C# backend API to fetch data
        const response = await fetch(`/api/foodDatabase/search?query=${encodeURIComponent(query)}`);
        const data = await response.json();


        const databaseResponse = await fetch(`/api/FoodDatabase/getfoods?query=${encodeURIComponent(query)}`);
        const databaseData = await databaseResponse.json();

        // Clear previous search results
        resultsContainer.innerHTML = '';

      


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
            displayQuickAddResult(foodItem, true);
        });

        


        // ✅ Function to display Quick Add search results
        function displayQuickAddResult(food, isFromDatabase) {
            console.log("Displaying Quick Add Result:", food);

            const checkIcon = isFromDatabase ? `<span style="color: green;">✔</span>` : "";

            const resultItem = document.createElement("div");
            resultItem.className = "quick-add-result-item";
            resultItem.innerHTML = `



 <div class="food-item">
                 <div class="food-title">
                 
                <span style="color: #cf3d3f; font-weight: bold;">${food.name}</span>
                <span class="verified-icon">${checkIcon}</span>
                </div>
                
                <div class="food-brand">${food.brand}</div> 
                <div class="food-details">${food.calories} Calories</div>
                <div class="food-details">${food.servingsize}${food.servingunit}</div>
                
                
                </div>
        
        
    `;

            // Click event to add food to log
            resultItem.addEventListener("click", () => addFoodToLog(
                food.name,
                food.calories,
                food.protein,
                food.totalFat,
                food.carbs,
                food.fiber,
                food.sugar,
                food.sodium,
                food.cholesterol,
                food.vitaminc,
                food.iron,
                food.potassium,
                food.calcium
            ));


            resultsContainer.appendChild(resultItem);
        }
        
        
        

        // Ensure the API response has valid food data
        if (data && data.foods_search && data.foods_search.results && data.foods_search.results.food && data.foods_search.results.food.length > 0) {
            // Extract total_results and max_results from the API response
            const totalResults = data.foods_search.total_results;
            const maxResults = data.foods_search.max_results;

            // Display a summary of results
            const summary = document.createElement("div");
            summary.className = "results-summary";
            summary.innerHTML = `<span style="display: block; text-align: center;">Showing ${maxResults} results out of ${totalResults} total results</span>`;
            resultsContainer.appendChild(summary);

            // Process and display FatSecret API results
            data.foods_search.results.food.forEach(food => {
                const foodName = food.food_name || "Unknown Food";
                const brandName = (food.food_type === "Brand" && food.brand_name) ? food.brand_name : "Generic";
                const checkIcon = food.food_type === "Brand" ?
                    `<img src="/logos/verifiedlogo1.svg" alt="Verified" class="verified-icon" />` : "";

                // Extract the first serving (if available)
                const serving = food.servings && food.servings.serving
                    ? (Array.isArray(food.servings.serving) ? food.servings.serving[0] : food.servings.serving)
                    : null;

                // Extract serving details safely
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
                 
                 
                 // Now extract calcium and iron safely, adding debug logs
                const calcium = serving && serving.calcium ? Math.round(serving.calcium) : 0;
                const iron = serving && serving.iron ? Math.round(serving.iron) : 0;

                
                // Create result item
                const resultItem = document.createElement("div");
                resultItem.className = "quick-add-result-item";
                resultItem.innerHTML = `

        <div class="food-item">
                 <div class="food-title">
                 
                <span style="color: #cf3d3f; font-weight: bold;">${foodName}</span>
                <span class="verified-icon">${checkIcon}</span>
                </div>
                
                <div class="food-brand">${brandName}</div> 
                <div class="food-details">${calories} Calories</div>
                <div class="food-details">${servingSize}</div>
                
                
                </div>
            `;

                // Click event to add food to log
                resultItem.addEventListener("click", () => addFoodToLog(
                    foodName, calories, protein, totalFat, carbs, fiber, sugar, sodium, cholesterol, vitaminc, iron, potassium, calcium
                ));

                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = "<p>No results found.</p>";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        resultsContainer.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    }







// Function to add food item to food log table
    function addFoodToLog(name, calories, protein, totalFat, carbs, fiber, sugar, sodium, cholesterol, vitaminc, vitamind, calcium, iron, potassium) {
        console.log("Attempting to add food:", name);

        const foodLogTableBody = document.getElementById("foodLogTableBody");

        const foodItem = {
            time: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true}),
            name: name || "",
            calories:  calories || 0,
            protein: protein || 0,
            totalFat: totalFat || 0,
            carbs: carbs || 0,
            fiber: fiber || 0,
            sugar: sugar || 0,
            sodium: sodium || 0,
            cholesterol: cholesterol || 0,
            vitamind: vitamind || 0,
            iron3: iron || 0,
            calcium: calcium || 0,
            potassium: potassium || 0,
            vitaminc: vitaminc || 0
        };

        console.log("Processed foodItem for display:", foodItem);

        // Update the dashboard totals
        totalCalories += foodItem.calories;
        totalProtein += foodItem.protein;
        totalFiber += foodItem.fiber;
        totalSugar += foodItem.sugar;
        totalsodium += foodItem.sodium;
        totalCarbs += foodItem.carbs;
        totalFats += foodItem.totalFat;
        totalCholesterol += foodItem.cholesterol;

        totalvitaminC += foodItem.vitaminc;
        totalvitaminD += foodItem.vitamind;
        totalcalcium += foodItem.calcium;
        totaliron += foodItem.iron;
        totalpotassium += foodItem.potassium;
       

        updateTotalCaloriesDisplay();
        updateTotalProteinDisplay();
        updateTotalFiberDisplay();
        updateTotalSugarDisplay();
        updateTotalSodiumDisplay();
        updateTotalCarbsDisplay();
        updateTotalFatsDisplay();
        updateTotalCholesterolDisplay();


        updateTotalVitaminCDisplay();
        updateTotalVitaminDDisplay();
        updateTotalCalciumDisplay();
        updateTotalIronDisplay();
        updateTotalPotassiumDisplay();

        // Save to backend & local storage
        saveRowToBackend(foodItem);
        saveToLocalStorage(foodItem);

        // Create a new row for the food log table
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>${foodItem.time}</td>
        <td>${foodItem.name}</td>
        <td>${foodItem.calories}</td>
        <td>${foodItem.protein}</td>
        <td>${foodItem.totalFat}</td>
        <td>${foodItem.carbs}</td>
        <td>${foodItem.fiber}</td>
        <td>${foodItem.sugar}</td>
        <td>${foodItem.sodium}</td>
        <td hidden="hidden" style="display: none">${foodItem.cholesterol}</td>
         <td hidden="hidden" style="display: none">${foodItem.folate}</td>
            <td hidden="hidden" style="display: none">${foodItem.vitaminC}</td>
            <td hidden="hidden" style="display: none">${foodItem.vitaminD}</td>
            <td hidden="hidden" style="display: none">${foodItem.riboflavin}</td>
            <td hidden="hidden" style="display: none">${foodItem.niacin}</td>
            <td hidden="hidden" style="display: none">${foodItem.calcium2}</td>
            <td hidden="hidden" style="display: none">${foodItem.iron3}</td>
            <td hidden="hidden" style="display: none">${foodItem.magnesium}</td>
            <td hidden="hidden" style="display: none">${foodItem.potassium}</td>
            <td hidden="hidden" style="display: none">${foodItem.thiamin}</td>
            <td hidden="hidden" style="display: none">${foodItem.zinc}</td>
        <td><button class="custom-delete-button" onclick="deleteQuickAddRow(this)">Delete</button></td>
    `;

        foodLogTableBody.appendChild(newRow);

        // Close the Quick Add search modal
        document.getElementById("quickAddModal").style.display = 'none';
    }



}











