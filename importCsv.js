function importCSVFilesFromDrive(folderId) {
    // Get the folder by ID
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFilesByType(MimeType.CSV);
    
    // Get the current Google Sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Loop through all CSV files in the folder
    while (files.hasNext()) {
      var file = files.next();
      var fileName = file.getName();
      var csvContent = file.getBlob().getDataAsString();
      
      // Create a new sheet named after the CSV file
      var sheet = ss.getSheetByName(fileName);
      if (!sheet) {
        sheet = ss.insertSheet(fileName);
      } else {
        // Clear the sheet if it already exists
        sheet.clear();
      }
      
      // Parse CSV content and populate the sheet
      var csvData = Utilities.parseCsv(csvContent);
      sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData);
    }
  }
  
  function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('CSV Importer')
      .addItem('Import CSV Files', 'showPrompt')
      .addToUi();
  }
  
  function showPrompt() {
    var ui = SpreadsheetApp.getUi();
    var response = ui.prompt('CSV Importer', 'Please enter the Google Drive folder ID:', ui.ButtonSet.OK_CANCEL);
    
    // Process the user's response
    if (response.getSelectedButton() == ui.Button.OK) {
      var folderId = response.getResponseText();
      importCSVFilesFromDrive(folderId);
      ui.alert('CSV files imported successfully!');
    } else {
      ui.alert('Import cancelled.');
    }
  }
  