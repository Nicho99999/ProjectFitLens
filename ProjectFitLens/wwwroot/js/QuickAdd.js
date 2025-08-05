// Get the modal and close button

const modal = document.getElementById('nutritionModal');
const closeModal = document.getElementById('closeModal');
// Show the sidebar (modal) by adding the 'open' class





function showQuickAddForm() {
    modal.style.display = 'block'; // Show the modal first
    setTimeout(() => modal.classList.add('open'), 10); // Add 'open' class with a slight delay for the transition
}



// Hide the modal (sidebar) when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.classList.remove('open'); // Remove the 'open' class to slide the sidebar out
    setTimeout(() => modal.style.display = 'none', 1500); // Hide modal after the animation
});

// Hide the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('open');
        setTimeout(() => modal.style.display = 'none', 1500); // Hide modal after the animation
    }
});

// Event listener for the Save button
document.getElementById('saveButton').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the form from submitting (if it's a form)

    
    // Get the quantity value from the input field
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    // Get the name of the item
    const itemName = document.getElementById('description').value;

    // Check if the quantity is a valid number
    if (quantity <= 0) {
        alert('Please enter a valid quantity.');
        return;  // Exit if the quantity is invalid
    }

    // Array to store the duplicated items
    let items = [];

    // Duplicate the item based on the quantity
    for (let i = 0; i < quantity; i++) {
        items.push(itemName);  // Add the item to the list
    }

    
    // Optionally: you could display the duplicated items in the DOM, 
    // or save the items as needed for further processing.
    // Example: Display the items in an element with the id 'itemList'
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear any previous items
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;  // Set the text content to the item name
        itemList.appendChild(listItem); // Append the item to the list
    });
});










// Function to check the reset time (midnight)
function checkSessionResetTime() {
    const savedDate = localStorage.getItem("timestamp"); // Retrieve saved date
    const currentTimestamp = new Date().toLocaleDateString().split('T')[0]; // Get current DateTime in ISO format

    // If no saved date exists or it's a new day
    if (!savedDate || savedDate !== currentTimestamp) {
        console.log("Resetting food log for the new day...");
        localStorage.removeItem("foodLogSession"); // Clear food log session
        localStorage.removeItem("waterLevel")
        document.getElementById("foodLogTableBody").innerHTML = ""; // Clear table body
        localStorage.setItem("timestamp", currentTimestamp); // Save new timestamp
        window.location.reload(); // Optionally reload the page to apply changes
    }
}

// Run this function when the page loads
function initializeTimestamp() {
    const currentTimestamp = new Date().toLocaleDateString().split('T')[0];
    const savedDate = localStorage.getItem("timestamp"); // Retrieve saved date

    if (!savedDate || savedDate !== currentTimestamp) {
        console.log("Initializing timestamp...");
        checkSessionResetTime(); // Reset if no timestamp exists or the day has changed
    } else {
        console.log("Dashboard timestamp already exists:", savedDate);
    }
}

window.addEventListener("load", initializeTimestamp);



// Set an interval to check every 5 minutes (300000 ms)
setInterval(checkSessionResetTime, 300000); // Check every 5 minutes
















    // Main Macros 
  let totalCalories = 0
  let totalProtein = 0
  let totalFats = 0
  let totalCarbs = 0
  let totalFiber = 0
  let totalSugar = 0
  let totalsodium = 0

     // Cholesterol
   let totalCholesterol = 0



// Additional Macros
let totalthiamin = 0
let totalvitaminC = 0
let totalvitaminD = 0
let totalniacin = 0
let totalriboflavin = 0
let totalcalcium = 0
let totaliron = 0
let totalmagnesium = 0
let totalpotassium = 0
let totalzinc = 0
let totalfolate = 0




// Create A Meal Values
let totalnutritionProtein = 0






