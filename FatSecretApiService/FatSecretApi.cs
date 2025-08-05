using IdentityModel.Client;
using Newtonsoft.Json;

public class FatSecretApi
{
    private const string tokenEndpoint = "https://oauth.fatsecret.com/oauth2/token"; // Replace with actual token endpoint
    private const string clientId = "206a2d5e68e649f3bae6cf51818b4395"; // Replace with your client ID
    private const string clientSecret = "881551bca43b421caf1d2f000eead322"; // Replace with your client secret

    private static async Task<string> GetAccessTokenAsync()
    {
        using (var client = new HttpClient())
        {
            // Prepare the token request
            var tokenRequest = new ClientCredentialsTokenRequest
            {
                Address = tokenEndpoint,
                ClientId = clientId,
                ClientSecret = clientSecret,
                Scope = "read" // Scope as per FatSecret API documentation (adjust accordingly)
            };

            // Request the token
            var tokenResponse = await client.RequestClientCredentialsTokenAsync(tokenRequest);

            if (tokenResponse.IsError)
            {
                Console.WriteLine($"Error getting access token: {tokenResponse.Error}");
                return null;
            }

            return tokenResponse.AccessToken; // Return the access token
        }
    }

    // Function to search for food using the access token
    public async Task SearchFoodsAsync(string query)
    {
        var accessToken = await GetAccessTokenAsync();
        if (accessToken == null)
        {
            Console.WriteLine("Unable to retrieve access token.");
            return;
        }

        var apiUrl = "https://platform.fatsecret.com/rest/server.api"; // Replace with actual FatSecret API URL
        using (var client = new HttpClient())
        {
            // Prepare the request with the access token in the Authorization header
            var request = new HttpRequestMessage(HttpMethod.Get, apiUrl);
            request.Headers.Add("Authorization", $"Bearer {accessToken}");

            // Add query parameters for the food search
            var queryParams = $"?method=foods.search&search_expression={Uri.EscapeDataString(query)}&format=json";
            request.RequestUri = new Uri(apiUrl + queryParams);

            // Execute the request and get the response
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var foodData = JsonConvert.DeserializeObject<FatSecretResponse>(content);

                if (foodData?.Foods?.Food.Count > 0)
                {
                    foreach (var food in foodData.Foods.Food)
                    {
                        Console.WriteLine($"Food: {food.FoodName}");
                        Console.WriteLine($"Brand: {food.BrandName}");
                        Console.WriteLine($"Calories: {food.Nutrients?.Calories}");
                    }
                }
                else
                {
                    Console.WriteLine("No results found.");
                }
            }
            else
            {
                Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");
            }
        }
    }
}

public class FatSecretResponse
{
    public Foods Foods { get; set; }
}

public class Foods
{
    public List<Food> Food { get; set; }
}

public class Food
{
    public string FoodName { get; set; }
    public string BrandName { get; set; }
    public Nutrients Nutrients { get; set; }
}

public class Nutrients
{
    public int? Calories { get; set; }
}