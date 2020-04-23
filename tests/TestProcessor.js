function test(){
  //---------Settings-------
  var loader = new DataLoader();
  var memberDataSheetName = "スクリプト用データベース"
  var userDataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(memberDataSheetName);
  var dataRange = "A1:Z104"
  var significanceScale = loader.loadAttributeHeaders(userDataSheet, dataRange);
  Logger.log("significanceScale: ["+significanceScale+"]");
  //-----Settings END-------

  var sliceStart, sliceEnd;
  //ここを変更することで、Inputのユーザーを変更することが可能
  sliceStart = 5;
  sliceEnd = 10;
  //テスト用のProcessorへのインプットを作成
  var allMembers = loader.loadMembers(userDataSheet, dataRange);
  var testAllMembersLeft = allMembers.slice(0, sliceStart).concat(allMembers.slice(sliceEnd+1, allMembers.length-1));
  var testPreSelectedGroupMembers = allMembers.slice(sliceStart, sliceEnd+1);

  var processor = new Processor();
  var nonMatchMembers;
  nonMatchMembers = processor.getNonMatchMembers(testAllMembersLeft, testPreSelectedGroupMembers, significanceScale);

  //Input出力
  Sp.log(2, "testAllMembersLeft", testAllMembersLeft.toString());
  Sp.log(3, "testPreSelectedGroupMembers",testPreSelectedGroupMembers.toString());
  Sp.log(4, "significanceScale", significanceScale.toString());
  //Output出力
  for (var i=0; i<nonMatchMembers.length;i++){
    var logMessage = "[";
    for (var j=0; j<nonMatchMembers[i].length; j++){
        logMessage += nonMatchMembers[i][j].toString();
    };
    logMessage += "]\n";
    Sp.log(10+i, "nonMatchMembers["+i+"]", logMessage);
  };
  Logger.log(logMessage);
};
