
using IdentityModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Entites;

public class FitLensDatabase : IdentityDbContext<AthleteUser, AthleteRole, Guid>
{
    public DbSet<Athlete> Athletes { get; set; }
    public DbSet<AthleteNutritionInfo> AthleteNutritionInfos { get; set; }
    
    public DbSet<AthleteSessions> AthleteSessions { get; set; }
    
    public DbSet<FitlensFoodDatabase>FitlensFoodDatabase { get; set; }
    



    public FitLensDatabase(DbContextOptions<FitLensDatabase> options) : base(options)
    {
        
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        base.OnModelCreating(modelBuilder);
        
     
        modelBuilder.Entity<Athlete>()
            .HasOne(a => a.User)
            .WithMany()
            .HasForeignKey(a => a.UserId)
            .OnDelete(DeleteBehavior.Cascade);
        
        modelBuilder.Entity<Athlete>()
            .HasOne(a => a.NutritionInfo)
            .WithMany()
            .HasForeignKey(a => a.NutritionId)
            .OnDelete(DeleteBehavior.Cascade);


        modelBuilder.Entity<AthleteSessions>()
            .HasOne(x => x.NutritionInfo)
            .WithMany()
            .HasForeignKey(a => a.NutritionId);

    }
    
    





































}