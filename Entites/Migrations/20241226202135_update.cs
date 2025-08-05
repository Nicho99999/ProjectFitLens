using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entites.Migrations
{
    /// <inheritdoc />
    public partial class update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AthleteSessions",
                columns: table => new
                {
                    SessionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NutritionId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    AthleteId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Calories = table.Column<double>(type: "float", nullable: true),
                    Carbs = table.Column<double>(type: "float", nullable: true),
                    Fat = table.Column<double>(type: "float", nullable: true),
                    Protein = table.Column<double>(type: "float", nullable: true),
                    Sodium = table.Column<double>(type: "float", nullable: true),
                    Sugar = table.Column<double>(type: "float", nullable: true),
                    Fiber = table.Column<double>(type: "float", nullable: true),
                    Timestamp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TotalCholestrol = table.Column<double>(type: "float", nullable: true),
                    VitaminC = table.Column<double>(type: "float", nullable: true),
                    VitaminD = table.Column<double>(type: "float", nullable: true),
                    Calcium = table.Column<double>(type: "float", nullable: true),
                    Iron = table.Column<double>(type: "float", nullable: true),
                    Magnesium = table.Column<double>(type: "float", nullable: true),
                    Potassium = table.Column<double>(type: "float", nullable: true),
                    Zinc = table.Column<double>(type: "float", nullable: true),
                    Thiamin = table.Column<double>(type: "float", nullable: true),
                    Niacin = table.Column<double>(type: "float", nullable: true),
                    Riboflavin = table.Column<double>(type: "float", nullable: true),
                    Folate = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AthleteSessions", x => x.SessionId);
                    table.ForeignKey(
                        name: "FK_AthleteSessions_AthleteNutritionInfos_NutritionId",
                        column: x => x.NutritionId,
                        principalTable: "AthleteNutritionInfos",
                        principalColumn: "NutritionId");
                    table.ForeignKey(
                        name: "FK_AthleteSessions_Athletes_AthleteId",
                        column: x => x.AthleteId,
                        principalTable: "Athletes",
                        principalColumn: "AthleteId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AthleteSessions_AthleteId",
                table: "AthleteSessions",
                column: "AthleteId");

            migrationBuilder.CreateIndex(
                name: "IX_AthleteSessions_NutritionId",
                table: "AthleteSessions",
                column: "NutritionId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AthleteSessions");
        }
    }
}
