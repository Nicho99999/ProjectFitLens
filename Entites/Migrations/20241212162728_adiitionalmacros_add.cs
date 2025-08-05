using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entites.Migrations
{
    /// <inheritdoc />
    public partial class adiitionalmacros_add : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VitaminK",
                table: "AthleteNutritionInfos",
                newName: "Thiamin");

            migrationBuilder.RenameColumn(
                name: "VitaminE",
                table: "AthleteNutritionInfos",
                newName: "Riboflavin");

            migrationBuilder.RenameColumn(
                name: "VitaminA",
                table: "AthleteNutritionInfos",
                newName: "Niacin");

            migrationBuilder.RenameColumn(
                name: "Phosphorus",
                table: "AthleteNutritionInfos",
                newName: "Folate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Thiamin",
                table: "AthleteNutritionInfos",
                newName: "VitaminK");

            migrationBuilder.RenameColumn(
                name: "Riboflavin",
                table: "AthleteNutritionInfos",
                newName: "VitaminE");

            migrationBuilder.RenameColumn(
                name: "Niacin",
                table: "AthleteNutritionInfos",
                newName: "VitaminA");

            migrationBuilder.RenameColumn(
                name: "Folate",
                table: "AthleteNutritionInfos",
                newName: "Phosphorus");
        }
    }
}
