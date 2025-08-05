using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using ServiceContracts.Enums;

namespace ServiceContracts.DTO;

public class MainRegister
{
    [Required(ErrorMessage = "Username is required")]
  //  [Remote("IsUsernameAlreadyRegistered", "Calorie", ErrorMessage = "Username is already registered")]
    public string UserName { get; set; }

  //  [Remote(action: "IsEmailAlreadyRegistered", controller: "RegisterLogin")]
    [Required(ErrorMessage = "Email is required")]
    [DataType(DataType.EmailAddress)]
    [EmailAddress(ErrorMessage = "Invalid Email Address")]
    public string Email { get; set; }
    
    
   
    [Required(ErrorMessage = "Email is required")]
    [Compare("Email", ErrorMessage = "Email doesn't match")]
    public string CompareEmail { get; set; }
    
    [Required(ErrorMessage = "Password is required")]
    [DataType(DataType.Password)]
    public string Password { get; set; }
    
    
    [DataType(DataType.Password)]
    [Compare("Password", ErrorMessage = "Passwords do not match")]
    [Required(ErrorMessage = "Password doesn't match")]
    public string ComparePassword { get; set; }

    [DataType(DataType.PhoneNumber)]
    [Required(ErrorMessage = "Phone Number is required")]
    public string PhoneNumber { get; set; }
    
    public UserTypes UserType { get; set; } 


    
    
}