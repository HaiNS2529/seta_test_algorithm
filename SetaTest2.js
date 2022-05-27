function SumTop2(listNumber) {
  if (!Array.isArray(listNumber)) {
    console.log(0);
    return 0;
  }
  if (listNumber.length < 2) {
    console.log(0);
    return 0;
  }
  let max1 = listNumber[0];
  let max2 = listNumber[1];
  for (let i = 1; i <listNumber.length; i++) {
    if (listNumber[i] >= max1) {
      max2 = max1;
      max1 = listNumber[i];
    } else if (listNumber[i] >= max2) {
      max2 = listNumber[i];
    }
  }
  console.log(max1+max2);
  return max1+max2;
}

let list1 = [1, 4, 2, 3, 5];
let list2 = '123';
let list3 = [];
let list4 = [0, 0, 0, 0];
let list5 = [1, 1, 1, 1];
let list6 = [-1, -2, -3, -6, -10, -5];
let list7 = [-1, -5, 5, 2, 1, 0, -4];
SumTop2(list1);
// return 9
SumTop2(list2);
// return 0
SumTop2(list3);
// return 0
SumTop2(list4);
// return 0
SumTop2(list5);
// return 2
SumTop2(list6);
// returnn -3
SumTop2(list7);
// return 7
