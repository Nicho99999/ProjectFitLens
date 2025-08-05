using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

public class ChestExercise
{
    public string Name { get; set; }
    public string Type { get; set; }
    public string Muscle { get; set; }
    public string Equipment { get; set; }
    
    public string Difficulty { get; set; }
    
    public string Instructions { get; set; }
}

public class ChestExercises
{
    public List<ChestExercise> Exercises { get; set; } = new List<ChestExercise>();
    
    private readonly HttpClient _httpClient;

    public ChestExercises(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task FetchChestExercises()
    {
        var muscle = "chest";
        var apiKey = "vqohwV07d+D5cjEl9taJxw==37azC0DqgwXqtQPE";
        var apiUrl = $"https://api.api-ninjas.com/v1/exercises?muscle={muscle}";

        // Set the API key in the request headers
        _httpClient.DefaultRequestHeaders.Add("X-Api-Key", apiKey);
        
        
        // Send an asynchronous GET request to the specified API URL
        HttpResponseMessage response = await _httpClient.GetAsync(apiUrl);
        if (response.IsSuccessStatusCode)
        {
            // Read the content of the response as a string
            var result = await response.Content.ReadAsStringAsync();
            // Deserialize the JSON response into a list of ChestExercise
            Exercises = JsonConvert.DeserializeObject<List<ChestExercise>>(result);
        }
        else
        {
            // Handle error response
            throw new HttpRequestException($"Error fetching exercises: {response.StatusCode}");
        }
    }
}