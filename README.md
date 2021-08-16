# gdrive

Helpful add ons via Scripts.

## Google Docs - Date - gDocsDate.js 

This is JavaScript to include date as an auto-updated field upon doc load. Access it after adding the script to Docs via Utilities > Insert Date.


## Google Sheets - Google Maps function for directions in cells - gSheetsMap.js

This enables a function to insert directions into a cell based on an address in an other cell. ```=GOOGLEMAPS_DURATION($D$28,D18,"walking")``` where the first argument is an address (the from) and the second argument is the destination. The third argument is a string "walking", "driving", 
"bicycling" or "transit". 