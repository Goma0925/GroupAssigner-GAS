function test(){
  //---------Settings-------
  var loader = new DataLoader();
  var memberDataSheetName = "スクリプト用データベース"
  var userDataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(memberDataSheetName);
  var significanceScale = loader.loadAttributeHeaders(userDataSheet, "A1:G104");
  Logger.log("significanceScale: ["+significanceScale+"]");
  //-----Settings END-------

  //Get Members
  allMembers = loader.loadMembers(userDataSheet, "A1:G104");
  testPreSelectedGroupMembers = allMembers.slice(5, 8);

  var processor = new Processor();
  var nonMatchMembers;
  nonMatchMembers = processor.getNonMatchMembers(allMembers, testPreSelectedGroupMembers, significanceScale);

  //Log： ctrl+enter もしくは https://docs.google.com/spreadsheets/d/1pwg7BbLlDNfyyctfXYYjKdvJUaVAAyzTKwKKNISNPUs/edit#gid=0　からログが見れる。
  var logMessage = "nonMatchMembers:\n";
  for (var i=0; i<nonMatchMembers.length;i++){
    logMessage +=  "index="+i+": ["+ nonMatchMembers[i].join() + "]\n";
    Sp.log(1+i, "nonMatchMembers["+i+"]: [", nonMatchMembers[i].join() + "]");
  };
  Logger.log(logMessage);
};
