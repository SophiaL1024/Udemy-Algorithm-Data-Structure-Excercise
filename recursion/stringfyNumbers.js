/*
Write a function called stringfyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this! You can not mutate the original object.
*/

const stringifyNumbers = (obj)=>{
  const newObj = {};
  for (let key in obj) {
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof(obj[key]) === 'number') {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};


console.log(stringifyNumbers(obj));


/* {
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
 */