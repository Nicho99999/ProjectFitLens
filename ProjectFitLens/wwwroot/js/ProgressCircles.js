
// Calories 

function updateProgressCircle(consumed, goalCalories, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 52; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / goalCalories, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing


    // Check if the goal is hit or exceeded
    if (consumed >= caloriegoal) {
        progressCircle.classList.add("calorieglow"); // Add glow effect
    } else {
        progressCircle.classList.remove("calorieglow"); // Remove glow effect
    }

    
    
}

let caloriegoal = parseFloat(document.getElementById("calorieGoal").textContent);

// Example Usage
updateProgressCircle(0, caloriegoal, "calories"); // Should result in a fully filled circle




// Protien 


function updateProgressCircleProtein(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 52; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / proteinGoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing



    // Check if the goal is hit or exceeded
    if (consumed >= proteinGoal) {
        progressCircle.classList.add("proteinglow"); // Add glow effect
    } else {
        progressCircle.classList.remove("proteinglow"); // Remove glow effect
    }

    
}

let proteinGoal = parseFloat(document.getElementById("protienGoal").textContent);

// Example Usage
updateProgressCircleProtein(0, proteinGoal , "protein"); // Should result in a fully filled circle








// Carbs


function updateProgressCircleCarbs(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 52; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / carbsgoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing



    // Check if the goal is hit or exceeded
    if (consumed >= carbsgoal) {
        progressCircle.classList.add("carbsglow"); // Add glow effect
    } else {
        progressCircle.classList.remove("carbsglow"); // Remove glow effect
    }
    
}

let carbsgoal = parseFloat(document.getElementById("carbsGoal").textContent);

// Example Usage
updateProgressCircleCarbs(0, carbsgoal , "carbs"); // Should result in a fully filled circle






// TotalFats

function updateProgressCircleFats(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 52; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / totalfatsgoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing



    // Check if the goal is hit or exceeded
    if (consumed >= totalfatsgoal) {
        progressCircle.classList.add("totalfatsglow"); // Add glow effect
    } else {
        progressCircle.classList.remove("totalfatsglow"); // Remove glow effect
    }


}

let totalfatsgoal = parseFloat(document.getElementById("totalfatGoal").textContent);

// Example Usage
updateProgressCircleFats(0, totalfatsgoal , "totalfats"); // Should result in a fully filled circle










// Fiber

function updateProgressCircleFiber(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 52; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / fibergoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing



    // Check if the goal is hit or exceeded
    if (consumed >= fibergoal) {
        progressCircle.classList.add("fiberglow"); // Add glow effect
    } else {
        progressCircle.classList.remove("fiberglow"); // Remove glow effect
    }


}

let fibergoal = parseFloat(document.getElementById("fiberGoal").textContent);

// Example Usage
updateProgressCircleFiber(0, fibergoal , "fiber"); // Should result in a fully filled circle







// Sugar

function updateProgressCircleSugar(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 52; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / sugargoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing




    // Check if the goal is hit or exceeded
    if (consumed >= sugargoal) {
        progressCircle.classList.add("sugarglow"); // Add glow effect
    } else {
        progressCircle.classList.remove("sugarglow"); // Remove glow effect
    }


}

let sugargoal = parseFloat(document.getElementById("sugarGoal").textContent);

// Example Usage
updateProgressCircleSugar(0, sugargoal , "sugar"); // Should result in a fully filled circle





// Sodium

function updateProgressCircleSodium(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 52; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / sodiumgoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= sodiumgoal) {
        progressCircle.classList.add("sodiumglow"); // Add glow effect
    } else {
        progressCircle.classList.remove("sodiumglow"); // Remove glow effect
    }

}

let sodiumgoal = parseFloat(document.getElementById("sodiumGoal").textContent);

// Example Usage
updateProgressCircleSodium(0, sodiumgoal , "sodium"); // Should result in a fully filled circle
























// Folate

function updateProgressCircleFolate(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / folategoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing




    // Check if the goal is hit or exceeded
    if (consumed >= 500) {
        progressCircle.classList.add("folateglow"); // Add glow effect
    } 
    else 
    {
        progressCircle.classList.remove("folateglow"); // Remove glow effect
    }

}

const folategoal = 500

// Example Usage
updateProgressCircleFolate(0, folategoal , "Folate"); // Should result in a fully filled circle








// VitaminC

function updateProgressCircleVitaminC(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / vitaminCgoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= 2000)
    {
        progressCircle.classList.add("vitaminCglow"); // Add glow effect
    }
    else
    {
        progressCircle.classList.remove("vitaminCglow"); // Remove glow effect
    }

}

let vitaminCgoal = 900

// Example Usage
updateProgressCircleVitaminC(0, vitaminCgoal , "VitaminC"); // Should result in a fully filled circle











// VitaminD

function updateProgressCircleVitaminD(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / vitaminDgoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= 2000) {
        progressCircle.classList.add("vitaminDglow"); // Add glow effect
    }
    else
    {
        progressCircle.classList.remove("vitaminDglow"); // Remove glow effect
    }

}

let vitaminDgoal = 900

