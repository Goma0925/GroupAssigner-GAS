function test(){
  //---------Settings-------
  var significanceScale = ["board", "department", "region"];
  var memberDataSheetName = "スクリプト用データベース"
  var userDataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(memberDataSheetName);
  Logger.log(userDataSheet);
  var loader = new DataLoader();
  //-----Settings END-------

  //Get Members
  allMembers = loader.loadMembers(userDataSheet, "A1:G104");
  testPreSelectedGroupMembers = allMembers.slice(5, 8);

  var processor = new Processor();
  var nonMatchMembers;
  nonMatchMembers = processor.getNonMatchMembers(allMembers, testPreSelectedGroupMembers, significanceScale);

  //Log： ctrl+enter もしくは https://docs.google.com/spreadsheets/d/1pwg7BbLlDNfyyctfXYYjKdvJUaVAAyzTKwKKNISNPUs/edit#gid=0　からログが見れる。
  var logMessage = "\n";
  for (var i=0; i<nonMatchMembers.length;i++){
    logMessage +=  "["+i+"]:"+ nonMatchMembers[i].join() + "\n";
    Sp.log(1+i, "nonMatchMembers["+i+"](array vals joined in a str):", nonMatchMembers[i].join());
  };
  Logger.log(logMessage);
};
