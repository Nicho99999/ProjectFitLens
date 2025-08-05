using Entites;

namespace ServiceContracts.DTO;

public class AthleteSessionsReponse
{
     
    public Guid? SessionId { get; set; } // Maintains realtionship for (Athlete)

    public Guid? NutritionId { get; set; } // Maintains realtionship for (AthleteNutritionInfo)

    public string? Username { get; set; }

    public double? Calories { get; set; } = 0; // Defualt value of 0

    public double? Carbs { get; set; } = 0;

    public double? Fat { get; set; } = 0;

    public double? Protein { get; set; } = 0;

    public double? Sodium { get; set; } = 0;

    public double? Sugar { get; set; } = 0;

    public double? Fiber { get; set; } = 0;

    
    public DateTime Timestamp { get; set; }






    public AthleteSessions toAthlete()
    {
        return new AthleteSessions()
        {
            Calories = this.Calories,
            Protein = this.Protein,
            Carbs = this.Carbs,
            Sodium = this.Sodium,
            Sugar = this.Sugar,
            Fiber = this.Fiber,
            Fat = this.Fat,
            Timestamp = this.Timestamp,
            Username = this.Username,
            NutritionId = this.NutritionId,
            SessionId = this.SessionId

            
        };





    }
}