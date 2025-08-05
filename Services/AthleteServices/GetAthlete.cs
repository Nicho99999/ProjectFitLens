using Castle.Components.DictionaryAdapter.Xml;
using Entites;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ServiceContracts;
using ServiceContracts.DTO;
using ServiceContracts.Enums;
using ServiceContracts.IAthlete;

namespace Services;

public class GetAthlete : IAthleteGet
{
    private readonly FitLensDatabase _db;
    private readonly AthleteResponse _athleteResponse;
    private readonly HttpContextAccessor _httpContextAccessor;
    private readonly UserManager<AthleteUser> _userManager;
    private readonly NutritionalResponse _nutritionalResponse;

    
    
    public GetAthlete(FitLensDatabase db, AthleteResponse athleteResponse, HttpContextAccessor httpContextAccessor, UserManager<AthleteUser> userManager
    , NutritionalResponse nutritionalResponse)
    {
        _db = db;
        _athleteResponse = athleteResponse;
        _httpContextAccessor = httpContextAccessor;
        _userManager = userManager;
        _nutritionalResponse = nutritionalResponse;
        
    }


   

    public async Task <string> GetCurrentUser(string username)
    {
        var user = _userManager.GetUserName(_httpContextAccessor.HttpContext.User);
        
        return user;
    }
    

    public async Task GetAthleteByUsername(string username)
    {
        var user = _userManager.GetUserName(_httpContextAccessor.HttpContext.User);
        if (user != null)
        {
            username = user;
        }

      var athlete1 =  _db.Athletes.FirstOrDefault(x => x.Username == username);
      var athlete2 = _db.AthleteNutritionInfos.FirstOrDefault(x => x.Username == username);
      var athlete3 = _db.AthleteSessions.FirstOrDefault(x => x.Username == username);
      var athlete = AthleteAndNutritionResponse.ToResponse(athlete2, athlete1, athlete3);
        
        
      
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    public List<AthleteResponse> GetAllAthletes()
    {
        var response = _db.Athletes.Select(all => AthleteResponse.ServiceExtension.ToResponse(all)).ToList();
        return response;
        
    }

    public AthleteResponse GetAthleteByName(string firstName, string lastName)
    {
        
        var namefound = _db.Athletes.FirstOrDefault(name => name.FirstName == firstName && name.LastName == lastName);
        
       var response = AthleteResponse.ServiceExtension.ToResponse(namefound);
       return response;
    }

   
    public AthleteResponse GetAthleteByWeight(int weight)
    {
        var weightfound = _db.Athletes.FirstOrDefault(id => id.Weight == weight);
        var response = AthleteResponse.ServiceExtension.ToResponse(weightfound);
        return response;
    }

   
    public AthleteResponse GetAthleteByBirthday(DateTime birthday)
    {
        throw new NotImplementedException();
    }

    
    
    public AthleteResponse GetAthletesLocation()
    {

        if (_athleteResponse.AthleteId != null)
        {
            var athleteslocation = _db.Athletes.Where(a => a.AthleteId == _athleteResponse.AthleteId).Select(a => new
            {
                a.Zipcode,
                a.StreetAddress,
                a.City

            }).FirstOrDefault();

            if (athleteslocation != null)
            {
                
                _athleteResponse.Zipcode = athleteslocation.Zipcode;
                _athleteResponse.StreetAddress = athleteslocation.StreetAddress;
                _athleteResponse.City = athleteslocation.City;
                
            }
            
            
        }
        
        return _athleteResponse;
        
        
    }

    

    public AthleteResponse GetAthletesByAge(int age)
    {
        throw new NotImplementedException();
    }

   

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}