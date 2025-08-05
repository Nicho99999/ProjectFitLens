using System.Text.Json.Serialization;
using Entites;

namespace AthleteDashboardSessionExport;

public class AthleteDasboardSessionExport
{
    
    public Guid? SessionId { get; set; } // Maintains realtionship for (Athlete)

    public Guid? NutritionId { get; set; } // Maintains realtionship for (Athlete)

    public string? Username { get; set; }
    
    [JsonPropertyName("calories")]
    public double? Calories { get; set; }
    
    [JsonPropertyName("protein")]
    public double? Protein { get; set; }
    
    [JsonPropertyName("carbs")]
    public double? Carbs { get; set; }
    
    [JsonPropertyName("fats")]
    public double? Fats { get; set; }
    
    [JsonPropertyName("fiber")]
    public double? Fiber { get; set; }
    
    [JsonPropertyName("sugar")]
    public double? Sugar { get; set; }
    
    [JsonPropertyName("sodium")]
    public double? Sodium { get; set; }
    
    public DateTime Timestamp { get; set; }
    
    [JsonPropertyName("totalcholestrol")]
    public double? TotalCholestrol { get; set; }
    
    [JsonPropertyName("vitaminc")]

    public double? VitaminC { get; set; }
    
    [JsonPropertyName("vitamind")]

    public double? VitaminD { get; set; }
    
    [JsonPropertyName("calcium")]

    public double? Calcium { get; set; }
    
    [JsonPropertyName("iron")]

    public double? Iron { get; set; }
    
    [JsonPropertyName("magnesium")]

    public double? Magnesium { get; set; }
    
    [JsonPropertyName("potassium")]

    public double? Potassium { get; set; }
    
    [JsonPropertyName("zinc")]

    public double? Zinc { get; set; }
    
    [JsonPropertyName("thiamin")]

    public double? Thiamin { get; set; }
    
    [JsonPropertyName("niacin")]

    public double? Niacin { get; set; }
    
    [JsonPropertyName("riboflavin")]

    public double? Riboflavin { get; set; }
    
    [JsonPropertyName("folate")]

    public double? Folate { get; set; }
    
    






    public AthleteSessions toAthlete()
    {
        return new AthleteSessions()
        {
            Calories = this.Calories,
            Protein = this.Protein,
            Carbs = this.Carbs,
            Fat = this.Fats,
            Fiber = this.Fiber,
            Sugar = this.Sugar,
            Sodium = this.Sodium,
            Timestamp = this.Timestamp,
            Username = this.Username,
            NutritionId = this.NutritionId,
            SessionId = this.SessionId,
            TotalCholestrol = this.TotalCholestrol,
            VitaminC = this.VitaminC,
            VitaminD = this.VitaminD,
            Calcium = this.Calcium,
            Iron = this.Iron,
            Magnesium = this.Magnesium,
            Potassium = this.Potassium,
            Zinc = this.Zinc,
            Thiamin = this.Thiamin,
            Niacin = this.Niacin,
            Riboflavin = this.Riboflavin,
            Folate = this.Folate,

            
        };





    }

}
