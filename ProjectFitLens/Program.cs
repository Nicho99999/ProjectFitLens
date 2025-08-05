using Entites;
using ExerciseService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Serilog;
using ServiceContracts.DTO;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Identity.Extensions;
using Microsoft.AspNetCore.Identity;
using ProjectFitLens.Areas.User.Controllers;
using ServiceContracts.IAthlete;
using Services;

var builder = WebApplication.CreateBuilder(args);




builder.Services.AddScoped<IAthleteAdd, AddAthlete >(); // Helps Dependency Injection
builder.Services.AddScoped<IAthleteDelete, DeleteAthlete>(); // Helps Dependency Injection
builder.Services.AddScoped<IAthleteUpdate, UpdateAthlete>();// Helps Dependency Injection
builder.Services.AddScoped<IAthleteGet, GetAthlete>();// Helps Dependency Injection
builder.Services.AddScoped<IAthleteGetNutrition, GetAthleteNutrition>();
builder.Services.AddScoped<AthleteNutritionInfo>();
builder.Services.AddScoped<GetAthleteNutrition>();
builder.Services.AddScoped<GetAthlete>();
builder.Services.AddScoped<AddAthlete>();
builder.Services.AddScoped<AthleteUser>();
builder.Services.AddScoped<AthleteResponse>();
builder.Services.AddScoped<WebScrapingService>();
builder.Services.AddScoped<ChestExercises>();
builder.Services.AddScoped<LowerBackExercises>();
builder.Services.AddScoped<TrapExercises>();
builder.Services.AddScoped<TricepExercises>();
builder.Services.AddScoped<ForearmExercises>();
builder.Services.AddScoped<GluteExercises>();
builder.Services.AddScoped<HamstringExercises>();
builder.Services.AddScoped<CalvesExercises>();
builder.Services.AddScoped<DeltoidExercises>();
builder.Services.AddScoped<BicepExercises>();
builder.Services.AddScoped<AbsExercises>();
builder.Services.AddScoped<QuadsExercises>();
builder.Services.AddScoped<AdductorsExercises>();
builder.Services.AddScoped<NutritionalAdd>();
builder.Services.AddScoped<Athlete>();
builder.Services.AddScoped<HttpContextAccessor>();
builder.Services.AddScoped<NutritionalResponse>();
builder.Services.AddScoped<AthleteAndNutritionResponse>();
builder.Services.AddScoped<AthleteSessionsReponse>();
builder.Services.AddScoped<FitlensFoodDatabase>();






builder.Services.AddSerilog(); // << Adds Serilog for Logging
builder.Services.AddSession(options =>
{

    options.IdleTimeout = DateTime.Today.AddDays(1).Subtract(DateTime.Now);
    options.Cookie.IsEssential = true;


});

builder.Services.AddEndpointsApiExplorer();















// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddControllers();
builder.Services.AddHttpClient(); // Http Client for API calls

// Connect to Database
builder.Services.AddDbContext<FitLensDatabase>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("AzureDatabaseConnection"));
    
});

// Register User,Role
builder.Services.AddIdentity<AthleteUser, AthleteRole>(options =>
    {
        // Password Requirments
        
        options.Password.RequiredLength = 6;
        options.Password.RequireLowercase = true;
        options.Password.RequireUppercase = true;

    })
    // What DB store tables
    .AddEntityFrameworkStores<FitLensDatabase>();



builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {

        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();


    });
});

// Adding Authentication <<<<<<<<<<  [Authorize(Policy = "Not Authenticated")]
/*builder.Services.AddAuthorization(options =>
{
    options.FallbackPolicy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
    
    // Adds a custom authorization policy named "NotAuthenticated"
    options.AddPolicy("NotAuthenticated", policy =>
    {
        // Define the rules for this policy
        policy.RequireAssertion(context =>
        {
            // Check if the user is NOT authenticated
            return !context.User.Identity.IsAuthenticated;
        });
    });
});*/














builder.Services.ConfigureApplicationCookie(options =>
{
    
options.LoginPath = "/Home/FitLensHome";
options.LogoutPath = "/RegisterLogin/Logout";
options.SlidingExpiration = true;


});



// --------------------------------Sessions--------------------------------------------


builder.Services.AddDistributedMemoryCache(); // Adds Memory cache for sessions


// --------------------------------Sessions--------------------------------------------





var app = builder.Build();



// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();

}


// MiddleWare 

app.UseHttpsRedirection(); // Redirect HTTP to HTTPS
app.UseStaticFiles(); // Serve static files (CSS, JS, etc.)
app.UseRouting(); // Add routing
app.UseCors("AllowAll"); // Apply the CORS policy
app.UseSession(); // Enable session support
app.UseAuthentication(); // Add authentication middleware
app.UseAuthorization(); // Add authorization middleware
app.UseHsts(); // Add HSTS after HTTPS is enabled
app.MapControllerRoute(
    name: "Login",
    pattern: "{controller=RegisterLogin}/{action=Login}"
);

app.MapControllerRoute(
    name: "Register",
    pattern: "{controller=RegisterLogin}/{action=Register}"
);

app.MapControllerRoute(
    name: "Exercise Page",
    pattern: "{area:exists}/{controller=Exercise}/{action=Home}"
);

app.MapControllerRoute(
    name: "Calories Page",
    pattern: "{area:exists}/{controller=Calorie}/{action=CalorieHome}"
    
    
);

app.UseAuthentication();
app.UseAuthorization();









app.Run();