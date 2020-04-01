function main() {
  //---------Settings-------
  var significanceScale = ["board", "department", "region"];
  var memberDataSheetName = "スクリプト用データベース"
  var userDataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(memberDataSheetName);
  Logger.log(userDataSheet);
  var loader = new DataLoader();
  //-----Settings END-------

  var allMembers = loader.loadMembers(userDataSheet, "A1:G104");
  throw "よしきへ：mainではなく、tests/TestProcessorを使ってテストしてください！"
  var preselectedGroupMembers;
  //dataのフォーマット　　　{"user_id":[1,2,3],name:["Yoshiki", "Amon"...]};
  var processor = new Processor();

  //Yoshiki
  // input: data, [User, User,..]//すでに入力されているユーザー
  processor.getNonMembers(allMembers, preselectedGroupMembers, significanceScale);


  //output [User, User] *被らないユーザーリスト

  //NEXT: データ読み込みを書く
};
