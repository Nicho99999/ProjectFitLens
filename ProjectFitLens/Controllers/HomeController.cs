using Entites;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ProjectFitLens.Controllers;

[AllowAnonymous]
public class HomeController : Controller
{
    private readonly FitLensDatabase _database;
    private readonly UserManager<AthleteUser> _userManager;
    private readonly HttpContext _httpContext;
    


    public HomeController(FitLensDatabase database, UserManager<AthleteUser> userManager, HttpContext httpContext)
    {
        _database = database;
        _userManager = userManager;
        _httpContext = httpContext;
        
    }
    
    
    // GET
    public IActionResult FitLensHome()
    {
        
        
        
        return View();
    }


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}