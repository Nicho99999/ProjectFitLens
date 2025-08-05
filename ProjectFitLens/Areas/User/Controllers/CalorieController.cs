using Entites;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using ServiceContracts.DTO;
using Services;

namespace ProjectFitLens.Areas.User.Controllers;



[Area("User")]
public class CalorieController : Controller
{
   private readonly NutritionalAdd _nutritionalAdd;
    private readonly GetAthleteNutrition _getAthleteNutrition;
    private readonly HttpContextAccessor _httpContextAccessor;
    private readonly UserManager<AthleteUser> _userManager;
    private readonly FitLensDatabase _database;
    private readonly GetAthlete _getAthlete;
    private readonly NutritionalResponse _athleteResponse;
    private readonly AthleteAndNutritionResponse _athleteAndNutritionResponse;
    
    
    public CalorieController(NutritionalAdd nutritionalAdd, GetAthleteNutrition getAthleteNutrition, HttpContextAccessor httpContextAccessor
    , UserManager<AthleteUser> userManager, FitLensDatabase database, GetAthlete getAthlete, NutritionalResponse athleteResponse, AthleteAndNutritionResponse response)
    {
       _nutritionalAdd = nutritionalAdd;
       _getAthleteNutrition = getAthleteNutrition;
       _httpContextAccessor = httpContextAccessor;
       _userManager = userManager;
       _database = database;
       _getAthlete = getAthlete;
       _athleteResponse = athleteResponse;
       _athleteAndNutritionResponse = response;
    }
    
    
    
    
    // GET
    // Populate the Dashboard (Macros, BMR, Exercise Activity)
    [HttpGet]
    [Route("/")] // (username) is a placeholder 
    public async Task<IActionResult> CalorieDashboard(string username)
    {
        
       var athlete = await _getAthleteNutrition.GetDashboardData(username);

        
        
       return View(athlete);

    }


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Remote Validation
    /*[HttpGet]
    [Route("{controller}/{action}")]
    public async Task<IActionResult> IsUsernameAlreadyRegistered(string username)
    {
        AthleteUser username1 = await _userManager.FindByNameAsync(username);
        if (username1 == null)
        {
            return Json(true); // Username is avaialable
        }
        else
        {
            return Json(false);
        }
        
    }*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}