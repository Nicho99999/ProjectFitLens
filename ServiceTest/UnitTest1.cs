using HtmlAgilityPack;
using Moq;
using System.Collections.Generic;
using Xunit;
using Assert = Xunit.Assert;

namespace Services.Tests
{
    public class WorkoutScrapperServiceTests
    {
        [Fact]
        public void GetChestSubcategories_ShouldReturnCorrectSubcategories()
        {
            // Arrange
            var mockHtmlWeb = new Mock<HtmlWeb>();

            // Mock the main directory response
            var htmlDocument = new HtmlDocument();
            htmlDocument.LoadHtml(@"
                <html>
                    <body>
                        <div id='mainShell'>
                            <article>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <ul>
                                                        <li><a href='/chest'>Chest</a></li>
                                                        <li><a href='/back'>Back</a></li>
                                                        <li><a href='/legs'>Legs</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </body>
                </html>
            ");

            // Mock the chest page response
            var chestPageHtml = new HtmlDocument();
            chestPageHtml.LoadHtml(@"
                <html>
                    <body>
                        <ul>
                            <li><a href='/chest/exercise1'>Bench Press</a></li>
                            <li><a href='/chest/exercise2'>Push Up</a></li>
                            <li><a href='/chest/exercise3'>Dumbbell Fly</a></li>
                        </ul>
                    </body>
                </html>
            ");

            // Set up the mock behavior for loading pages
            mockHtmlWeb.Setup(x => x.Load(It.IsAny<string>()))
                .Returns((string url) => url.Contains("/chest") ? chestPageHtml : htmlDocument);

            // Create instance of service with mocked HtmlWeb
            var service = new WorkoutScrapperService();

            // Act
            var result = service.GetChestSubcategories();

            // Assert
            var expectedSubcategories = new List<string> { "Bench Press", "Push Up", "Dumbbell Fly" };
            Assert.Equal(expectedSubcategories, result);
        }
    }
}
