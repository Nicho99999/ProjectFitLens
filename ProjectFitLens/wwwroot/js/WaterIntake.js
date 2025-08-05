
// Define the max water level for the cup

const maxWaterLevel = 200;

// Get references to elements
const waterLevelDisplay = document.getElementById("water-level");
const cup = document.querySelector(".cup");
const decButton = document.getElementById("decButton");
const addButton = document.getElementById("addButton");
const toast = document.getElementById("toast");




let waterLevel = JSON.parse(localStorage.getItem('waterLevel'))

// Load cup styles from localStorage or set default styles
let savedCupStyles = JSON.parse(localStorage.getItem("cupStyles")) || {
    boxShadow: "0 0 0 3px #fff, 0 20px 35px rgba(0,0,0,1)",
};

// Apply saved styles to the cup
cup.style.boxShadow = savedCupStyles.boxShadow;


// Function to update water level
function updateWaterLevel() {
    // Update the display text
    waterLevelDisplay.textContent = waterLevel;

    let cupStyles = {};
    // Change the cup's border color and box-shadow when it reaches a certain water level
    if (waterLevel >= 15) {
        cup.style.boxShadow = "0 0 0 3px green, 0 20px 35px rgba(0,0,0,1)"; // Green box-shadow when full
        
        toast.classList.add("show");

        // Save the style
        cupStyles = {
            boxShadow: "0 0 0 3px green, 0 20px 35px rgba(0,0,0,1)"
        };

        // Hide the toast after 3 seconds
        setTimeout(function() {
            toast.classList.remove("show");
        }, 3000);
    } else {
        cup.style.boxShadow = "0 0 0 3px #fff, 0 20px 35px rgba(0,0,0,1)"; // Default box-shadow

        // Save the default style
        cupStyles = {
            boxShadow: "0 0 0 3px #fff, 0 20px 35px rgba(0,0,0,1)"
        };
    }

    

    
// Save the updated water level to localStorage
    localStorage.setItem('waterLevel', JSON.stringify(waterLevel));
    localStorage.setItem('cupStyles', JSON.stringify(cupStyles));


}

// Decrease water level
decButton.addEventListener("click", () => {
    if (waterLevel > 0) {
        waterLevel--;
        updateWaterLevel();

        localStorage.setItem('waterLevel', JSON.stringify(waterLevel));

    }

   


});

// Increase water level
addButton.addEventListener("click", () => {
    if (waterLevel < maxWaterLevel) {
        waterLevel++;
        updateWaterLevel();
        
        localStorage.setItem('waterLevel', JSON.stringify(waterLevel));

    }
    
    
});

