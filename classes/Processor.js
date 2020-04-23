function Processor(){
  this.getNonMatchMembers = function(allMembersLeft, preSelectedMembers, significanceScale){
    // params:
    // allMembers: List[Person, Person]
    // preSelectedMembers:  List[Person, Person]
    // significance:  List[String, String]  インデックス0が一番重要なデータ項目の見出しString
    // Person class signiture example: {name: "Yoshiki", user_id:"3", profile:{department:"戦略策定室",...}}
    // 1. 全属性がマッチしない人を探す
    var tempAllMembersLeft = allMembersLeft; //copying so that we don't change the original

	var nonMatchMembers = []; //we return this in the end

	for(var attr in significanceScale){

		for(var person in preSelectedMembers){
			var tempArray = [];
			tempArray.push(person["profile"][attr]);
		}

		var existingCharacteritics = tempArray.filter(onlyUnique); //taking out distinct existing characteristics in a row

		var nonMatched = []; //次のステージに進める人たち
		var matched = []; //fall out組

		for(var person in tempAllMembersLeft){

			if(existingCharacteritics.includes(person["profile"][attr])){ //if the characteristic is already selected in the same row
				matched.push(person);
			}

			else{
				nonMatched.push(person);
			}

		}

		tempAllMembersLeft = nonMatched;
		nonMatchMembers.unshift(matched);

	}

	nonMatchMembers.unshift(tempAllMembersLeft); //１つもattrが被ってない奇跡組をpush

	return nonMatchMembers
    //!!!!実装前に読んでほしい(byあもん)!!!!
    //getNonMatchMembers()の返り値は、単純なarrayじゃなくて、2D arrayにしてもらえる？
    //例)
    // [[全てのattributeがマッチしなかったメンバー],
    //  [一つを除いてattributeがマッチしなかったメンバー],
    //  [2つを除いてattributeがマッチしなかったメンバー]]
    //→ つまり毎回必ず、全パターンの処理をする。(全属性がマッチしない人、一つを除いてマッチしないひと、2つを除いてマッチしない人...)
    // こうするとスプシで表示するときに柔軟性をもたせられるので！
    //
    //　独り言: 計算量がなかなかすごいことになりそうなので、動的プログラミング(Dynamic Programming)&再起定義(Recursion)
    // をつかって実装できたらそうしてほしいかも...Not mustだけど！



    //return [[Person, Person], [Person, Person],...] 2D array
  };

  this.onlyUnique = function(value, index, self) {
    	return self.indexOf(value) === index;
  };


};
