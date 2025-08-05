using ServiceContracts.DTO;

namespace ServiceContracts.IAthlete;

public interface IAthleteGetNutrition
{
    
    // GetAthletesBMR()
    public Task GetAthletesBMRandMacros(string username);
    
    
  
    // GetDasboardData
    public Task<AthleteAndNutritionResponse> GetDashboardData(string username);















}