function check_isbn_digit(isbn_digit) {
  isbn_value = isbn_digit.split('')
  isbn_length = isbn_value.length
  console.log('Old ISBN Number is :' + isbn_digit);
  var arr = []
  for (i = 0; i <= isbn_length - 1; i++) {
    if (i % 2 == 0) {
      arr.push(isbn_value[i] * 1)
    } 
    else {
      arr.push(isbn_value[i] * 3)
    }
  };

  var sum = arr.reduce(function (a, b) {
    return a + b
  });

  var mod = sum % 10;
  next_digit = 10 - mod;
  if (next_digit == 0)
  {
    return console.log('New ISBN Number is : ' + isbn_digit.concat(0))
  } 
  else
  {
    return console.log('New ISBN Number is :'  + isbn_digit.concat(next_digit))
  }
};
check_isbn_digit('978929505502');
