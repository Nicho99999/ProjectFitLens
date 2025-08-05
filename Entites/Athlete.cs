using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Entites;

public class Athlete
{
    [Key]
    public Guid AthleteId { get; set; }
    
    public string?  Username { get; set; }  
    
    public Guid UserId { get; set; }
    
    public Guid? NutritionId { get; set; }
    
    public AthleteNutritionInfo? NutritionInfo { get; set; }
    
    public AthleteUser? User { get; set; }  // Navigation property linking to the AthleteUser instance
    
    [MaxLength(50)]
    public string? FirstName { get; set; }
    [MaxLength(50)]   
    public string? LastName { get; set; }
        
    [DataType(DataType.Date)]
    public DateTime DateOfBirth { get; set; }
    
    public int? Age { get; set; }
    
    [MaxLength(10)] 
    public int? Weight { get; set; }
    [MaxLength(20)]
    public string? Gender { get; set; }
    
    public int? HeightFeet { get; set; }
    
    public int? HeightInches { get; set; }
    
    public string? StreetAddress { get; set; }
    [MaxLength(20)]       
    public string? City { get; set; }
    [MaxLength(50)]       
   
    [DataType(DataType.PostalCode)]
    public int? Zipcode { get; set; }
    [MaxLength(100)] 
    public string? Country { get; set; }
    
    public string? ActivityLevel { get; set; } 
    
    public string? FitnessGoals { get; set; }

   

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
        
        




}