// Example Usage
updateProgressCircleVitaminD(0, vitaminDgoal , "VitaminD"); // Should result in a fully filled circle










// Niacin

function updateProgressCircleNiacin(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / niacingoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= 16) {
        progressCircle.classList.add("niacinglow"); // Add glow effect
    }
    else
    {
        progressCircle.classList.remove("niacinglow"); // Remove glow effect
    }

}

let niacingoal = 16

// Example Usage
updateProgressCircleNiacin(0, niacingoal , "Niacin"); // Should result in a fully filled circle








// RiboFlavin

function updateProgressCircleRiboflavin(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / riboflavingoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= 1.5) {
        progressCircle.classList.add("riboflavinglow"); // Add glow effect
    }
    else
    {
        progressCircle.classList.remove("riboflavinglow"); // Remove glow effect
    }

}

let riboflavingoal = 1.5

// Example Usage
updateProgressCircleRiboflavin(0, riboflavingoal , "Riboflavin"); // Should result in a fully filled circle









// Calcium

function updateProgressCircleCalcium(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / calciumgoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= 2500) {
        progressCircle.classList.add("calciumglow"); // Add glow effect
    }
    else
    {
        progressCircle.classList.remove("calciumglow"); // Remove glow effect
    }

}

let calciumgoal = 1300

// Example Usage
updateProgressCircleCalcium(0, calciumgoal , "Calcium"); // Should result in a fully filled circle









// Iron

function updateProgressCircleIron(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / irongoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= 40) {
        progressCircle.classList.add("ironglow"); // Add glow effect
    }
    else
    {
        progressCircle.classList.remove("ironglow"); // Remove glow effect
    }

}

let irongoal = 10

// Example Usage
updateProgressCircleIron(0, irongoal , "Iron"); // Should result in a fully filled circle








// Magnesium

function updateProgressCircleMagnesium(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / magnesiumgoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= 500) {
        progressCircle.classList.add("magnesiumglow"); // Add glow effect
    }
    else
    {
        progressCircle.classList.remove("magnesiumglow"); // Remove glow effect
    }

}

let magnesiumgoal = 400

// Example Usage
updateProgressCircleMagnesium(0, magnesiumgoal , "Magnesium"); // Should result in a fully filled circle












// Potassium

function updateProgressCirclePotassium(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / potassiumgoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= 6000) {
        progressCircle.classList.add("potassiumglow"); // Add glow effect
    }
    else
    {
        progressCircle.classList.remove("potassiumglow"); // Remove glow effect
    }

}

let potassiumgoal = 3000

// Example Usage
updateProgressCirclePotassium(0, potassiumgoal , "Potassium"); // Should result in a fully filled circle











// Zinc

function updateProgressCircleZinc(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / zincgoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= 40) {
        progressCircle.classList.add("zincglow"); // Add glow effect
    }
    else
    {
        progressCircle.classList.remove("zincglow"); // Remove glow effect
    }

}

let zincgoal = 10

// Example Usage
updateProgressCircleZinc(0, zincgoal , "Zinc"); // Should result in a fully filled circle









// Thiamin

function updateProgressCircleThiamin(consumed, goal, circleType) {
    const progressCircle = document.querySelector(`svg[data-circle="${circleType}"] .progress`);
    const radius = 50; // Matches the 'r' attribute of the circle
    const circumference = 2 * Math.PI * radius;

    // Ensure progress is capped at 100%
    const progress = Math.min(consumed / thiamingoal, 1); // Progress as a fraction (0 to 1)

    // Calculate the stroke-dashoffset for forward progress
    const offset = circumference * (1 - progress);

    // Apply the calculated styles
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
    progressCircle.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Add animation timing





    // Check if the goal is hit or exceeded
    if (consumed >= 1.5) {
        progressCircle.classList.add("thiaminglow"); // Add glow effect
    }
    else
    {
        progressCircle.classList.remove("thiaminglow"); // Remove glow effect
    }

}

let thiamingoal = 1.5

// Example Usage
updateProgressCircleThiamin(0, thiamingoal , "Thiamin"); // Should result in a fully filled circle









function updateCholesterolValue(consumed, icontype) {
    // Select the cholesterol icon
    const cholesterolIcon = document.querySelector(`span#${icontype}-icon`);

    // Ensure the element exists
    if (cholesterolIcon) {
        // Remove any existing glow classes
        cholesterolIcon.classList.remove("cholesterol-glow-green", "cholesterol-glow-yellow", "cholesterol-glow-red");
        const cholesterolGoal = parseFloat(document.getElementById("cholesterolGoal").textContent);

        // Add the appropriate glow class based on the cholesterol level
        if (consumed <= 200) {
            cholesterolIcon.classList.add("cholesterol-glow-green"); // Low level (green)
        } else if (consumed > 210 && consumed <= 230) {
            cholesterolIcon.classList.add("cholesterol-glow-yellow"); // Moderate level (yellow)
        } else {
            cholesterolIcon.classList.add("cholesterol-glow-red"); // High level (red)
        }
    } else {
        console.error(`Icon with ID ${icontype}-icon not found.`);
    }
    
    
}





