let defaultArray = ["cook", "save", "taste", "vase", "aves", "state", "map"];

const resultArray = [
  ["cook"],
  ["save", "vase", "aves"],
  ["taste", "state"],
  ["map"],
];

const logic = (arrayParam) => {
  let array = [];

  for (let i = 0; i < arrayParam.length; i++) {
    let iArray = [];
    for (let s = 0; s < arrayParam[i].length; s++) {
      // console.log("array I: ", i, arrayParam[i]);
      // console.log("array S: ", s, arrayParam[s]);
      if (arrayParam[i][s] > arrayParam[i][s + 1]) {
        let temp = arrayParam[i][s];
        arrayParam[i][s] = arrayParam[i][s + 1];
        arrayParam[i][s + 1] = temp;
      }
      iArray.push(arrayParam[i][s]);
    }
    array.push(iArray);
  }

  return array;
};

// const bubble = (items) => {
//   var length = items.length;
//   for (var i = 0; i < length; i++) {
//     for (var j = 0; j < length - i - 1; j++) {
//       if (items[i][j] > items[i][j + 1]) {
//         var tmp = items[i][j];
//         items[i][j] = items[i][j + 1];
//         items[i][j + 1] = tmp;
//       }
//     }
//   }
//   return items;
// };

console.log(logic(defaultArray));

// console.log(bubble(defaultArray));
