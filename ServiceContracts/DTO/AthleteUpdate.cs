using System.ComponentModel.DataAnnotations;
using Entites;

namespace ServiceContracts.DTO;

public class AthleteUpdate
{
    public Guid AthleteId { get; set; }
    public string? FirstName { get; set; }
   
    public string? LastName { get; set; }
    
    [DataType(DataType.EmailAddress)]
    public string? Email { get; set; }
   
    public DateTime DateOfBirth { get; set; }
    
    public int? Age { get; set; }
    
    [DataType(DataType.PhoneNumber)]
   
    public string PhoneNumber { get; set; }
    
    public bool Newsletters { get; set; }
   
    public string? FitnessGoals { get; set; }
    
   
    public int HeightFeet { get; set; }
    
    
    public int HeightInches { get; set; }
    
   
    public int Weight { get; set;}
    
    
    public string? StreetAddress { get; set; }
    
   
    public string? City { get; set; }
    
    
    public string? State { get; set; }
    
   
    [DataType(DataType.PostalCode)]
    public int Zipcode { get; set; }
   
    public string? Country { get; set; }



    public Athlete UpdateAthlete()
    {
        var today = DateTime.Now;
        var age = today.Year - DateOfBirth.Year;
        
        if (today < DateOfBirth.AddYears(age)) 
        {
            age--;
            
                
        }

        
        return new Athlete()
        {
            AthleteId = this.AthleteId,
            FirstName = this.FirstName,
            LastName = this.LastName,
            // Email = this.Email,
            // PhoneNumber = this.PhoneNumber,
            DateOfBirth = this.DateOfBirth,
            // Newsletter = this.Newsletters,
            Weight = this.Weight,
            StreetAddress = this.StreetAddress,
            City = this.City,
            Zipcode = this.Zipcode,
            Country = this.Country,
           // HeightFeet = this.HeightFeet,
          //  HeightInches = this.HeightInches,
            

        };
        

    }


   
    





    
}