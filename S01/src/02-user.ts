// Задание 2. Карточка пользователя (15 минут)
//
// 1. Реализуйте describeUser.
// 2. Отсутствующий возраст не должен превращаться в "undefined лет".
// 3. Контакт различайте оператором in, а не проверкой на undefined.
// 4. Пустой массив хобби обработайте отдельной фразой.
//
// Без any, as и !.

export type Contact = { email: string } | { phone: string };

export type User = {
    name: string;
    age?: number;
    hobbies: string[];
    contact: Contact;
};

export function describeUser(user: User): string {
    let res: string = `Имя: ${user.name}\n`;
    if (user.age !== undefined)
        res += `Возраст: ${user.age} лет\n`;

    if (user.hobbies.length > 0)
        res += `Хобби: ${user.hobbies.join(", ")}\n`;
    else
        res += `Хобби: нет\n`;

    if ("email" in user.contact)
        res += `Электропочта: ${user.contact.email}\n`;
    else
        res += `Телефон: ${user.contact.phone}\n`;

    return res;
}