document.getElementById("saveButton").addEventListener("click", function () {
    const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;  // Get the quantity entered by the user (default to 1)
    
        
        
    
    
    const foodItem = {
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }), // Custom time format
        name: document.getElementById("description").value || "",
        brand: document.getElementById("brand").value || "",
        servingsize: parseFloat(document.getElementById("servingSize").value) || 0,
        servingunit: document.getElementById("unit").value || "",
        servingpercontainer: parseFloat(document.getElementById("servingsPerContainer").value) || 0,
    calories: parseFloat(document.getElementById("calories").value) || 0, 
        protein: parseFloat(document.getElementById("protein").value) || 0,
    totalFat: parseFloat(document.getElementById("totalFat").value) || 0,
    carbs: parseFloat(document.getElementById("carbs").value) || 0,
    fiber: parseFloat(document.getElementById("fiber").value) || 0,
    sugar: parseFloat(document.getElementById("sugar").value) || 0,
    sodium: parseFloat(document.getElementById("sodium").value) || 0,
        cholesterol: parseFloat(document.getElementById("cholesterol").value) || 0,
        
        
        thiamin: parseFloat( document.getElementById("thiamin").value) || 0,
        vitaminC: parseFloat(document.getElementById("vitaminC").value) || 0,
        vitaminD: parseFloat(document.getElementById("vitaminD").value) || 0,
        riboflavin: parseFloat(document.getElementById("riboflavin").value) || 0,
        folate: parseFloat(document.getElementById("folate").value) || 0,
        calcium1: parseFloat(document.getElementById("calcium").value) || 0,
        iron1: parseFloat(document.getElementById("iron").value) || 0,
        magnesium: parseFloat(document.getElementById("magnesium").value) || 0,
        potassium: parseFloat(document.getElementById("potassium").value) || 0,
        zinc: parseFloat(document.getElementById("zinc").value) || 0,
        niacin: parseFloat(document.getElementById("niacin").value) || 0,
};

    
    
    
    
    for (let i = 0; i < quantity; i++) {

        // Add the calories to the total
        totalCalories += foodItem.calories;
        totalProtein += foodItem.protein;
        totalFiber += foodItem.fiber;
        totalSugar += foodItem.sugar;
        totalsodium += foodItem.sodium;
        totalCarbs += foodItem.carbs;
        totalFats += foodItem.totalFat;
        totalCholesterol += foodItem.cholesterol;

        totalniacin += foodItem.niacin;
        totalvitaminC += foodItem.vitaminC;
        totalvitaminD += foodItem.vitaminD;
        totalriboflavin += foodItem.riboflavin;
        totalfolate += foodItem.folate;
        totalcalcium += foodItem.calcium1;
        totaliron += foodItem.iron1;
        totalmagnesium += foodItem.magnesium;
        totalpotassium += foodItem.potassium;
        totalzinc += foodItem.zinc;
        totalthiamin += foodItem.thiamin;

             saveRowToBackend(foodItem)
        
             savetoFoodDatabase(foodItem)
            
       
             updateTotalCaloriesDisplay();
             updateTotalProteinDisplay();
             updateTotalFiberDisplay();
             updateTotalSugarDisplay();
             updateTotalSodiumDisplay();
             updateTotalCarbsDisplay();
             updateTotalFatsDisplay();
             updateTotalCholesterolDisplay();

             updateTotalNiacinDisplay();
             updateTotalVitaminCDisplay();
             updateTotalVitaminDDisplay();
             updateTotalRiboflavinDisplay();
             updateTotalFolateDisplay();
             updateTotalCalciumDisplay();
             updateTotalIronDisplay();
             updateTotalMagnesiumDisplay();
             updateTotalPotassiumDisplay();
             updateTotalThiaminDisplay();
             updateTotalZincDisplay();



       

         
        // Create a new table row for the food item
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
            <td hidden="hidden" style="display: none">${foodItem.calcium1}</td>
            <td hidden="hidden" style="display: none">${foodItem.iron1}</td>
            <td hidden="hidden" style="display: none">${foodItem.magnesium}</td>
            <td hidden="hidden" style="display: none">${foodItem.potassium}</td>
            <td hidden="hidden" style="display: none">${foodItem.thiamin}</td>
            <td hidden="hidden" style="display: none">${foodItem.zinc}</td>

            <td><button class="custom-delete-button" onclick="deleteRow(this)">Delete</button></td>

        `;
        
        


        document.getElementById("foodLogTableBody").appendChild(newRow);
       
    }
        modal.style.display = 'none'; // Close the modal


    saveToLocalStorage(foodItem);
   

        // Clear the form inputs
    document.getElementById("nutritionForm").reset();
});

    // Function to delete a row and update the total calories
    function deleteRow(button) {
        const row = button.closest('tr');  // Using closest('tr') ensures we target the row directly


        const time = (row.children[0].textContent); // Retrieve the calories from the row
        const name = (row.children[1].textContent); // Retrieve the calories from the row
        const calories = parseFloat(row.children[2].textContent); // Retrieve the calories from the row
        const protein = parseFloat(row.children[3].textContent);
        const fats = parseFloat(row.children[4].textContent);
        const carbs = parseFloat(row.children[5].textContent);
        const fiber = parseFloat(row.children[6].textContent);
        const sugar = parseFloat(row.children[7].textContent);
        const sodium = parseFloat(row.children[8].textContent);
        const cholesterol = parseFloat(row.children[9].textContent);
        
        
        
        const folate = parseFloat(row.children[10].textContent) 
        const vitaminc = parseFloat(row.children[11].textContent) 
        const vitamind = parseFloat(row.children[12].textContent)
        const riboflavin = parseFloat(row.children[13].textContent)
        const niacin = parseFloat(row.children[14].textContent)
        const calcium = parseFloat(row.children[15].textContent)
        const iron = parseFloat(row.children[16].textContent)
        const magnesium = parseFloat(row.children[17].textContent)
        const potassium = parseFloat(row.children[18].textContent)
        const thiamin = parseFloat(row.children[19].textContent)
        const zinc = parseFloat(row.children[20].textContent)


        saveToLocalStorage(name, calories, protein, fats, carbs, fiber, sugar, sodium, cholesterol, folate, vitaminc, vitamind, riboflavin, niacin, calcium, iron, magnesium, potassium, thiamin, zinc,)
        deleteRowToBackend(calories, protein, fats, carbs, fiber, sugar, sodium, cholesterol, folate, vitaminC, vitaminD, riboflavin, niacin, calcium, iron, magnesium, potassium, thiamin, zinc,)


        // Remove the row from the table
        row.remove();  // `remove()` is simpler and more modern

    // Subtract calories from the total
    totalCalories -= calories;
    totalProtein -= protein;
    totalFats -= fats;
    totalCarbs -= carbs;
    totalFiber -= fiber;
    totalSugar -= sugar;
    totalsodium -= sodium;
    totalCholesterol -= cholesterol;

     totalfolate -= folate;
     totalvitaminC -= vitaminC;
     totalvitaminD -= vitaminD;
     totalriboflavin -= riboflavin;
     totalthiamin -= thiamin;
    totalcalcium -= calcium;
    totaliron -= iron;
    totalmagnesium -= magnesium;
    totalpotassium -= potassium;
    totalniacin -= niacin;
    totalzinc -= zinc;

       


        updateTotalCaloriesDisplay();
        updateTotalProteinDisplay();
        updateTotalFiberDisplay();
        updateTotalSugarDisplay();
        updateTotalSodiumDisplay();
        updateTotalCarbsDisplay();
        updateTotalFatsDisplay();
        updateTotalCholesterolDisplay();

        updateTotalNiacinDisplay();
        updateTotalVitaminCDisplay();
        updateTotalVitaminDDisplay();
        updateTotalRiboflavinDisplay();
        updateTotalFolateDisplay();
        updateTotalCalciumDisplay();
        updateTotalIronDisplay();
        updateTotalMagnesiumDisplay();
        updateTotalPotassiumDisplay();
        updateTotalThiaminDisplay();
        updateTotalZincDisplay();



        
    }

    
    
    

// Save the entire session to localStorage
function saveToLocalStorage() {
    const tableBody = document.getElementById("foodLogTableBody");
    const rows = tableBody.getElementsByTagName("tr");
    const foodLog = [];

    // Loop through rows and gather food item data
    for (let row of rows) {
        const foodItem = {
            time: row.children[0].textContent,
            name: row.children[1].textContent,
            calories: parseFloat(row.children[2].textContent) || 0,
            protein: parseFloat(row.children[3].textContent) || 0,
            totalFat: parseFloat(row.children[4].textContent) || 0,
            carbs: parseFloat(row.children[5].textContent) || 0,
            fiber: parseFloat(row.children[6].textContent) || 0,
            sugar: parseFloat(row.children[7].textContent) || 0,
            sodium: parseFloat(row.children[8].textContent) || 0,
            cholesterol: parseFloat(row.children[9].textContent) || 0,
            folate: parseFloat(row.children[10]?.textContent) || 0,
            vitaminC: parseFloat(row.children[11]?.textContent) || 0,
            vitaminD: parseFloat(row.children[12]?.textContent) || 0,
            riboflavin: parseFloat(row.children[13]?.textContent) || 0,
            niacin: parseFloat(row.children[14]?.textContent) || 0,
            calcium2: parseFloat(row.children[15]?.textContent) || 0,
            iron2: parseFloat(row.children[16]?.textContent) || 0,
            magnesium: parseFloat(row.children[17]?.textContent) || 0,
            potassium: parseFloat(row.children[18]?.textContent) || 0,
            thiamin: parseFloat(row.children[19]?.textContent) || 0,
            zinc: parseFloat(row.children[20]?.textContent) || 0,
        };
        foodLog.push(foodItem);
    }

    const totals = {
        totalCalories,
        totalProtein,
        totalFats,
        totalCarbs,
        totalFiber,
        totalSugar,
        totalsodium,
        totalCholesterol,
        totalfolate,
        totalvitaminC,
        totalvitaminD,
        totalriboflavin,
        totalniacin,
        totalcalcium,
        totaliron,
        totalmagnesium,
        totalpotassium,
        totalthiamin,
        totalzinc,
    };

    const sessionData = { foodLog, totals };
    localStorage.setItem("foodLogSession", JSON.stringify(sessionData));
}


// Load the session from localStorage
function loadSession() {
    const savedData = localStorage.getItem("foodLogSession");
    if (savedData) {
        const { foodLog, totals } = JSON.parse(savedData);

        // Reconstruct the food log table
        foodLog.forEach(foodItem => {
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
            <td hidden="hidden" style="display: none">${foodItem.iron2}</td>
            <td hidden="hidden" style="display: none">${foodItem.magnesium}</td>
            <td hidden="hidden" style="display: none">${foodItem.potassium}</td>
            <td hidden="hidden" style="display: none">${foodItem.thiamin}</td>
            <td hidden="hidden" style="display: none">${foodItem.zinc}</td>
                           <td><button class="custom-delete-button" onclick="deleteRow(this)">Delete</button></td>

            `;
            document.getElementById("foodLogTableBody").appendChild(newRow);
        });

        // Restore totals
        totalCalories = totals.totalCalories || 0;
        totalProtein = totals.totalProtein || 0;
        totalFats = totals.totalFats || 0;
        totalCarbs = totals.totalCarbs || 0;
        totalFiber = totals.totalFiber || 0;
        totalSugar = totals.totalSugar || 0;
        totalsodium = totals.totalsodium || 0;
        totalCholesterol = totals.totalCholesterol || 0;

        totalfolate = totals.totalfolate || 0;
        totalvitaminC = totals.totalvitaminC || 0;
        totalvitaminD = totals.totalvitaminD || 0;
        totalriboflavin = totals.totalriboflavin || 0;
        totalniacin = totals.totalniacin || 0;
        totalcalcium = totals.totalcalcium || 0;
        totaliron = totals.totaliron || 0;
        totalmagnesium = totals.totalmagnesium || 0;
        totalpotassium = totals.totalpotassium || 0;
        totalthiamin = totals.totalthiamin || 0;
        totalzinc = totals.totalzinc || 0;

        // Update totals display
        updateTotalCaloriesDisplay();
        updateTotalProteinDisplay();
        updateTotalFiberDisplay();
        updateTotalSugarDisplay();
        updateTotalSodiumDisplay();
        updateTotalCarbsDisplay();
        updateTotalFatsDisplay();
        updateTotalCholesterolDisplay();

        updateTotalNiacinDisplay();
        updateTotalVitaminCDisplay();
        updateTotalVitaminDDisplay();
        updateTotalRiboflavinDisplay();
        updateTotalFolateDisplay();
        updateTotalCalciumDisplay();
        updateTotalIronDisplay();
        updateTotalMagnesiumDisplay();
        updateTotalPotassiumDisplay();
        updateTotalThiaminDisplay();
        updateTotalZincDisplay();
        
        

    }

    // Load the water level from localStorage
    const savedWaterLevel = localStorage.getItem('waterLevel');
    if (savedWaterLevel) {
        const waterLevel = JSON.parse(savedWaterLevel);

        // Update the UI with the water level
        const waterLevelElement = document.getElementById("water-level"); // Replace with your element ID
        if (waterLevelElement) {
            waterLevelElement.textContent = ` ${waterLevel} `; // Adjust display logic as needed
        }

        // Optionally, update a progress bar or other UI component
        const waterProgressBar = document.getElementById("water-level"); // Replace with your progress bar ID
        if (waterProgressBar) {
            waterProgressBar.value = waterLevel; // Assuming the progress bar uses a value attribute
        }
    }
    
    
    // Load the cup styles from localStorage
    const savedCupStyles = localStorage.getItem('cupStyles');
    if (savedCupStyles) {
        const cupStyles = JSON.parse(savedCupStyles);
        const cup = document.getElementById("cup"); // Replace with your element ID
        if (cup && cupStyles.boxShadow) {
            cup.style.boxShadow = cupStyles.boxShadow;
        }
    }


    
}

