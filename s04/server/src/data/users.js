export const users = [
  {
    id: "u1",
    nickname: "Vader",
    phone: "+79990000000",
    bio: "aka Anakin",
    password: "123456"
  },
  {
    id: "u2",
    nickname: "Luke",
    phone: "+79990000001",
    bio: "jedi",
    password: "123456"
  },
  {
    id: "u3",
    nickname: "Yoda",
    phone: "+79990000002",
    bio: "master",
    password: "123456"
  }
];

const activeTokens = new Map();

export function findUserByPhone(phone) {
  return users.find((user) => user.phone === phone);
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function issueToken(userId) {
  const token = `token-${userId}`;
  activeTokens.set(token, userId);
  return token;
}

export function getUserIdByToken(token) {
  return activeTokens.get(token);
}
