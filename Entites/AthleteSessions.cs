using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Entites;

public class AthleteSessions
{
    [Key]
    public Guid? SessionId { get; set; } 
    
    public Guid? NutritionId { get; set; } 
    
    
    public Guid? AthleteId { get; set; }
    
    public string? Username { get; set; }
    
    
    public Athlete? Athlete { get; set; }
    
    public AthleteNutritionInfo? NutritionInfo { get; set; }

    public double? Calories { get; set; } = 0;

    public double? Carbs { get; set; } = 0;

    public double? Fat { get; set; } = 0;
    
    public double? Protein { get; set; }= 0;
    
    public double? Sodium { get; set; }= 0;
    
    public double? Sugar { get; set; }= 0;
    
    public double? Fiber { get; set; }= 0;
    
    public DateTime Timestamp { get; set; }
    
    public double? TotalCholestrol { get; set; }= 0;
    
    public double? VitaminC { get; set; }= 0;
    
    public double? VitaminD { get; set; }= 0;
    
    public double? Calcium { get; set; }= 0;
    
    public double? Iron { get; set; }= 0;
    
    public double? Magnesium { get; set; }= 0;
    
    public double? Potassium { get; set; }= 0;
    
    public double? Zinc { get; set; }= 0;
    
    public double? Thiamin { get; set; }= 0;
    
    public double? Niacin { get; set; }= 0;
    
    public double? Riboflavin { get; set; }= 0;
    
    public double? Folate { get; set; }= 0;




    
    
    
    
    
    
    
    
    
    
}