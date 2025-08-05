using System.ComponentModel.DataAnnotations;
using Entites;
using ServiceContracts.Enums;

namespace ServiceContracts.DTO;



public class AthleteResponse
{
    
    public Guid AthleteId { get; set; }
        
    public string? FirstName { get; set; }
    
    public Guid NutritionId { get; set; } // Maintains realtionship for (Athlete)
    
    public string?  Username { get; set; }  
    public string? LastName { get; set; }
        
    [DataType(DataType.Date)]
    public DateTime? DateOfBirth { get; set; }
    
    public int? Age { get; set; }
        
    public GoalEnums? FitnessGoals { get; set; }
        
    public int? Weight { get; set; }
        
    public GenderEnum? Gender { get; set; }
    
    
              // Address
   // ----------------------------------------------------------------------------------   
    
    public string? StreetAddress { get; set; }
            
    public string? City { get; set; }


    [DataType(DataType.PostalCode)]
    public int? Zipcode { get; set; }
    
    public string? Country { get; set; }
    
    
          // Height
    // ----------------------------------------------------------------------------------     
    
    public int? HeightFeet { get; set; }
    
    public int? HeightInches { get; set; }
    
    
    //   BMR
    // ----------------------------------------------------------------------------------     

    
    public ActivityLevels? ActivityLevel { get; set; } 
    
   
    

    public static class ServiceExtension
    { 
        public static AthleteResponse ToResponse(Athlete athlete)
        {
            
            var today = DateTime.Now;
            var age = today.Year - athlete.DateOfBirth.Year;

            if (today < athlete.DateOfBirth.AddYears(age)) 
            {
                age--;
                
            }
            
            return new AthleteResponse
            {
                
                AthleteId = athlete.AthleteId,
                Username = athlete.Username,
                FirstName = athlete.FirstName, 
                LastName = athlete.LastName,
                DateOfBirth = athlete.DateOfBirth,
                Age = age,
                Weight = athlete.Weight,
                HeightFeet = athlete.HeightFeet,
                HeightInches = athlete.HeightInches,
                Gender = (GenderEnum)Enum.Parse(typeof(GenderEnum), athlete.Gender),
                StreetAddress = athlete.StreetAddress,
                City = athlete.City,
                Zipcode = athlete.Zipcode,
                Country = athlete.Country,
                ActivityLevel = (ActivityLevels)Enum.Parse(typeof(ActivityLevels), athlete.ActivityLevel),
                FitnessGoals = (GoalEnums)Enum.Parse(typeof(GoalEnums), athlete.FitnessGoals),
                
            };
            
        }
        
    }


   






    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

}