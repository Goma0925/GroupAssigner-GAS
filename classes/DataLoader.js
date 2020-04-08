function DataLoader(){
  this.includeFlagColIndex = 2; //ユーザーデータを読み込むかどうかを設定する行のインデックス番号。一行目を０とする。この行にはTRUE/FALSEを指定する。
  this.profileAttrStartColIndex = 3; //this.loadMembers（）を実行した際に、Person.profileに入れるデータ行を指定する。指定されたインデックスから右の行を全てPersonprofileに読み込む。ただし、一番上の見出しがない行は読み込まない。
  
  this.loadCols = function(sheet, dataRange){
    //{カラム見出し：[データ]}オブジェクト形式でデータを読み込む関数。この関数は使われていません。
    var rawMatrix = sheet.getRange(dataRange).getValues();
    var dataObj = {};
    var headers;
    try{
      headers = rawMatrix[0];
    }catch(e){
      throw e;
    }
    
    for (var colNum=0; colNum<headers.length; colNum++){
      var colValues = [];
      for (var rowNum=1; rowNum<rawMatrix.length; rowNum++){
        colValues.push(rawMatrix[rowNum][colNum]);
      };
      dataObj[headers[colNum]] = colValues;
    };
    return dataObj;
  };
  
  this.loadAttributeHeaders = function(sheet, dataRange){
    //dataRangeで指定された、スプシの一番上の列(row)を配列で取得する関数
    var rawMatrix = sheet.getRange(dataRange).getValues();
    var headers;
    try{
      headers = rawMatrix[0];
    }catch(e){
      throw e;
    };
    var attributeHeaders = headers.slice(this.profileAttrStartColIndex);
    return attributeHeaders.filter(function (el) {
      if (el !==""){
        return el;
      };
    });;
  };
  
  this.loadMembers = function(sheet, dataRange){
    //スプシのデータをPersonオブジェクトの配列で読み込む関数
    var allUsers = [];
    var rawMatrix = sheet.getRange(dataRange).getValues();
    
    //Convert the spreadsheet data into a list of Person();
    var attributeHeaders = this.loadAttributeHeaders(sheet, dataRange);
    Logger.log("attributeHeaders")
    Logger.log(attributeHeaders);
    var includeThisMember = null;
    for (var rowNum=1; rowNum<rawMatrix.length; rowNum++){
      includeThisMember = rawMatrix[rowNum][this.includeFlagColIndex] === "TRUE";
      if (includeThisMember){
        var profileAttributes = rawMatrix[rowNum].slice(this.profileAttrStartColIndex);
        //Get user attributes
        var user_id = (rawMatrix[rowNum][0]).toString();
        var name = (rawMatrix[rowNum][1]);
        var profile = {};
        for (var i=0; i<attributeHeaders.length;i++){
          profile[attributeHeaders[i]] = profileAttributes[i].toString();
        };
        var person = new Person(user_id, name, profile);
        allUsers.push(person);
      };
    };
    
    return allUsers;
  };
};
