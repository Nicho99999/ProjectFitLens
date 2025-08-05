using System.ComponentModel.DataAnnotations;
using Entites;
using ServiceContracts;
using ServiceContracts.DTO;
using ServiceContracts.IAthlete;

namespace Services;

public class DeleteAthlete : IAthleteDelete
{
    private readonly FitLensDatabase _database;
    private readonly AthleteResponse _athlete;

    public DeleteAthlete(FitLensDatabase database, AthleteResponse athlete)
    {
        _database = database;
        _athlete = athlete;
    }


    public bool Delete(Guid AthleteId)
    {
        
        ValidationHelper.ModelValidation(AthleteId);
        
        var deletedathlete = _database.Athletes.FirstOrDefault(find => find.AthleteId == AthleteId);

        if (deletedathlete != null)
        {
            _database.Remove(deletedathlete);
            _database.SaveChanges();
            return true; // Successfully Deleted
        }
        else
        {
            return false;
            
        }
        

       

    }
}