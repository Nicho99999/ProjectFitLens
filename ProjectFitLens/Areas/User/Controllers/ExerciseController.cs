using System.Diagnostics.CodeAnalysis;
using ExerciseService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Services;
using HtmlAgilityPack;
using Newtonsoft.Json;
using ServiceContracts.DTO;

namespace ProjectFitLens.Areas.User.Controllers;

[Area("User")]
[Authorize]
public class ExerciseController : Controller
{
    
    
    private readonly ChestExercises _chestExercises;
    private readonly LowerBackExercises _lowerbackExercises;
    private readonly TrapExercises _trapExercises;
    private readonly TricepExercises _tricepExercises;
    private readonly ForearmExercises _forearmExercises;
    private readonly GluteExercises _gluteExercises;
    private readonly HamstringExercises _hamstringExercises;
    private readonly CalvesExercises _calvesExercises;
    private readonly DeltoidExercises _deltoidExercises;
    private readonly BicepExercises _bicepExercises;
    private readonly AbsExercises _absExercises;
    private readonly QuadsExercises _quadsExercises;
    private readonly AdductorsExercises _adductorsExercises;
    private readonly GetAthleteNutrition _getAthleteNutrition;
    private readonly NutritionalResponse _nutritional;

    
    public ExerciseController(ChestExercises chestExercises, LowerBackExercises lowerbackExercises, TrapExercises trapExercises, TricepExercises tricepExercises
    , ForearmExercises forearmExercises, GluteExercises gluteExercises, HamstringExercises hamstringExercises, CalvesExercises calvesExercises
    , DeltoidExercises deltoidExercises, BicepExercises bicepExercises, AbsExercises absExercises, QuadsExercises quadsExercises, AdductorsExercises adductorsExercises,
     GetAthleteNutrition getAthleteNutrition, NutritionalResponse nutritional)
    {
        _chestExercises = chestExercises;
        _lowerbackExercises = lowerbackExercises;
        _trapExercises = trapExercises;
        _tricepExercises = tricepExercises;
        _forearmExercises = forearmExercises;
        _gluteExercises = gluteExercises;
        _hamstringExercises = hamstringExercises;
        _calvesExercises = calvesExercises;
        _deltoidExercises = deltoidExercises;
        _bicepExercises = bicepExercises;
        _absExercises = absExercises;
        _quadsExercises = quadsExercises;
        _adductorsExercises = adductorsExercises;
        _getAthleteNutrition = getAthleteNutrition;
        _nutritional = nutritional;
        
    }


    // GET
    [Route("{controller}/{action}")]
    public async Task<IActionResult> Home(string username)
    {
        
        
        return View();
    }
    
    
    
    [HttpGet]
    [Route("{controller}/{action}")]
    public IActionResult BodyPartSelector()
    {
        
        
        return View();
    }
    
    
    
    
    // List of Body Parts
    
    // GET
    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task<IActionResult> Chest()
    {

       
        await _chestExercises.FetchChestExercises();


        return View(_chestExercises);
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task<IActionResult> LowerBack()
    {


        await _lowerbackExercises.FetchLowerBackExercises();


        return View(_lowerbackExercises);
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task <IActionResult> Trapezius()
    {
        
        
        await _trapExercises.FetchTrapExercises();
        
        
        return View(_trapExercises);
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task <IActionResult> Triceps()
    {
        await _tricepExercises.FetchTricepExercises();
        
        return View(_tricepExercises);
    }

    
    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task< IActionResult> Forearms()
    {
        await _forearmExercises.FetchForearmExercises();
        
       return View(_forearmExercises);
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task< IActionResult> Glutes()
    {
        await _gluteExercises.FetchGluteExercises();
        
        return View(_gluteExercises);
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task<IActionResult> Hamstrings()
    {

        await _hamstringExercises.FetchHamstringExercises();
        
        return View(_hamstringExercises);
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task <IActionResult> Calves()
    {
        await _calvesExercises.FetchCalvesExercises();

        return View(_calvesExercises);
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task<IActionResult> Deltoids()
    {
        
        await _deltoidExercises.FetchDeltoidExercises();
        
        return View(_deltoidExercises);
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task<IActionResult> Biceps()
    {
        await _bicepExercises.FetchBicepExercises();
        
        return View(_bicepExercises);
    }

    public async Task<IActionResult> Obliques()
    {
        
        
        return View();
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task<IActionResult> Abs()
    {
        await _absExercises.FetchAbsExercises();
        return View(_absExercises);
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task<IActionResult> Quads()
    {
        await _quadsExercises.FetchQuadsExercises();
        
        return View(_quadsExercises);
    }

    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task <IActionResult>Adductors()
    {

        await _adductorsExercises.FetchAdductorsExercises();

        return View(_adductorsExercises);
    }
}

