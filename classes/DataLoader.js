function DataLoader(){
  this.includeFlagColIndex = 2;
  this.profileAttrStartColIndex = 3;

  this.loadCols = function(sheet, dataRange){
    //{カラム見出し：[データ]}でデータを読み込む関数
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
    var headers;
    try{
      headers = rawMatrix[0];
    }catch(e){
      throw e;
    }
    //Convert the spreadsheet data into a list of Person();
    var attributeHeaders = headers.slice(this.profileAttrStartColIndex);
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
