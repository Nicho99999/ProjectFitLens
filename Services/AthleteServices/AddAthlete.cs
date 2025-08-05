using Entites;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using ServiceContracts;
using ServiceContracts.DTO;
using ServiceContracts.Enums;
using ServiceContracts.IAthlete;
using Microsoft.Extensions.Logging;

namespace Services;

public class AddAthlete : IAthleteAdd
{

    private readonly FitLensDatabase _fitdb;
    private readonly ILogger<AddAthlete> _log;
    private readonly AthleteUser _athleteUser;
    private readonly UserManager<AthleteUser> _userManager;
    private readonly NutritionalAdd _nutritionalAdd;
    private readonly AthleteNutritionInfo _athleteNutritionInfo;
    private readonly GetAthleteNutrition _getAthleteNutrition;
    private readonly IHttpContextAccessor _accessor;





    public AddAthlete(FitLensDatabase fitdb, ILogger<AddAthlete> log, AthleteUser athleteUser,
        UserManager<AthleteUser> userManager
        , NutritionalAdd nutritionalAdd, AthleteNutritionInfo athleteNutritionInfo,
        GetAthleteNutrition getAthleteNutrition, IHttpContextAccessor accessor)
    {
        _fitdb = fitdb;
        _log = log;
        _athleteUser = athleteUser;
        _userManager = userManager;
        _nutritionalAdd = nutritionalAdd;
        _athleteNutritionInfo = athleteNutritionInfo;
        _getAthleteNutrition = getAthleteNutrition;
        _accessor = accessor;



    }

    public async Task AddPerson(AthleteAdd request, NutritionalAdd nutrition)
    {

        ValidationHelper.ModelValidation(request);


        // Create athlete
        var athlete = request.toAthlete();
        var athlete2 = nutrition.toNutritionInfo();


        // Assign a new guid 
        athlete.AthleteId = Guid.NewGuid();












        var user = _userManager.GetUserName(_accessor.HttpContext.User);
        var user2 = await _userManager.GetUserAsync(_accessor.HttpContext.User);
        if (user != null && user2 != null)
        {
            athlete.Username = user;
            athlete.User = user2;

        }
        
        // AthleteNutrition Info
        
        athlete2.Username = user;
        athlete2.Athlete = athlete;
        athlete2.NutritionId = Guid.NewGuid();
        
        
        
        



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            // Add and save Athlete to database
            _fitdb.Athletes.Add(athlete);
            _fitdb.AthleteNutritionInfos.Add(athlete2);
            _fitdb.SaveChanges();


        

    }

}
    
    
    
    
    
