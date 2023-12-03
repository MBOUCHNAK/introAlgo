function sumDistinctElementInTwoArrays(arr1, arr2) {
  let totalSum = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      totalSum = totalSum + arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      totalSum = totalSum + arr2[i];
    }
  }
  console.log(totalSum);
}

let array1 = [3, 1, 7, 9];
let array2 = [2, 4, 1, 9, 3];

sumDistinctElementInTwoArrays(array1, array2);

let vector1 = [3, -6];
let vector2 = [-4, -2];

function dotProduct(v1, v2) {
  let scalar = v1[0] * v2[0] + v1[1] * v2[1];

  if (scalar == 0) {
    console.log("our two verctors are orthogonals");
  } else {
    console.log("our two verctors are not orthogonals");
  }
}
dotProduct(vector1, vector2);
