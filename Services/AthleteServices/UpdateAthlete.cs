using Entites;
using Microsoft.EntityFrameworkCore.Infrastructure;
using ServiceContracts.DTO;
using ServiceContracts.IAthlete;

namespace Services;

public class UpdateAthlete : IAthleteUpdate
{
    private readonly FitLensDatabase _database;


    public UpdateAthlete(FitLensDatabase database)
    {
        _database = database;
    }


    public AthleteResponse UpdatedAthlete(AthleteUpdate update)
    {
        // Validate
        if (update == null)
        {
            throw new ArgumentException("Please fill in all the fields");
            
        }
        
        ValidationHelper.ModelValidation(update);
        
        // Find AthleteId of user thats updating update.FirstName = matchingAthlete.FirstName;
        var matchingAthlete = _database.Athletes.FirstOrDefault(a => a.AthleteId == update.AthleteId);
        
        // Update athlete
        
        matchingAthlete.FirstName = update.FirstName;
        matchingAthlete.LastName = update.LastName;
        matchingAthlete.DateOfBirth = update.DateOfBirth;
        matchingAthlete.Country = update.Country;
        matchingAthlete.City = update.City;
         matchingAthlete.Weight = update.Weight;
        matchingAthlete.Zipcode = update.Zipcode; 
        
        
        // save changes to Database
        _database.SaveChanges();
        
        // response
        var response = AthleteResponse.ServiceExtension.ToResponse(matchingAthlete);
        return response;







    }
}