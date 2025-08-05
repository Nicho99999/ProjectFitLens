using System.Text.Json.Serialization;
using Entites;
using Newtonsoft.Json;
using ServiceContracts.IAthlete;

namespace ServiceContracts.DTO;

public class NutritionalResponse
{
    public Guid? NutritionId { get; set; } // Maintains realtionship for (Athlete)
    
    public string? Username { get; set; }
    
    
    public Athlete? athlete { get; set; }
    
    public DateTime Timestamp { get; set; }

    public string? Name { get; set; }
    
    public double? Calories { get; set; }
    
    public double? Carbs { get; set; }
    
    public double? TotalFat { get; set; }
    
    public double? Protein { get; set; }
    
    public double? Sodium { get; set; }
    
    public double? Sugar { get; set; }
    
    public double? Fiber { get; set; }
    
    public double? VitaminC { get; set; }
    public double? VitaminD { get; set; }
  
    public double? Calcium { get; set; }
    public double? Iron { get; set; }
    public double? Magnesium { get; set; }
    public double? Potassium { get; set; }
  
    public double? Zinc { get; set; }
    
    public double? TotalCholestrol { get; set; }
    
    public double? Thiamin { get; set; }
    
    public double? Niacin { get; set; }
    
    public double? Riboflavin { get; set; }
    
    public double? Folate { get; set; }

    
    public static  class ServiceExtension 
    {
        
        public static NutritionalResponse toResponse(AthleteNutritionInfo athlete)
        {
            
            return new NutritionalResponse()
            {

                NutritionId = athlete.NutritionId,
                athlete = athlete.Athlete,
                Username = athlete.Username,
                Calories = athlete.Calories,
                Protein = athlete.Protein,
                Carbs = athlete.Carbs,
                TotalFat = athlete.Fat,
                Sodium = athlete.Sodium,
                Sugar = athlete.Sugar,
                Fiber = athlete.Fiber,
                VitaminC = athlete.VitaminC,
                VitaminD = athlete.VitaminD, 
                Calcium = athlete.Calcium,
                Iron = athlete.Iron,
                Magnesium = athlete.Magnesium,
                Potassium = athlete.Potassium,
                Zinc = athlete.Zinc,
                Timestamp = athlete.Timestamp,
                TotalCholestrol = athlete.TotalCholestrol,
                Thiamin = athlete.Thiamin,
                Riboflavin = athlete.Riboflavin,
                Folate = athlete.Folate,
                Niacin = athlete.Niacin,
                
               
            };
            
        }

        

    }





}



    
    
    
    
    
    
    
    
    
    
    
    
    
    
