function getMyFilesFromDrive() {
  var myFiles = DriveApp.searchFiles('"me" in owners');
  var sheet = SpreadsheetApp.getActive().getSheetByName("Files");
  sheet.clear();
  var rows = [];
  rows.push(["ID", "Name", "Url", "Type", "DateCreated", "DateUpdated"]);
  while(myFiles.hasNext()) {
    var file = myFiles.next();
    if(file != null) {
      rows.push([file.getId(), file.getName(), file.getUrl(), file.getMimeType(), file.getDateCreated(), file.getLastUpdated()]);
    }
  }
  sheet.getRange(1,1,rows.length,6).setValues(rows);
 }// -- https://spreadsheet.dev/export-list-of-files-in-google-drive-to-google-sheets-using-apps-script
