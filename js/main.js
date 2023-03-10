const PICTURE_COUNT = 25;
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;
const AVATAR_COUNT = 6;
const MESSAGE_COUNT = 15;
const MESSAGE_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Агапия',
  'Азиза',
  'Бонифаций',
  'Ватслав',
  'Жорж',
  'Маргарита',
  'Теодор',
  'Юрий',
  'Яромир'
];

const DESCRIPTION = [
  'Мечтай. Работай. Копи. Путешествуй. Повтори.',
  'Плюс одна страна в копилку.',
  'Моя личная версия «Орла и решки».',
  'Временно в режиме off-line.',
  'Новый день ― новый город.',
  'Я люблю свою работу. Особенно тогда, когда наступает отпуск.',
  'Маскируюсь под местных. Как думаете, получилось?',
  'Навстречу новым приключениям.',
  'Море, солнце, я ― идеально.',
  'Где надо, там и где. Угадайте место?',
  'Чтобы достичь новых берегов, мы должны плыть, а не дрейфовать.',
  'Некоторые дни начинаются лучше остальных.'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(MESSAGE_LINES)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
  comments: Array.from(
    {length: getRandomInteger(0, MESSAGE_COUNT)},
    createComment
  ),
});

const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();