// Load the session when the page loads
window.addEventListener("load", loadSession);










function getLocalDateString() {
    const now = new Date();
    // Format as 'YYYY-MM-DD' using local timezone
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

let currentTimestamp = getLocalDateString();


// Function to save the row data to the backend
function saveRowToBackend(foodItem) {
    
    
    // Data object to be sent to the backend
    const rowData = {

        
        Calories: foodItem.calories || 0,
        Protein: foodItem.protein || 0,
        Carbs: foodItem.carbs || 0,
        Fats: foodItem.totalFat || 0,
        Fiber: foodItem.fiber || 0,
        Sugar: foodItem.sugar || 0,
        Sodium: foodItem.sodium || 0,
        Cholesterol: foodItem.cholesterol || 0,
        VitaminC: foodItem.vitaminC || 0,
        VitaminD: foodItem.vitaminD || 0,
        Calcium: foodItem.calcium || 0,
        Iron: foodItem.iron || 0,
        Magnesium: foodItem.magnesium || 0,
        Potassium: foodItem.potassium || 0,
        Zinc: foodItem.zinc || 0,
        Thiamin: foodItem.thiamin || 0,
        Niacin: foodItem.niacin || 0,
        Riboflavin: foodItem.riboflavin || 0,
        Folate: foodItem.folate || 0,
        Timestamp: currentTimestamp,
        
       
       
    };
    
// Store data temporarily in a session
    sessionStorage.setItem('Athlete', JSON.stringify(rowData));

    // Axios POST request
    axios.post('api/SessionUpdate/update', rowData)
        .then(response => {
            console.log("Data saved successfully:", response.data);
            alert("Food item saved to the dashboard!");
        })
        .catch(error => {
            console.error("Error saving data:", error);
            alert("Failed to save the food item.");
        });
}





// Function to save the row data to the backend
function deleteRowToBackend(calories, protein, fats, carbs, fiber, sugar, sodium, cholesterol, folate, vitaminC, vitaminD, riboflavin, niacin, calcium, iron, magnesium, potassium, thiamin, zinc,) {


    // Data object to be sent to the backend
    const rowData = {


        Calories: calories || 0,
        Protein: protein || 0,
        Fats: fats || 0,
        Carbs: carbs || 0,
        Fiber: fiber || 0,
        Sugar: sugar || 0,
        Sodium: sodium || 0,
        Cholesterol: cholesterol || 0,
        Folate: folate || 0,
        VitaminC: vitaminC || 0,
        VitaminD: vitaminD || 0,
        Riboflavin: riboflavin || 0,
        Niacin: niacin || 0,
        Calcium: calcium || 0,
        Iron: iron || 0,
        Magnesium: magnesium || 0,
        Potassium: potassium || 0,
        Thiamin: thiamin || 0,
        Zinc: zinc || 0,
        Timestamp: currentTimestamp,
        
        

    };

// Store data temporarily in a session
    sessionStorage.setItem('Athlete', JSON.stringify(rowData));

    // Axios POST request
    axios.post('api/SessionUpdate/delete', rowData)
        .then(response => {
            console.log("Data saved successfully:", response.data);
            alert("Food item saved to the dashboard!");
        })
        .catch(error => {
            console.error("Error saving data:", error);
            alert("Failed to save the food item.");
        });
}






















































// Function to update the total calories display
    function updateTotalCaloriesDisplay() {
        let caloriegoal = parseFloat(document.getElementById("calorieGoal").textContent);

        const remainingCalories =  caloriegoal - totalCalories;  // Ensure remaining doesn't go below 0
        document.getElementById("remainingCaloriesDisplay").textContent = remainingCalories;  // Update display
        updateProgressCircle(totalCalories, caloriegoal, "calories"); // Should result in a fully filled circle

       

 
    }

    
    
    
    
    
    
    
    
    
    
    
function updateTotalProteinDisplay() {
    let protiengoal = parseFloat(document.getElementById("protienGoal").textContent);

    const remainingProtien = protiengoal - totalProtein;  // Ensure remaining doesn't go below 0
    document.getElementById("remainingProteinDisplay").textContent = `${remainingProtien} g`;  // Update display
    updateProgressCircleProtein(totalProtein, proteinGoal , "protein"); // Should result in a fully filled circle

}


function updateTotalFatsDisplay() {
    let totalfatgoal = parseFloat(document.getElementById("totalfatGoal").textContent);

    const remainingFat = totalfatgoal - totalFats;  // Ensure remaining doesn't go below 0
    document.getElementById("remainingFatsDisplay").textContent = `${remainingFat} g`;  // Update display
    updateProgressCircleFats(totalFats, totalfatgoal , "totalfats"); // Should result in a fully filled circle
    
    
}




function updateTotalCarbsDisplay() {
    let carbsgoal = parseFloat(document.getElementById("carbsGoal").textContent);

    const remainingCarbs = carbsgoal - totalCarbs;  // Ensure remaining doesn't go below 0
    document.getElementById("remainingCarbsDisplay").textContent = `${remainingCarbs} g`;  // Update display
    updateProgressCircleCarbs(totalCarbs, carbsgoal , "carbs"); // Should result in a fully filled circle
    
}





function updateTotalFiberDisplay() {
    let fibergoal = parseFloat(document.getElementById("fiberGoal").textContent);

    const remainingFiber = fibergoal - totalFiber;  // Ensure remaining doesn't go below 0
    document.getElementById("remainingFiberDisplay").textContent = `${remainingFiber} g`;  // Update display
    updateProgressCircleFiber(totalFiber, fibergoal , "fiber"); // Should result in a fully filled circle


}


function updateTotalSugarDisplay() {
    let sugargoal = parseFloat(document.getElementById("sugarGoal").textContent);

    const remainingSugar = sugargoal - totalSugar;  // Ensure remaining doesn't go below 0
    document.getElementById("remainingSugarDisplay").textContent = `${remainingSugar} g`;  // Update display
    updateProgressCircleSugar(totalSugar, sugargoal , "sugar"); // Should result in a fully filled circle
    

}





function updateTotalSodiumDisplay() {
    let sodiumgoal = parseFloat(document.getElementById("sodiumGoal").textContent);

    const remainingSodium = sodiumgoal - totalsodium;  // Ensure remaining doesn't go below 0
    document.getElementById("remainingSodiumDisplay").textContent = `${remainingSodium} mg`;  // Update display
    updateProgressCircleSodium(totalsodium, sodiumgoal , "sodium"); // Should result in a fully filled circle

}

function updateTotalCholesterolDisplay() {

    // Update the display
    document.getElementById("totalCholesterolDisplay").textContent = `${totalCholesterol} mg`;

    // Call the function to handle the glow effect
    updateCholesterolValue(totalCholesterol, "cholesterol");
}



















function updateTotalNiacinDisplay(){
    
    
    const remaningniacin = niacingoal - totalniacin
    document.getElementById("remainingNiacinDisplay").textContent = `${remaningniacin} mg`;
    
    updateProgressCircleNiacin(totalniacin, niacingoal , "Niacin"); // Should result in a fully filled circle





}



function updateTotalVitaminDDisplay(){
    

    const remaningVitaminD = vitaminDgoal - totalvitaminD
    document.getElementById("remainingVitaminDDisplay").textContent = `${remaningVitaminD} mcg`;
    updateProgressCircleVitaminD(totalvitaminD, vitaminDgoal , "VitaminD"); // Should result in a fully filled circle







}


function updateTotalVitaminCDisplay(){

    const remaningVitaminC = vitaminCgoal - totalvitaminC
    document.getElementById("remainingVitaminCDisplay").textContent = `${remaningVitaminC} mcg`;
    updateProgressCircleVitaminC(totalvitaminC, vitaminCgoal, "VitaminC"); // Should result in a fully filled circle






}

function updateTotalFolateDisplay(){


    const remaningFolate = folategoal - totalfolate
    document.getElementById("remainingFolateDisplay").textContent = `${remaningFolate} mcg`;
    updateProgressCircleFolate(totalfolate, folategoal , "Folate"); // Should result in a fully filled circle




}

function updateTotalRiboflavinDisplay(){


    const remaningRiboflavin = riboflavingoal - totalriboflavin
    document.getElementById("remainingRiboflavinDisplay").textContent = `${remaningRiboflavin} mg`;
    updateProgressCircleRiboflavin(totalriboflavin, riboflavingoal , "Riboflavin"); // Should result in a fully filled circle





}

function updateTotalCalciumDisplay(){


    const remaningcalcium = calciumgoal - totalcalcium
    document.getElementById("remainingCalciumDisplay").textContent = `${remaningcalcium} mg`;
    updateProgressCircleCalcium(totalcalcium, calciumgoal , "Calcium"); // Should result in a fully filled circle






}

function updateTotalIronDisplay(){

    const remaningiron = irongoal - totaliron
    document.getElementById("remainingIronDisplay").textContent = `${remaningiron} mg`;
    updateProgressCircleIron(totaliron, irongoal , "Iron"); // Should result in a fully filled circle





}

function updateTotalMagnesiumDisplay(){

    const remaningmagnesium =  magnesiumgoal - totalmagnesium
    document.getElementById("remainingMagnesiumDisplay").textContent = `${remaningmagnesium} mg`;
    updateProgressCircleMagnesium(totalmagnesium, magnesiumgoal , "Magnesium"); // Should result in a fully filled circle





}

function updateTotalPotassiumDisplay(){


    const remaningpotassium =  potassiumgoal - totalpotassium
    document.getElementById("remainingPotassiumDisplay").textContent = `${remaningpotassium} mg`;
    updateProgressCirclePotassium(totalpotassium, potassiumgoal , "Potassium"); // Should result in a fully filled circle





}



function updateTotalZincDisplay(){


    const remaningzinc =  zincgoal - totalzinc
    document.getElementById("remainingZincDisplay").textContent = `${remaningzinc} mg`;
    updateProgressCircleZinc(totalzinc, zincgoal , "Zinc"); // Should result in a fully filled circle






}

function updateTotalThiaminDisplay(){


    const remaningthiamin =  thiamingoal - totalthiamin
    document.getElementById("remainingThiaminDisplay").textContent = `${remaningthiamin} mg`;
    updateProgressCircleThiamin(totalthiamin, thiamingoal , "Thiamin"); // Should result in a fully filled circle






}























































// Generate predefined hours with 1-hour increments from 12 AM to 11:59 PM
const predefinedHours = [];
for (let i = 0; i < 24; i++) {
    const period = i < 12 ? "AM" : "PM"; // Determine AM/PM
    const displayHour = i === 0 ? 12 : (i > 12 ? i - 12 : i); // Handle 12-hour format
    const displayMinute = "00"; // Fixed minute value for simplicity
    predefinedHours.push(`${displayHour}:${displayMinute} ${period}`);
}

// Optionally, ensure the last item is "11:59 PM"
predefinedHours[predefinedHours.length - 1] = "11:59 PM"; // Adjust the last item to "11:59 PM"

// Initialize Chart.js graph with predefined hours
const ctx = document.getElementById('caloriesTimeGraph').getContext('2d');

const caloriesTimeGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: predefinedHours, // Use predefined hours as labels
        datasets: [{
            label: 'Calories (g)',
            data: new Array(24).fill(0), // Initialize data array with 24 elements for all hours
            borderColor: 'rgb(207,88,88)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
            hidden: true // Initially hidden
        },
            {
                label: 'Protein (g)',
                data: new Array(24).fill(0),
                borderColor: 'rgb(128,0,128)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                hidden: true // Initially hidden
            },
            {
                label: 'Carbs (g)',
                data: new Array(24).fill(0),
                borderColor: 'rgb(70,130,180)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                hidden: true // Initially hidden
            },
            {
                label: 'Fats (g)',
                data: new Array(24).fill(0),
                borderColor: 'rgb(50,205,50)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                hidden: true // Initially hidden
            },
            {
                label: 'Fiber (g)',
                data: new Array(24).fill(0),
                borderColor: 'rgb(255,165,0)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                hidden: true // Initially hidden
            },
            {
                label: 'Sugar (g)',
                data: new Array(24).fill(0),
                borderColor: 'rgb(255,69,0)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                hidden: true // Initially hidden
            },
            {
                label: 'Sodium (g)',
                data: new Array(24).fill(0),
                borderColor: 'rgb(255,0,0)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                hidden: true // Initially hidden
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time'
                },
                ticks: {
                    autoSkip: false, // Show all labels
                },
                grid: {
                    display: false // Removes gridlines for the x-axis
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Grams (g)'
                },
                beginAtZero: true,
                grid: {
                    display: false // Removes gridlines for the y-axis
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 12,  // Set the width of the circle
                    boxHeight: 12, // Set the height of the circle
                    usePointStyle: true,  // Use point style (circle)
                }
            }
        }
    }
});

