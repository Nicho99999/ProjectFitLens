using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entites;

public class AthleteNutritionInfo
{
    [Key]
    public Guid? NutritionId { get; set; } // Maintains realtionship for (Athlete)
    
    
    public Guid? AthleteId { get; set; }

    public string? Username { get; set; }
    
    public DateTime Timestamp { get; set; }
    
    public Athlete? Athlete { get; set; }
    
    public double? Calories { get; set; }
    
    // Macros 
    
    public double? Carbs { get; set; }
    
    public double? Fat { get; set; }
    
    public double? Protein { get; set; }
    
    public double? Sodium { get; set; }
    
    public double? Sugar { get; set; }
    
    public double? Fiber { get; set; }
    
    // Cholestrol Levels 
    
    public double? TotalCholestrol { get; set; }
    
    public double? VitaminC { get; set; }
    
    public double? VitaminD { get; set; }
    
    public double? Calcium { get; set; }
    
    public double? Iron { get; set; }
    
    public double? Magnesium { get; set; }
    
    public double? Potassium { get; set; }
    
    public double? Zinc { get; set; }
    
    public double? Thiamin { get; set; }
    
    public double? Niacin { get; set; }
    
    public double? Riboflavin { get; set; }
    
    public double? Folate { get; set; }
    
    
    
    

    
}