using Entites;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using ServiceContracts.DTO;
using ServiceContracts.Enums;
using Services;

namespace ProjectFitLens.Controllers;

[AllowAnonymous]
public class RegisterLoginController : Controller
{

    private readonly FitLensDatabase _db; // Database 
    private readonly SignInManager<AthleteUser> _signInManager; // Sign in 
    private readonly UserManager<AthleteUser> _userManager;
    private readonly ILogger<RegisterLoginController> _logger;
    private readonly RoleManager<AthleteRole> _athleteRole;
    private readonly AthleteUser _athleteUser;
    private readonly Athlete _athletemain;
    private readonly HttpContextAccessor _httpContextAccessor;
    private readonly NutritionalResponse _athleteResponse;
    private readonly GetAthleteNutrition _getAthleteNutrition;
   
    
    


    public RegisterLoginController(FitLensDatabase db, SignInManager<AthleteUser> signInManager, ILogger<RegisterLoginController> logger, UserManager<AthleteUser> userManager, RoleManager<AthleteRole> athleteRole
    , AthleteUser athleteUser, Athlete athletemain, HttpContextAccessor httpContextAccessor, NutritionalResponse athleteResponse, GetAthleteNutrition getAthleteNutrition)
    {
        _db = db;
        _signInManager = signInManager;
        _logger = logger;
        _userManager = userManager;
        _athleteRole = athleteRole;
        _athleteUser = athleteUser;
        _athletemain = athletemain;
        _httpContextAccessor = httpContextAccessor;
        _athleteResponse = athleteResponse;
        _getAthleteNutrition = getAthleteNutrition;
      
        
    }
    
    // GET
    [HttpGet]
    [Route("{controller}/{action}")]
    public IActionResult Register()
    {

        
        return View();
    }
    
    
    // POST
    [HttpPost]
    [Route("{controller}/{action}")]
    public async Task <IActionResult> Register(MainRegister register)
    {
        if (!ModelState.IsValid )
        {
            ViewBag.Errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList();
           return View(register);
        }
        
        
        
                    // Create the user 
            AthleteUser athlete = new AthleteUser()
            {
                Email = register.Email,
                UserName = register.UserName,
                PhoneNumber = register.PhoneNumber,

            };


            IdentityResult athleteadded = await _userManager.CreateAsync(athlete, register.Password);
            
            if (!athleteadded.Succeeded)
            {

                return View(register);
            }
            
                if  (register.UserType == UserTypes.User)
                {

                    var roleExist = await _athleteRole.FindByNameAsync(UserTypes.User.ToString());

                    if (roleExist == null)
                    {
                        // Put Athlete in role of (User)
                        await _athleteRole.CreateAsync(new AthleteRole
                        {
                            Name = UserTypes.User.ToString(),
                            NormalizedName = UserTypes.User.ToString().ToUpper(),
                        });

                        await _userManager.AddToRoleAsync(athlete, UserTypes.User.ToString());
                    }
                    
                    
                    await _signInManager.SignInAsync(athlete, true);
                    
                    
                    
                    return RedirectToAction("AthleteSurvey", "AthleteRegister");
                }
                
                
            
            

          
            
                return RedirectToAction("AthleteSurvey", "AthleteRegister");
    }

    
    
    
    
    
    
    // GET
    [HttpGet]
    [Route("{controller}/{action}")]
    public IActionResult Login()
    {
        
        return View();
    }
    
    
    
    
    
    
    // POST
    [HttpPost]
    [Route("{controller}/{action}")]
    public async Task <IActionResult> Login(AthleteLogin login)
    {
        
        // Validation 
        if (!ModelState.IsValid)
        {
            ViewBag.Errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList();
            return View(login);
        }
       
        
        
        
        // Log User in 
        var user = await _signInManager.PasswordSignInAsync(login.Email, login.Password, true, false);
        if (user.Succeeded)
        {
            
            return RedirectToAction("Home", "Exercise", new { area = "User" });
        }
        else
        {
           
            ModelState.AddModelError(string.Empty, "Invalid login attempt");
          
            return View(login);
        }
       
        
        
        
        return View(login);
    }

    
    
    public async Task<IActionResult> Logout()
    {
         await _signInManager.SignOutAsync();

         
       return  RedirectToAction("Login", "RegisterLogin");
    }
    
    
    
    
    /*
    // Remote Validaition
    [HttpGet]
    [Route("{controller}/{action}")]
    public async Task<IActionResult> IsEmailAlreadyRegistered(string email)
    {
        // Check if email is registerd
        AthleteUser athleteUser = await _userManager.FindByEmailAsync(email);

        if (athleteUser == null) // if email is not found
        {
            return Json(true); // Email is Available (true)
        }
        else
        {
            return Json(false); // Email is already in use (false)
        }


    }
    */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}