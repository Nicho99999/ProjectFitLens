using Entites;

namespace ServiceContracts.DTO;

public class NutritionalAdd
{
    public Guid NutritionId { get; set; } // Maintains realtionship for (Athlete)
    
    public string? Username { get; set; }
    
    public double? Calories { get; set; }
    
    public double? Carbs { get; set; }
    
    public double? Fat { get; set; }
    
    public double? Protein { get; set; }
    
    public double Sodium { get; set; }
    
    public double? Sugar { get; set; }
    
    public double? Fiber { get; set; }
    
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

    
   
    
    








    public AthleteNutritionInfo toNutritionInfo()
    {

        return new AthleteNutritionInfo()
        {

            NutritionId = this.NutritionId,
            Username = this.Username,
            Calories = this.Calories,
            Protein = this.Protein,
            Carbs = this.Carbs,
            Fat = this.Fat,
            Sodium = this.Sodium,
            Sugar = this.Sugar,
            Fiber = this.Fiber,
            TotalCholestrol = this.TotalCholestrol,
            VitaminC = this.VitaminC,   
            VitaminD = this.VitaminD,
            Riboflavin = this.Riboflavin,
            Calcium = this.Calcium,
            Iron = this.Iron,
            Magnesium = this.Magnesium, 
            Potassium = this.Potassium,
            Zinc = this.Zinc,
            Thiamin = this.Thiamin,
            Niacin = this.Niacin,
            Folate = this.Folate

        };

    }





}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
