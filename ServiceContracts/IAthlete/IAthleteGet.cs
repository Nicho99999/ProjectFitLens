using ServiceContracts.DTO;
using ServiceContracts.Enums;

namespace ServiceContracts.IAthlete;

public interface IAthleteGet
{
    
    
    
    public Task<string> GetCurrentUser(string username);

    public Task GetAthleteByUsername(string username);

    // GetAllAthletes() 
    public List<AthleteResponse> GetAllAthletes();
    
    // GetAthleteByName() 
    public AthleteResponse GetAthleteByName(string firstName, string lastName);
    
    
    // GetAthleteByWeight() 
    public AthleteResponse GetAthleteByWeight(int weight);
    
    // GetAthletesByBirthdate()
    public AthleteResponse GetAthleteByBirthday(DateTime birthday);
    
    // GetAthletesLocaton() 
    public AthleteResponse GetAthletesLocation();
    
    // GetAthletesByAge()
    public AthleteResponse GetAthletesByAge(int age);

   








}