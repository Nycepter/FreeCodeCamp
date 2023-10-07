/*
To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

Example

function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
The first checkForProperty function call returns true, while the second returns false.

Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.
*/

const Fighter = {
  Sword: "Big",
  Armor: "Full-Plate",
};

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj(Fighter, "Armor"));

// INITIAL INCORRECT CODE BELOW

const Fighter = {
  Sword: "Big",
  Armor: "Full-Plate",
};

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj.checkProp;
  } else {
    return "Not Found";
  }
}

console.log(checkObj(Fighter, Armor));

// After searhcing many forums without finding an answer, I asked chat GPT who gave a perfect answer that many hours on freecodecamp and stackoverflow forums could not. Chat GPT Response below.

/*
There are a couple of issues with the code you provided:

Inside the checkObj function, you are trying to access a property of the obj using the checkProp variable as a property name. However, you should use square brackets to access the property dynamically because checkProp is a variable. You should change this line:
*/
return obj.checkProp;

// to:
return obj[checkProp];

/*
When you call the checkObj function, you need to pass the property name as a string. In your code, you are trying to pass Armor without enclosing it in quotes, which will result in an error. You should change this line:
*/
checkObj(Fighter, Armor);

// to:
checkObj(Fighter, "Armor");

// Here's the corrected code:

const Fighter = {
  Sword: "Big",
  Armor: "Full-Plate",
};

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj(Fighter, "Armor"));
/*
With these changes, the code should work as expected and return the value of the "Armor" property from the Fighter object.
*/
