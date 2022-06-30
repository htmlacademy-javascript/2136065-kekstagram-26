const numberDescriptions = 25;
function getRandomNumber(min, max) {
  if (max > min && min >= 0){
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
let ident = 0;
const getId = function(){
  ident = ident+1;
  return ident;
};
let ident2 = 0;
const getId2 = function(){
  ident2 = ident2+1;
  return ident2;
};
const descriptions =[
  'Фото котика',
  'Фото песика',
  'Фото цтветка',
  'Прикольное фото',
  'Просто фото',
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];
const createCommets = () => ({
  id: getId2(),
  avatar: `img/avatar-${getRandomNumber(1,6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});
const createFotoDescription = () => ({
  id: getId(),
  url: `photos${ident}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomNumber(5,25),
  comments: Array.from({length: getRandomNumber(1,5)}, createCommets),
});
const fotoDescription = Array.from({length: numberDescriptions}, createFotoDescription);
const fotoDescription2 = function(){
  return fotoDescription;
};
fotoDescription2();

