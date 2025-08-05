using Newtonsoft.Json;
using Services;

namespace ExerciseService;

public class AdductorsExercise
{
    public string Name { get; set; }
    public string Type { get; set; }
    public string Muscle { get; set; }
    public string Equipment { get; set; }
    
    public string Difficulty { get; set; }
    
    public string Instructions { get; set; }
    
}



public class AdductorsExercises
{
    
    public List<AdductorsExercise> Exercises { get; set; } = new List<AdductorsExercise>();
    private HttpClient _httpClient;


    public AdductorsExercises(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task FetchAdductorsExercises()
    {
        
        var muscle = "adductors";
        var apiKey = "vqohwV07d+D5cjEl9taJxw==37azC0DqgwXqtQPE";
        var url = $"https://api.api-ninjas.com/v1/exercises?muscle={muscle}";
        
        // Set request Headers
        _httpClient.DefaultRequestHeaders.Add("X-Api-Key", apiKey);
        
        // Send Get request to API
        HttpResponseMessage response = await _httpClient.GetAsync(url);
        if (response.IsSuccessStatusCode)
        {
            // Convert response into string
            var content = await response.Content.ReadAsStringAsync();
            Exercises = JsonConvert.DeserializeObject<List<AdductorsExercise>>(content);

        }
        else
        {
            throw new HttpRequestException("Error fetching back exercises");
        }


    }







}