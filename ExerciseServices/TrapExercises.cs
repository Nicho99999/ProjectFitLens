using Newtonsoft.Json;


namespace Services;

public class TrapExercise
{
    public string Name { get; set; }
    public string Type { get; set; }
    public string Muscle { get; set; }
    public string Equipment { get; set; }
    
    public string Difficulty { get; set; }
    
    public string Instructions { get; set; }
}


public class TrapExercises
{
    
    public List<TrapExercise> Exercises { get; set; } = new List<TrapExercise>();
    private HttpClient _httpClient;

    public TrapExercises(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }


    public async Task FetchTrapExercises()
    {
        var muscle = "traps";
        var apikey = "vqohwV07d+D5cjEl9taJxw==37azC0DqgwXqtQPE";
        var url = $"https://api.api-ninjas.com/v1/exercises?muscle={muscle}";
        
        // Set headers
        _httpClient.DefaultRequestHeaders.Add("X-Api-Key", apikey);
        
        // Make a GET request
        HttpResponseMessage response = await _httpClient.GetAsync(url);
        if (response.IsSuccessStatusCode)
        {
            // Format the GET request as a string 
            var content = await response.Content.ReadAsStringAsync();
            // Desearlize into the List 
            Exercises = JsonConvert.DeserializeObject<List<TrapExercise>>(content);
        }
        else
        {
            throw new ApplicationException($"Failed to fetch trap exercises: {response.StatusCode}");
        }
        
    }

    
    
}