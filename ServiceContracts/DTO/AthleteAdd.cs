using System.ComponentModel.DataAnnotations;
using Duende.IdentityServer.Models;
using Entites;
using Microsoft.AspNetCore.Mvc;
using ServiceContracts;
using ServiceContracts.DTO;
using ServiceContracts.Enums;

namespace ServiceContracts.DTO;


public class AthleteAdd
{
    public Guid AthleteId { get; set; }

    [Required(ErrorMessage = "First Name is required")]

    public string? FirstName { get; set; }
    
    
    [Required(ErrorMessage = "Last Name is required")]
    public string? LastName { get; set; }
    
     
    [Required(ErrorMessage = "DateofBirth is required")]
    public DateTime DateOfBirth { get; set; }
    
    
    public int? Age { get; set; }
    
    public string?  Username { get; set; }  
    
    
     
    public GenderEnum Gender { get; set; }
    
    
    [Required(ErrorMessage = "Sharing your goals will help us implement a better experience")]
    public GoalEnums FitnessGoals { get; set; }
    
    [Required(ErrorMessage = "Height is required")]
    public int? HeightFeet { get; set; }
    
    [Required(ErrorMessage = "Height is required")]
    public int? HeightInches { get; set; }
    
    [Required(ErrorMessage = "Please enter in weight")]
    public int Weight { get; set;}
    
    
    public string? StreetAddress { get; set; }
    
    
    public string? City { get; set; }
    
    
    
    [DataType(DataType.PostalCode)]
    
    public int Zipcode { get; set; }
   
    public string? Country { get; set; }
    
    
    [Required(ErrorMessage = "Please select a activity level")]
    public ActivityLevels ActivityLevel { get; set; }
    
    
    
    
    
    public Athlete toAthlete()
    {
        
        var today = DateTime.Now;
        var age = today.Year - DateOfBirth.Year;

        if (today < DateOfBirth.AddYears(age)) 
        {
            age--;
                
        }
        
        return new Athlete
        {
            AthleteId = this.AthleteId,
            Username = this.Username,
            FirstName = this.FirstName,
            LastName = this.LastName,
            DateOfBirth = this.DateOfBirth,
            Weight = this.Weight,
            StreetAddress = this.StreetAddress,
            City = this.City,
            Age = age,
            Zipcode = this.Zipcode,
            Country = this.Country,
            Gender = this.Gender.ToString(),
            HeightFeet = this.HeightFeet,
            HeightInches = this.HeightInches,
            ActivityLevel = this.ActivityLevel.ToString(),
            FitnessGoals = this.FitnessGoals.ToString(),
          
            

        };
        

    }

    

   
    }








