var isDate = function (input) {
  //   write your code here
	if (input instanceof Date) {
    return true;
  }

  // Check if the input is a string and can be parsed into a valid date
  if (typeof input === 'string') {
    const dateObject = new Date(input);
    return !isNaN(dateObject.getTime());
  }

  // Check if the input is a number (timestamp) and can be converted to a valid date
  if (typeof input === 'number') {
    const dateObject = new Date(input);
    return !isNaN(dateObject.getTime());
  }

  // If none of the above conditions are met, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