// Function to update the graph based on the food log table
const updateGraphFromTable = () => {
    const table = document.getElementById("foodLogTableBody");
    const rows = table.getElementsByTagName("tr");

    // Reset data for each 1-hour increment
    const calorieData = new Array(24).fill(0);
    const proteinData = new Array(24).fill(0);
    const carbsData = new Array(24).fill(0);
    const fatsData = new Array(24).fill(0);
    const fiberData = new Array(24).fill(0);
    const sugarData = new Array(24).fill(0);
    const sodiumData = new Array(24).fill(0);

    // Loop through the rows and populate calorie and protein values
    for (let i = 0; i < rows.length; i++) { // Loop through all rows
        const cells = rows[i].getElementsByTagName("td");
        const time = cells[0].textContent.trim(); // Assume time is in the first column
        const calories = parseFloat(cells[2].textContent) || 0; // Assume calories are in the third column
        const protein = parseFloat(cells[3].textContent) || 0; // Assume protein is in the fourth column
        const carbs = parseFloat(cells[5].textContent) || 0; // Assume carbs are in the fifth column
        const fats = parseFloat(cells[4].textContent) || 0; // Assume fats are in the sixth column
        const fiber = parseFloat(cells[6].textContent) || 0; // Assume fiber is in the seventh column
        const sugar = parseFloat(cells[7].textContent) || 0; // Assume sugar is in the eighth column
        const sodium = parseFloat(cells[8].textContent) || 0; // Assume sodium is in the ninth column

        // Parse the hour from the time string (e.g., "1:00 PM")
        const [hour, period] = time.split(" ");
        const hourInt = parseInt(hour.split(":")[0], 10);
        const hour24 = period === "PM" && hourInt !== 12 ? hourInt + 12 : (period === "AM" && hourInt === 12 ? 0 : hourInt);

        // Use the hour24 directly as the index for 1-hour increments
        const index = hour24; // Now directly maps to the 1-hour increment

        // Add data to the corresponding index
        calorieData[index] += calories;
        proteinData[index] += protein;
        carbsData[index] += carbs;
        fatsData[index] += fats;
        fiberData[index] += fiber;
        sugarData[index] += sugar;
        sodiumData[index] += sodium / 1000;
    }

    // Update the graph data
    caloriesTimeGraph.data.datasets[0].data = calorieData;
    caloriesTimeGraph.data.datasets[1].data = proteinData;
    caloriesTimeGraph.data.datasets[2].data = carbsData;
    caloriesTimeGraph.data.datasets[3].data = fatsData;
    caloriesTimeGraph.data.datasets[4].data = fiberData;
    caloriesTimeGraph.data.datasets[5].data = sugarData;
    caloriesTimeGraph.data.datasets[6].data = sodiumData;

    // Toggle hidden property based on data values
    caloriesTimeGraph.data.datasets.forEach((dataset) => {
        dataset.hidden = dataset.data.every((value) => value === 0); // Hide if all values are 0
    });

    // Refresh the graph
    caloriesTimeGraph.update();
};

// Observe the table for changes
const observeTableForChanges = () => {
    const table = document.getElementById("foodLogTableBody");

    const observer = new MutationObserver(() => {
        // Update the graph when the table changes
        updateGraphFromTable();
    });

    observer.observe(table, { childList: true, subtree: true });
};

// Start observing the table
observeTableForChanges();











// Function to save the row data to the backend
function savetoFoodDatabase(foodItem) {

    console.log("Food Item before sending:", foodItem);


    // Data object to be sent to the backend
    const saveFood = {

        Name: foodItem.name,
        Brand: foodItem.brand,
        ServingUnit: foodItem.servingunit,
        ServingSize: foodItem.servingsize,
        ServingPerContainer: foodItem.servingpercontainer
       



    };

    // Log the formatted object before sending
    console.log("Sending data to backend:", saveFood);


    // Axios POST request
    axios.post('api/FoodDatabase/savefood', saveFood,
    {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log("Data saved successfully:", response.data);
            alert("Food item saved to the database!");
        })
        .catch(error => {
            console.error("Error saving data:", error);
            alert("Failed to add to FoodDatabase.");
        });
}






























