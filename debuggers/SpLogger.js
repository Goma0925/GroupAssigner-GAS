///-------------------------Debug Logger-------------------------"
//-What this does:
//  This code snippet is for you to keep log easily when you are developing a Google Script Project.
//  It will work just like Logger.log() function but instead of keeping a log on Console, this code will write the log into a spreadsheet.
//-How to use:
//  Copy paste the ENTIRE section of this code and call Sp.log() wherever you'd like to keep the log.
//-Example
// Sp.log(0, "Description", variable); //Writes the value of the variable in the first row with Description.
function SpLogger(){
  this.spreadsheetID = "1pwg7BbLlDNfyyctfXYYjKdvJUaVAAyzTKwKKNISNPUs";
  this.sheetName = "シート1";
  this.spreadsheet = SpreadsheetApp.openById(this.spreadsheetID);
  this.sheet = this.spreadsheet.getSheetByName(this.sheetName);

  //ログを取りたい所にこのコードを呼び出す。
  this.log = function(index, label, content) {
    var values = [
      [label, content],
    ];
      var range = "A" + index + ":B" + index;
      this.sheet.getRange(range).setValues(values);
      }
};
var Sp = new SpLogger();
///-----------------------Debug Logger End------------------------"
