using Entites;
using Microsoft.AspNetCore.Mvc;
using ServiceContracts.DTO;
using Services;

namespace ProjectFitLens.Controllers;

public class AthleteRegisterController : Controller
{
    private readonly AddAthlete _addAthlete;
    private readonly GetAthleteNutrition _getAthleteNutrition;

    public AthleteRegisterController(AddAthlete addAthlete, GetAthleteNutrition getAthleteNutrition)
    {
        _addAthlete = addAthlete;
        _getAthleteNutrition = getAthleteNutrition;
    }
    
    
    
    
    
    
    
    
    [HttpGet]
    [Route("{controller}/{action}")]
    public IActionResult AthleteSurvey()
    {
        
        
        
        
        return View();
    }
    
    
    [HttpPost]
    [Route("{controller}/{action}")]
    public async Task<IActionResult> AthleteSurvey(AthleteAdd athlete, NutritionalAdd addNutritional, AthleteSessionsReponse sessionsReponse)
    {
        // Validations (Optional if using @foreach Viewbag.Error)
        if (!ModelState.IsValid)
        {
            ViewBag.Errors = ModelState.Values.SelectMany(v => v.Errors);
           
            return View(athlete);
        }
        
        
        
        await _addAthlete.AddPerson(athlete, addNutritional );
       
        await _getAthleteNutrition.GetAthletesBMRandMacros(addNutritional.Username);
        
        
            
        
        
        return RedirectToAction("Login", "RegisterLogin");
        
    }

    
    
    
    
    
}