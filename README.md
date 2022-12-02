# gdrive

Helpful add ons via Scripts.

## Google Docs - Date - gDocsDate.js 

This is JavaScript to include date as an auto-updated field upon doc load. Access it after adding the script to Docs via Utilities > Insert Date.


## Google Sheets - Google Maps function for directions in cells - gSheetsMap.js

This enables a function to insert directions into a cell based on an address in an other cell. ```=GOOGLEMAPS_DURATION($D$28,D18,"walking")``` where the first argument is an address (the from) and the second argument is the destination. The third argument is a string "walking", "driving", 
"bicycling" or "transit". 


## Google Sheets LinkedIn Search

Via https://www.lemlist.com/ghseet-hack

Query Linked In from a Google Sheet. Helpful for job searching.  ```=getPerson(A2,B2)``` where A and B are company and title you are looking for. s

- Create a spreadsheet wih:
1. Column A, Row 1 titled Company
2. Column B, Row titled Title 
![getPeople results](/images/getPeople.png "getPeople ")


