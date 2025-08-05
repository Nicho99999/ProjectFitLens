using System.Runtime.InteropServices.JavaScript;
using Entites;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ServiceContracts.DTO;
using Services;
using AthleteDashboardSessionExport;
using Microsoft.EntityFrameworkCore;

namespace ProjectFitLens.Areas.User.Controllers;



[ApiController]
[Route("api/[controller]")]
public class SessionUpdateController : ControllerBase
{
    
    private readonly GetAthlete _getAthlete;
    private readonly AthleteAndNutritionResponse _athleteAndNutritionResponse;
    private readonly HttpContextAccessor _httpContextAccessor;
    private readonly UserManager<AthleteUser> _user;
    private readonly FitLensDatabase _fitLensDatabase;
    private readonly AthleteNutritionInfo _athleteNutritionInfo;


    public SessionUpdateController(FitLensDatabase fitLensDatabase, HttpContextAccessor httpContextAccessor, AthleteNutritionInfo athleteNutritionInfo)
    {
        _fitLensDatabase = fitLensDatabase;
        _httpContextAccessor = httpContextAccessor;
        _athleteNutritionInfo = athleteNutritionInfo;
    }
    
    
    [HttpPost("update")]
    public async Task<IActionResult> UpdatedSession([FromBody] AthleteDasboardSessionExport foodItem )
    {
        if (foodItem != null)
        {
            // convert food item to athlete 
            var user = foodItem.toAthlete();
            
            
            // Get the user 
            
            var username = HttpContext.User.Identity.Name;
            
            var userathlete = _fitLensDatabase.Athletes.FirstOrDefault(x => x.Username == username);
            
            var nutritionathlete = _fitLensDatabase.AthleteNutritionInfos.FirstOrDefault(x => x.Username == username);

            
            // Match the session user with database user 
            var existingentry = _fitLensDatabase.AthleteSessions.FirstOrDefault(x => x.Username == username && x.Timestamp == user.Timestamp);
            
            
                // if database Timestamp is old, save a new record 
                if (existingentry == null)
                {
                    
                    // Creates a new athlete 
                    var newusersession = new AthleteSessions()
                    {
                        Username = username,
                        Calories = user.Calories,
                        Protein = user.Protein,
                        Carbs = user.Carbs,
                        Fiber = user.Fiber,
                        Fat = user.Fat,
                        Sugar = user.Sugar,
                        Sodium = user.Sodium,
                        Folate = user.Folate,
                        Calcium = user.Calcium,
                        Thiamin = user.Thiamin,
                        VitaminC = user.VitaminC,
                        VitaminD = user.VitaminD,
                        Niacin = user.Niacin,
                        Riboflavin = user.Riboflavin,
                        Magnesium = user.Magnesium,
                        Potassium = user.Potassium,
                        Zinc = user.Zinc,
                        SessionId = Guid.NewGuid(),
                        Timestamp = user.Timestamp,
                        NutritionId = nutritionathlete.NutritionId,
                        AthleteId = userathlete.AthleteId,

                    };
                    
                    _fitLensDatabase.AthleteSessions.Add(newusersession);
                    _fitLensDatabase.SaveChanges();

                }
                
                else
            {
                if (existingentry != null)

                {
                    // Timestamp is today, update values
                    existingentry.Calories += user.Calories;
                    existingentry.Protein += user.Protein;
                    existingentry.Carbs += user.Carbs;
                    existingentry.Fiber += user.Fiber;
                    existingentry.Fat += user.Fat;
                    existingentry.Sodium += user.Sodium;
                    existingentry.Sugar += user.Sugar;
                    existingentry.Folate = user.Folate;
                    existingentry.Calcium = user.Calcium;
                    existingentry.Thiamin = user.Thiamin;
                    existingentry.VitaminC = user.VitaminC;
                    existingentry.VitaminD = user.VitaminD;
                    existingentry.Niacin = user.Niacin;
                    existingentry.Riboflavin = user.Riboflavin;
                    existingentry.Magnesium = user.Magnesium;
                    existingentry.Potassium = user.Potassium;
                    existingentry.Zinc = user.Zinc;
}

                    _fitLensDatabase.AthleteSessions.Update(existingentry);
                    _fitLensDatabase.SaveChanges();

                


            }
            
            
            
            

        }
        
        return Ok();
    }

    
    
    
    
    
    
    
    
    
    
    [HttpPost("delete")]
    public async Task<IActionResult> DeleteSession([FromBody] AthleteDasboardSessionExport calories )
    {
        if (calories != null)
        {
            // convert food item to athlete 
            var user = calories.toAthlete();
            
            // Get the user 
            var username = HttpContext.User.Identity.Name;
            
            // Match the session user with database user 
            var existingentry = _fitLensDatabase.AthleteSessions.Include(x => x.Athlete).FirstOrDefault(x => x.Username == username && x.Timestamp == user.Timestamp);
            
            
                if (existingentry != null)

                {
                    // Timestamp is today, update values
                    existingentry.Calories -= user.Calories;
                    existingentry.Protein -= user.Protein;
                    existingentry.Carbs -= user.Carbs;
                    existingentry.Fiber -= user.Fiber;
                    existingentry.Fat -= user.Fat;
                    existingentry.Sodium -= user.Sodium;
                    existingentry.Sugar -= user.Sugar;
                    existingentry.Folate = user.Folate;
                    existingentry.Calcium = user.Calcium;
                    existingentry.Thiamin = user.Thiamin;
                    existingentry.VitaminC = user.VitaminC;
                    existingentry.VitaminD = user.VitaminD;
                    existingentry.Niacin = user.Niacin;
                    existingentry.Riboflavin = user.Riboflavin;
                    existingentry.Magnesium = user.Magnesium;
                    existingentry.Potassium = user.Potassium;
                    existingentry.Zinc = user.Zinc;




                    _fitLensDatabase.AthleteSessions.Update(existingentry);
                    _fitLensDatabase.SaveChanges();

                }


            }
            
            
            
            

        
        
        return Ok();
    }
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}