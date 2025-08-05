using Entites;
using ServiceContracts.Enums;

namespace ServiceContracts.DTO
{
    public class AthleteAndNutritionResponse
    {
        public AthleteResponse? Athlete { get; set; }
        public NutritionalResponse? Nutritional { get; set; }
        
        
        

        
        public AthleteAndNutritionResponse(NutritionalResponse nutritional, AthleteResponse athlete)
        {
            Nutritional = nutritional;
            Athlete = athlete;
        }

       

        public static AthleteAndNutritionResponse ToResponse(AthleteNutritionInfo nutritional, Athlete athlete, AthleteSessions sessions)
        {
            if (athlete.DateOfBirth == null)
                throw new ArgumentNullException(nameof(athlete.DateOfBirth), "Date of Birth cannot be null");

            var today = DateTime.Now;
            var age = today.Year - athlete.DateOfBirth.Year;

            if (today < athlete.DateOfBirth.AddYears(age))
            {
                age--;
            }

            // Construct AthleteResponse
            var athleteResponse = new AthleteResponse
            {
                AthleteId = athlete.AthleteId,
                Username = athlete.Username,
                FirstName = athlete.FirstName,
                LastName = athlete.LastName,
                DateOfBirth = athlete.DateOfBirth,
                Age = age,
                HeightFeet = athlete.HeightFeet,
                HeightInches = athlete.HeightInches,
                Weight = athlete.Weight,
                StreetAddress = athlete.StreetAddress,
                City = athlete.City,
                Zipcode = athlete.Zipcode,
                Country = athlete.Country,
                Gender = (GenderEnum)Enum.Parse(typeof(GenderEnum), athlete.Gender),
                FitnessGoals = (GoalEnums)Enum.Parse(typeof(GoalEnums), athlete.FitnessGoals),
                ActivityLevel = (ActivityLevels)Enum.Parse(typeof(ActivityLevels), athlete.ActivityLevel),
                
              
            };

            // Construct NutritionalResponse
            var nutritionalResponse = new NutritionalResponse
            {
                Username = nutritional.Username,
                NutritionId = nutritional.NutritionId,
                Calories = nutritional.Calories,
                Protein = nutritional.Protein,
                Carbs = nutritional.Carbs,
                Sodium = nutritional.Sodium,
                Sugar = nutritional.Sugar,
                Fiber = nutritional.Fiber,
                TotalFat  = nutritional.Fat
            };

           
            
            

            return new AthleteAndNutritionResponse(nutritionalResponse, athleteResponse);
        }

       
    }
}