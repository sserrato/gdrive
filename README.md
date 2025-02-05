# gdrive

Helpful add-ons via Google Apps Scripts for Google Workspace.

## Quick Start Guide

1. Open script.google.com or access the script editor from your Google Workspace app
2. Create a new script
3. Copy the desired script into the editor
4. Save and authorize the script
5. Follow the specific setup instructions below for each tool

## Google Docs - Date (gDocsDate.js)

Automatically insert formatted dates in your Google Docs.

- Access via: Utilities > Insert Date
- Inserts current date in bold at cursor position
- Uses your local date format with month name

## Google Sheets - Maps Integration (gSheetsMap.js)

Calculate travel times directly in your spreadsheet cells.

Usage:
```javascript
=GOOGLEMAPS_DURATION($D$28, D18, "walking")
```

Options for mode of transport:
- "walking"
- "driving"
- "bicycling"
- "transit"

Additional features:
- Convert coordinates to addresses
- Generate Google Maps links
- Get coordinates from addresses

## Google Sheets - Drive File Listing (gDriveFiles.js)

Organize your Google Drive files in a spreadsheet.

Usage:
```javascript
=getMyFilesFromDrive
```

Lists all your files with:
- ID
- Name
- URL
- Type
- Date Created
- Date Updated

## Google Sheets LinkedIn Search (getPerson.js)

Search LinkedIn profiles directly from your spreadsheet.

Setup:
1. Get a Google Custom Search API Key from [Google Cloud Console](https://console.cloud.google.com)
2. Create a Programmable Search Engine at [Google Programmable Search](https://programmablesearchengine.google.com/)
3. Add your keys to the script

Usage:
1. Create a spreadsheet with:
   - Column A: Company
   - Column B: Title
2. Use formula: `=getPerson(A2,B2)`

## New Tools

### Image Gallery Creator (getImaesSlides.js)
Creates a presentation from images in a Drive folder:
- Automatically sizes and centers images
- Maintains aspect ratios
- Supports common image formats

### Text Extractor (getTextFromSlides.js)
Converts Google Slides to Markdown:
- Extracts all text content
- Maintains formatting
- Creates a Markdown file in your Drive

### CSV Importer (importCsv.js)
Bulk import CSV files into Google Sheets:
- Import multiple files at once
- Creates separate sheets for each CSV
- Access via "CSV Importer" menu

## Security Notes

- Keep API keys and credentials secure
- Review script permissions before authorizing
- Do not commit sensitive information to GitHub

## License

MIT License

Copyright (c) 2024 [Your Name or Organization]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
