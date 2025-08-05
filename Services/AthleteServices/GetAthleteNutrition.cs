using Duende.IdentityServer.Stores;
using Entites;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ServiceContracts.DTO;
using ServiceContracts.Enums;
using ServiceContracts.IAthlete;

namespace Services;

public class GetAthleteNutrition : IAthleteGetNutrition
{

    private readonly FitLensDatabase _database;



    private readonly HttpContextAccessor _accessor;
    private readonly UserManager<AthleteUser> _userManager;
    private readonly GetAthlete _getathlete;
    private readonly AthleteAndNutritionResponse _athleteAndNutritionResponse;


    public GetAthleteNutrition(FitLensDatabase database, HttpContextAccessor accessor,
        UserManager<AthleteUser> userManager
        , GetAthlete getathlete, AthleteAndNutritionResponse response)
    {
        _database = database;
        _accessor = accessor;
        _userManager = userManager;
        _getathlete = getathlete;
        _athleteAndNutritionResponse = response;

    }





    public async Task GetAthletesBMRandMacros(string username)
    {

        var user = await _getathlete.GetCurrentUser(username);
        // Nutrtion Athlete
        var athlete = await _database.AthleteNutritionInfos.FirstOrDefaultAsync(x => x.Username == user);
        // Athlete
        var athlete2 = await _database.Athletes.FirstOrDefaultAsync(x => x.Username == user);

        double? calories = 0;
        double? fibers = 0;
        double? protein = 0;
        double? sugar = 0;
        double? sodium = 0;
        double? carbs = 0;
        double? fats = 0;
       

        
        
        
        
        
        
        
        
        double? weightInKg = athlete2.Weight * 0.453592; // Convert weight from pounds to kg
        double? heightInCm = ((athlete2.HeightFeet) * 12 + (athlete2.HeightInches)) * 2.54;

        // BMR Constants for Male and Female
        double bmrBase = athlete2.Gender == GenderEnum.Male.ToString() ? 88.362 : 447.593;
        double weightFactor = athlete2.Gender == GenderEnum.Male.ToString()  ? 13.397 : 9.247;
        double heightFactor = athlete2.Gender == GenderEnum.Male.ToString()  ? 4.799 : 3.098;
        double ageFactor = athlete2.Gender == GenderEnum.Male.ToString()  ? 5.677 : 4.330;

        // Calculate BMR based on gender
        calories = bmrBase + (weightFactor * weightInKg) + (heightFactor * heightInCm) -
                   (ageFactor * athlete2.Age);



        ActivityLevels parsedlevels;
        double activityMultiplier = 1.2; // Default multiplier

        if (Enum.TryParse(athlete2.ActivityLevel, out parsedlevels))
        {
            // Apply activity level multipliers
            activityMultiplier = parsedlevels switch
            {
                ActivityLevels.Sedentary => 1.2,
                ActivityLevels.LightlyActive => 1.375,
                ActivityLevels.ModeratelyActive => 1.55,
                ActivityLevels.VeryActive => 1.725,
                _ => 1.2 // Default multiplier
            };
        }

// Apply the activity multiplier to the calories
        calories *= activityMultiplier;






        GoalEnums goalsParsed;
        double goaladjusment = 0;

        if (Enum.TryParse(athlete2.FitnessGoals, out goalsParsed))
        {
            // Apply goal adjustments
            goaladjusment = goalsParsed switch
            {
                GoalEnums.WeightLoss => -500,
                GoalEnums.WeightGain => 500,
                GoalEnums.Maintenance => 0
            };

        }

        calories += goaladjusment;




        // Calculate macros
        protein = (2.2 * (athlete2.Weight.Value * 0.453592)); // 2.2g of protein per kg of body weight
        carbs = (calories * 0.60) / 4; // 60% carbs in grams
        fats = (calories * 0.25) / 9; // 25% fat in grams
        sodium = 2000;


        
        
        
        
        
        
        
        
        
        
        
        

        // Fiber calculation based on gender and age
        if (athlete2.Gender == GenderEnum.Male.ToString())
        {
            fibers = athlete2.Age >= 50 ? 30 : 38;
        }
        else if (athlete2.Gender == GenderEnum.Female.ToString())
        {
            fibers = athlete2.Age >= 50 ? 21 : 25;
        }

        // Sugar calculation for both genders (10% of daily calories)
        sugar = (calories * 0.10) / 4;
        
          
        
        
        
        
        
        
        
        
        
        
        
        


        // Round the result
        calories = Math.Round(calories.Value);
        protein = Math.Round(protein.Value);
        fibers = Math.Round(fibers.Value);
        carbs = Math.Round(carbs.Value);
        sodium = Math.Round(sodium.Value);
        sugar = Math.Round(sugar.Value);
        fats = Math.Round(fats.Value);
        
        // Return the response
        athlete.Calories = (int)calories; // Ensure it’s an integer for consistency
        athlete.Protein = protein;
        athlete.Fiber = fibers;
        athlete.Sugar = sugar;
        athlete.Sodium = sodium;
        athlete.Fat = fats;
        athlete.Carbs = carbs;
        
        
        
        // AthleteNutritionInfo
        athlete.Timestamp = DateTime.Now;
        
        
        _database.AthleteNutritionInfos.Update(athlete);
        await _database.SaveChangesAsync();
        
    }



    
    public async Task<AthleteAndNutritionResponse> GetDashboardData(string username)
    {
        
        
        username = _accessor.HttpContext.User.Identity.Name;
       
     var athlete = await _database.AthleteNutritionInfos.FirstOrDefaultAsync(a => a.Username == username);
     var athlete2 = await _database.Athletes.FirstOrDefaultAsync(a => a.Username == username);
     var athlete3 = await _database.AthleteSessions.FirstOrDefaultAsync(a => a.Username == username);

     
     var response = AthleteAndNutritionResponse.ToResponse(athlete, athlete2, athlete3);
     return response;
        
    }
      


    

    
    
    
    
    
   
    
    
    
    
    
    
    
    
    
    
}