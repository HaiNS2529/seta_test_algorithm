function stringAppearMost(listString) {
  if (!Array.isArray(listString)) {
      return [];
  }
  if (listString.length <= 0){
      return [];
  }
  let stringLength={};
  let max = -1;
  let LengthMax = 1;
  listString.forEach((item,index) =>{
    if (stringLength[item.length]){
        stringLength[item.length].list.push(item);
        stringLength[item.length].value++;
        if (stringLength[item.length].value > max){
            max = stringLength[item.length].value;
            LengthMax= item.length;
        }
    }
    else{
        stringLength[item.length]={
            list:[item],
            value:1
        }
    }
  })
  console.log(stringLength[LengthMax].list);
  return stringLength[LengthMax].list
}

let list1 = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
let list2 = [];
let list3 = 123;
let list4 = ['a1321', 'a123', 'c2412', 'd131', 'f214'];
let list5 = ['a1321', 'a123', 'c2412', 'd131', 'f214', '12345'];
let list6 = ['1', '1', 'a', 'b', 'c'];
stringAppearMost(list1)
// return [ 'ab', 'cd', 'gh' ]
stringAppearMost(list2)
// return []
stringAppearMost(list3)
// return []
stringAppearMost(list4)
// return [ 'a123', 'd131', 'f214' ]
stringAppearMost(list5)
// return [ 'a123', 'd131', 'f214' ]
stringAppearMost(list6)
// return [ '1', '1', 'a', 'b', 'c' ]
