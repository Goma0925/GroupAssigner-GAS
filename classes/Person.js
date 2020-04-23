function Person(id, name, profile){
  if (id === "undefined" || Object.prototype.toString.call(id) !== "[object String]" ){throw "Person() takes an id as its first parameter."}
  if (name === "undefined" || Object.prototype.toString.call(name) !== "[object String]" ){throw "Person() takes a string name as its second parameter."}
  if (profile === "undefined" || Object.prototype.toString.call(profile) !== "[object Object]" ){throw "Person() takes an object profile as its first parameter."}
  this.id = id;
  this.name = name;
  this.profile = profile;
  //profileフォーマット:
  //1	Yuna Mizutani	TRUE	1	Yes	執行局	Tokyo
  //→profile = {board: "Yes", department:"執行局",...}
  this.toString = function(){
    var string = "{id="+this.id+", "+ "name="+this.name;
    for (var attr in profile){
      string += ","+attr+"="+this.profile[attr];
    }
    string += "}\n"
    return string;
  };
};
