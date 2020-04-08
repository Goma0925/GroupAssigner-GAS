function main() {
  //-----Input Data settings--
  var loader = new DataLoader();
  var memberDataSheetName = "スクリプト用データベース"
  var userDataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(memberDataSheetName);
  var dataRange = "A1:Z104"
  var significanceScale = loader.loadAttributeHeaders(userDataSheet, dataRange);
  Logger.log("significanceScale: ["+significanceScale+"]");
  //---Side bar Settings-----
  var view = new View();
  view.showModal();
  //-----Settings END-------

  var allMembers = loader.loadMembers(userDataSheet, dataRange);
  //throw "よしきへ：mainではなく、tests/TestProcessorを使ってテストしてください！"
  var preSelectedGroupMembers;
  var processor = new Processor();

  //Yoshiki NEXT: Processor.getNonMembers()を実装
  // input: data, [User, User,..]//すでに入力されているユーザー
  var nonMatchMembers = processor.getNonMatchMembers(allMembers, preSelectedGroupMembers, significanceScale);
  //output [User, User] *被らないユーザーリスト


  //AMON NEXT: クリックした時の関数トリガーを書く
};
