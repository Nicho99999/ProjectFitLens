using Newtonsoft.Json;

namespace Services;

public class LowerBackExercise
{
    public string Name { get; set; }
    public string Type { get; set; }
    public string Muscle { get; set; }
    public string Equipment { get; set; }
    
    public string Difficulty { get; set; }
    
    public string Instructions { get; set; }
    
}

public class LowerBackExercises
{
    
    public List<LowerBackExercise> Exercises { get; set; } = new List<LowerBackExercise>();
    private HttpClient _httpClient;


    public LowerBackExercises(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task FetchLowerBackExercises()
    {
        
        var back = "lower_back";
        var apiKey = "vqohwV07d+D5cjEl9taJxw==37azC0DqgwXqtQPE";
        var url = $"https://api.api-ninjas.com/v1/exercises?muscle={back}";
        
        // Set request Headers
        _httpClient.DefaultRequestHeaders.Add("X-Api-Key", apiKey);
        
        // Send Get request to API
        HttpResponseMessage response = await _httpClient.GetAsync(url);
        if (response.IsSuccessStatusCode)
        {
            // Convert response into string
            var content = await response.Content.ReadAsStringAsync();
            Exercises = JsonConvert.DeserializeObject<List<LowerBackExercise>>(content);

        }
        else
        {
            throw new HttpRequestException("Error fetching back exercises");
        }


    }







}