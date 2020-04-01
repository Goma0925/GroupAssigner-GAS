function Processor(){
  this.getNonMatchMembers = function(allMembers, preSelectedMembers, significanceScale){
    // params:
    // allMembers: List[Person, Person]
    // preSelectedMembers:  List[Person, Person]
    // significance:  List[String, String]  インデックス0が一番重要なデータ項目の見出しString
    // 1. 全属性がマッチしない人を探す
    var nonMatchMembers = [["全てのattributeがマッチしなかったメンバー"], ["一つを除いてattributeがマッチしなかったメンバー"]];
    //!!!!実装前に読んでほしい(byあもん)!!!!
    //getNonMatchMembers()の返り値は、単純なarrayじゃなくて、2D arrayにしてもらえる？
    //例)
    // [[全てのattributeがマッチしなかったメンバー],
    //  [一つを除いてattributeがマッチしなかったメンバー],
    //  [2つを除いてattributeがマッチしなかったメンバー]]
    //→ つまり毎回必ず、全パターンの処理をする。(全属性がマッチしない人、一つを除いてマッチしないひと、2つを除いてマッチしない人)
    //こうするとスプシで表示するときに柔軟性がある気がする
    //
    //　独り言: 計算量がなかなかすごいことになりそうなので、動的プログラミング(Dynamic Programming)&再起定義(Recursion)
    // をつかって実装できたらそうしてほしいかも...Not mustだけど！



    //return [[Person, Person], [Person, Person],...] 2D array
    return nonMatchMembers;
  };
};
