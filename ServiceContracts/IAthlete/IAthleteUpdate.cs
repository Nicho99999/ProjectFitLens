using ServiceContracts.DTO;

namespace ServiceContracts.IAthlete;

public interface IAthleteUpdate
{
    // UpdateAthlete() Method
    
    public AthleteResponse UpdatedAthlete(AthleteUpdate update);
}