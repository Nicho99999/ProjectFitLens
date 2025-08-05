using HtmlAgilityPack;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Services
{
    public class WebScrapingService
    {
        
        public async Task<List<string>> GetChestParts()
        {
            var url = "https://exrx.net/Lists/Directory";
            var httpClient = new HttpClient();
            
            // Set a User-Agent header to mimic a browser request
            httpClient.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");


            var chestSubcategories = new List<string>();

            // Fetch the HTML content from the URL
            var html = await httpClient.GetStringAsync(url);

            var htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(html);

            var chestnode = htmlDoc.DocumentNode.SelectSingleNode("//a[text()='Chest']");
            if (chestnode != null)
            {
                var parentnode = chestnode.ParentNode;
                
                var subCategoryNodes = parentnode.SelectNodes(".//following-sibling::ul[1]/li/a");
                if (subCategoryNodes != null)
                {
                    foreach (var node in subCategoryNodes)
                    {
                        chestSubcategories.Add(node.InnerText.Trim());
                    }
                }
            }
            
            return chestSubcategories; // Return the list of subcategories directly
        }
    }
}