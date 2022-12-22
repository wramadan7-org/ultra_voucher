const defaultArray = [
  'cook',
  'save',
  'taste',
  'vase',
  'aves',
  'state',
  'map'
]

const resultArray = [
  ['cook'],
  [
    'save',

    'vase',
    'aves'
  ],
  [
    'taste',
    'state'
  ],
  ['map']
]

defaultArray.splice()

const logic = () => {
  let array = [];

  for (let i = 0; i < defaultArray.length; i++) {
    let iArray = [];
    for (let s = 0; s < defaultArray[i].length; s++) {
      iArray.push(defaultArray[i][s]);
    }
    array.push(iArray);
  }

  console.log(array);

  // let name = "rama";
  // // console.log(name)

  // // let a = []

  // for (let i = 0; i < name.length; i++) {
  //   for (let d = 0; d < name.length; d++) {
  //     if (name[i + 1] < name[i]) {
  //       let temp = name[d];
  //       name[d] = name[d + 1];
  //       name[d + 1] = temp;
  //     }
  //   }
  // }
  // console.log(name);

  // console.log(a)
}

logic()