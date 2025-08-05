using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entites.Migrations
{
    /// <inheritdoc />
    public partial class Fitlensfooddatabase_add_servings : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "ServingPerContainer",
                table: "FitlensFoodDatabase",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "ServingUnit",
                table: "FitlensFoodDatabase",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Servingsize",
                table: "FitlensFoodDatabase",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ServingPerContainer",
                table: "FitlensFoodDatabase");

            migrationBuilder.DropColumn(
                name: "ServingUnit",
                table: "FitlensFoodDatabase");

            migrationBuilder.DropColumn(
                name: "Servingsize",
                table: "FitlensFoodDatabase");
        }
    }
}
