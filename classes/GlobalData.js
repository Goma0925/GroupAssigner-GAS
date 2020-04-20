function INIT_GLOBAL_VARS(){
  var loader = new DataLoader();
  //---Data Settings-----
  this.memberDataSheetName = "スクリプト用データベース"
  this.userDataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.memberDataSheetName);
  this.dataRange = "A1:Z104"
  this.significanceScale = loader.loadAttributeHeaders(this.userDataSheet, this.dataRange);
  Logger.log("significanceScale: ["+this.significanceScale+"]");

  //---Side bar Settings-----
}
var GLOBAL_VARS = new INIT_GLOBAL_VARS();
