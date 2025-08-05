using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entites.Migrations
{
    /// <inheritdoc />
    public partial class micronutrients_add : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Calcium",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Iron",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Magnesium",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Phosphorus",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Potassium",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Timestamp",
                table: "AthleteNutritionInfos",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<double>(
                name: "TotalCholestrol",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "VitaminA",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "VitaminC",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "VitaminD",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "VitaminE",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "VitaminK",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Zinc",
                table: "AthleteNutritionInfos",
                type: "float",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Calcium",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "Iron",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "Magnesium",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "Phosphorus",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "Potassium",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "Timestamp",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "TotalCholestrol",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "VitaminA",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "VitaminC",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "VitaminD",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "VitaminE",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "VitaminK",
                table: "AthleteNutritionInfos");

            migrationBuilder.DropColumn(
                name: "Zinc",
                table: "AthleteNutritionInfos");
        }
    }
}
