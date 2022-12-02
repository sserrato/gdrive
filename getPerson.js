
    /**
 * Find a Linkedin profile from company name and job title
 *
 * @param {string} companyName company where your prospect is working
 * @param {string} jobTitle job you are targeting
 * @return if found the linkedinURL + Name of the prospect
 * @customfunction
 */

     function getPerson(companyName,jobTitle) {

        // Get a Custom Search API Key
        // follow this link to get it https://developers.google.com/custom-search/v1/overview
        var key="YOUR CUSTOM SEARCH API KEY"
        
        // Create a Programmable Search Engine
        //follow this link to create it -> https://programmablesearchengine.google.com/
        let searchEngineId = "YOUR SEARCH ENGINE ID"
        
        // Save your project and it's ready to use 
        
        let search = "site:linkedin.com/in intitle:"+jobTitle+" "+companyName
        
        
        // Call Google Custom Search API
        var options = {
          'method' : 'get',
          'contentType': 'application/json',
        };
        response = UrlFetchApp.fetch("https://www.googleapis.com/customsearch/v1?key="+key+"&q="+search+"&cx="+searchEngineId, options);
        
        // Parse linkedin URL and Name
        let url = JSON.parse(response).items[0].formattedUrl
        let title = JSON.parse(response).items[0].title.split("-")[0]
        
        
        // display the results in 2 columns
        var results = new Array(1);
        let info = new Array(2);
        info[0]=url
        info[1]=title
        results[0]=info
        
        return results
        }
         