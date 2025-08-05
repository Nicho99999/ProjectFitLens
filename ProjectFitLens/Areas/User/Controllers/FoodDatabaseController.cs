using Entites;
using IdentityModel.Client;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace ProjectFitLens.Areas.User.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FoodDatabaseController : ControllerBase
{
    
    private readonly HttpClient _httpClient;
    private readonly FitLensDatabase _database;
    private readonly FitlensFoodDatabase _foodDatabase;
    private const string TokenEndpoint = "https://oauth.fatsecret.com/connect/token"; // FatSecret OAuth token endpoint
    private const string ClientId = "206a2d5e68e649f3bae6cf51818b4395"; // Replace with your actual client ID
    private const string ClientSecret = "881551bca43b421caf1d2f000eead322"; // Replace with your actual client secret


    
    public FoodDatabaseController(HttpClient httpClient, FitLensDatabase database, FitlensFoodDatabase foodDatabase)
    {
        _httpClient = httpClient;
        _database = database;
        _foodDatabase = foodDatabase;
    }
    
    
    public class TokenResponse
    {
        [JsonProperty("access_token")]
        public string AccessToken { get; set; }

        [JsonProperty("token_type")]
        public string TokenType { get; set; }

        [JsonProperty("expires_in")]
        public int? ExpiresIn { get; set; }
    }
    
    
    
    
   [HttpPost("savefood")]
    public async Task <IActionResult> SaveFood([FromBody] FitlensFoodDatabase saveFood)
    {
        
        // Add a Matching instance 
      //  var existingFoodEntry = _database.FitlensFoodDatabase.FirstOrDefault(x => x.Name == savedFood.Name);
        
        
        if (saveFood.Name != null)
        {
            var savingfood = new FitlensFoodDatabase()
            {
                FoodId = Guid.NewGuid(),
                Name = saveFood.Name,
                Brand = saveFood.Brand,
                Servingsize = saveFood.Servingsize,
                ServingUnit = saveFood.ServingUnit,
                ServingPerContainer = saveFood.ServingPerContainer,
                

            };

            await _database.FitlensFoodDatabase.AddAsync(savingfood);
            await _database.SaveChangesAsync();
            

        }
        
        
        return Ok();

    }

    [HttpGet("getfoods")]
    public async Task<IActionResult> GetFoods(string query)
    {
        
        var results = await _database.FitlensFoodDatabase
            .Where(f => f.Name.Contains(query) || f.Brand.Contains(query))
            .ToListAsync();

        return Ok(results);
    }
    
    
 // Method to get the access token using OAuth 2.0
        private async Task<string> GetAccessTokenAsync()
        {
            using (var client = new HttpClient())
            {
                // Prepare the token request with required parameters
                var requestData = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("grant_type", "client_credentials"),
                    new KeyValuePair<string, string>("client_id", ClientId),
                    new KeyValuePair<string, string>("client_secret", ClientSecret),
                    new KeyValuePair<string, string>("scope", "premier") // Example scope: adjust as necessary
                });

                // Send the request to obtain the access token
                var response = await client.PostAsync(TokenEndpoint, requestData);

                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception($"Error getting access token: {response.ReasonPhrase}");
                }
                
                

                // Read and parse the response content
                var responseContent = await response.Content.ReadAsStringAsync();
               
                Console.WriteLine($"Response Status: {response.StatusCode}");

                Console.WriteLine($"Response Content: {responseContent}"); // Log the raw response content
  
                var tokenResponse = JsonConvert.DeserializeObject<TokenResponse>(responseContent);

                

                
                return tokenResponse?.AccessToken; // Return the access token
            }
        }

        
        [HttpGet("search")]
        public async Task<IActionResult> SearchFoodsAsync([FromQuery] string query)
        {
            if (string.IsNullOrEmpty(query) || query.Length < 3)
            {
                return BadRequest("Please provide a valid search term.");
            }

            try
            {
                // Get the access token
                var accessToken = await GetAccessTokenAsync();
                
                var apiUrl = "https://platform.fatsecret.com/rest/foods/search/v3?"; // Correct URL for the URL-based integration
                using (var client = new HttpClient())
                {
                    var queryParams = $"search_expression={Uri.EscapeDataString(query)}&format=json";
                    var requestUrl = apiUrl + queryParams;

                    var request = new HttpRequestMessage(HttpMethod.Get, requestUrl);
                    request.Headers.Add("Authorization", $"Bearer {accessToken}");

                    // Execute the request and get the response
                    var response = await client.SendAsync(request);

                    // Log the raw response content for debugging
                    var rawResponse = await response.Content.ReadAsStringAsync();
                    Console.WriteLine($"Raw Response: {rawResponse}"); // Log the raw response content

                    // Check if the response is successful
                    if (response.IsSuccessStatusCode)
                    {
                        // Return raw JSON to the frontend
                        return Content(rawResponse, "application/json");
                    }
                    else
                    {
                        // If the response was not successful, return the status code and reason phrase
                        return StatusCode((int)response.StatusCode, $"Error: {response.ReasonPhrase} - {rawResponse}");
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }   
        
        
        
    

   


    

    
}