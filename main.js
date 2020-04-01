function main() {
  //---------Settings-------
  var loader = new DataLoader();
  var memberDataSheetName = "スクリプト用データベース"
  var userDataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(memberDataSheetName);
  var significanceScale = loader.loadAttributeHeaders(userDataSheet);
  Logger.log("significanceScale["+significanceScale+"]");
  //-----Settings END-------

  var allMembers = loader.loadMembers(userDataSheet, "A1:G104");
  throw "よしきへ：mainではなく、tests/TestProcessorを使ってテストしてください！"
  var preselectedGroupMembers;
  var processor = new Processor();

  //Yoshiki
  // input: data, [User, User,..]//すでに入力されているユーザー
  processor.getNonMembers(allMembers, preselectedGroupMembers, significanceScale);


  //output [User, User] *被らないユーザーリスト

  //NEXT: データ読み込みを書く
};
