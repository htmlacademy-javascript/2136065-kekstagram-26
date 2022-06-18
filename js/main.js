function getRandomNumber(min, max) {
  if (max > min && min > 0){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else{
    return'Некорректный диапазон';
  }
}
getRandomNumber (5, 16);

function getStringLength (string, limit){
  const lengthString = string.length;
  return(limit >= lengthString);
}
getStringLength('тест', 5);
