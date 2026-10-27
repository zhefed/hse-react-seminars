export const messages = [
  {
    id: "m1",
    userId: "u1",
    author: "Vader",
    text: "Оби-Ван не сказал, что случилось с твоим отцом?",
    createdAt: "1980-05-21T12:00:00Z"
  },
  {
    id: "m2",
    userId: "u2",
    author: "Luke",
    text: "Он многое сказал! Ты убил моего отца!",
    createdAt: "1980-05-21T12:02:00Z"
  },
  {
    id: "m3",
    userId: "u1",
    author: "Vader",
    text: "Нет. Я твой отец!",
    createdAt: "1980-05-21T12:04:00Z"
  },
  {
    id: "m4",
    userId: "u2",
    author: "Luke",
    text: "Нет, это неправда! Это невозможно!",
    createdAt: "1980-05-21T12:06:00Z"
  },
  {
    id: "m5",
    userId: "u1",
    author: "Vader",
    text: "Прислушайся к своему сердцу и ты поймёшь, что это правда",
    createdAt: "1980-05-21T12:08:00Z"
  },
  {
    id: "m6",
    userId: "u2",
    author: "Luke",
    text: "Нет, неееееет!!!",
    createdAt: "1980-05-21T12:10:00Z"
  },
  {
    id: "m7",
    userId: "u1",
    author: "Vader",
    text: "Люк, ты можешь уничтожить Императора. Он предвидел это. Таково твое предназначение. Будь со мной, и мы станем править галактикой, как отец и сын... Идем со мной. Это единственный путь.",
    createdAt: "1980-05-21T12:12:00Z"
  },
  {
    id: "m8",
    userId: "u2",
    author: "Luke",
    text: "Мастер, мне нужна ваша помощь. Я вернулся, чтобы завершить обучение.",
    createdAt: "1983-05-25T12:00:00Z"
  },
  {
    id: "m9",
    userId: "u3",
    author: "Yoda",
    text: "Обучение не нужно тебе. Дал уже все я, что нужно тебе.",
    createdAt: "1983-05-25T12:02:00Z"
  },
  {
    id: "m10",
    userId: "u2",
    author: "Luke",
    text: "Значит, я джедай.",
    createdAt: "1983-05-25T12:04:00Z"
  },
  {
    id: "m11",
    userId: "u3",
    author: "Yoda",
    text: "Еще нет. Одно остается: Вейдер. Ты должен... сразиться... с Вейдером. Тогда, только тогда джедаем станешь ты. И сможешь противостоять ему.",
    createdAt: "1983-05-25T12:06:00Z"
  },
  {
    id: "m12",
    userId: "u2",
    author: "Luke",
    text: "Мастер Йода... Дарт Вейдер - мой отец?",
    createdAt: "1983-05-25T12:08:00Z"
  },
  {
    id: "m13",
    userId: "u3",
    author: "Yoda",
    text: "Отец он твой. Сказал тебе он, да?",
    createdAt: "1983-05-25T12:10:00Z"
  },
  {
    id: "m14",
    userId: "u2",
    author: "Luke",
    text: "Да.",
    createdAt: "1983-05-25T12:12:00Z"
  },
  {
    id: "m15",
    userId: "u3",
    author: "Yoda",
    text: "Это неожиданно и прискорбно.",
    createdAt: "1983-05-25T12:14:00Z"
  },
  {
    id: "m16",
    userId: "u2",
    author: "Luke",
    text: "Прискорбно, что я знаю правду?",
    createdAt: "1983-05-25T12:16:00Z"
  },
  {
    id: "m17",
    userId: "u3",
    author: "Yoda",
    text: "Нет. Прискорбно, что встретился с ним ты. Таким неполным обучение твое было.",
    createdAt: "1983-05-25T12:18:00Z"
  },
  {
    id: "m18",
    userId: "u2",
    author: "Luke",
    text: "Простите.",
    createdAt: "1983-05-25T12:20:00Z"
  },
  {
    id: "m19",
    userId: "u3",
    author: "Yoda",
    text: "Помни, мощь джедая проистекает из Силы. Но будь осторожен: гнев, страх, агрессия - это темная сторона. Как только ступишь на темный путь, он всегда будет доминировать в твоей судьбе.",
    createdAt: "1983-05-25T12:22:00Z"
  }
];

export function addMessage({ id, userId, author, text, createdAt }) {
  const message = { id, userId, author, text, createdAt };
  messages.push(message);
  return message;
}
