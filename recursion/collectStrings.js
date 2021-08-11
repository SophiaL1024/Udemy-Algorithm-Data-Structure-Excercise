/*
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.
*/

//Solution1:Helpper method
/* const collectStrings = (obj)=>{
  const result = [];
  const helpper = (obj)=>{
    for (let key in obj) {
      if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
        helpper(obj[key]);
      } else if (typeof(obj[key]) === 'string') {
        result.push(obj[key]);
      }
    }
  };
  helpper(obj);
  return result;
};
 */

//Solution2: Pure recursion

const collectStrings = (obj)=>{
  let result = [];
  for (let key in obj) {
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
            
      result = result.concat(collectStrings(obj[key]));

    } else if (typeof(obj[key]) === 'string') {
      result.push(obj[key]); //base case: return [string] or an empty array
    }
  }
  //if the property value is string, result=[value]
  //if the property value  is not string, result=[]
  //if the property value is object, reslut=[] concatenate the return value of collectString(value)
  return result;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])