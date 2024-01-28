/* Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска) */

function addToMusicColletcion(musicCollection, albumTitle, artitName, year) {
    musicCollection.musicLib.push({
        title: albumTitle,
        artist: artitName,
        year: year,
        toString() {
            return `${this.title} ${this.artist} ${this.year} year`
        }
    });
}


const musicCollection = {
    musicLib: [],
    [Symbol.iterator]() {
        let count = 0;
        return {
            next: () => {
                if (count >= this.musicLib.length) {
                    return { done: true };
                } else {
                    return {
                        value: this.musicLib[count++],
                        done: false
                    };
                }
            }
        }
    }
}

addToMusicColletcion(musicCollection, 'UTOPIA', 'Travis Scott', 2023);
addToMusicColletcion(musicCollection, 'WILD E$ST', 'Saluki', 2023);
addToMusicColletcion(musicCollection, 'Blonde', 'Frank Ocean', 2016);


for (const album of musicCollection) {
    console.log(album.toString());
}

/* Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк. */


const chiefSpecialization = new Map()
    .set('Виктор', {
        specialization: 'Пицца',
        dishes: ['Маргарита', 'Пепперони']
    })
    .set('Ольга', {
        specialization: 'Суши',
        dishes: ['Филадельфия"', 'Калифорния']
    })
    .set('Дмитрий', {
        specialization: 'Десерт',
        dishes: ['Чизкейк"', 'Тирамису']
    });

chiefSpecialization.forEach((chiefInfo, chief) => {
    chiefInfo.dishes.forEach((dish) => {
        console.log(`${chiefInfo.specialization} "${dish}" - повар ${chief}`);
    })
});

const orders = new Map()
    .set({ name: 'Алексей' }, ['Пицца "Пепперони"', 'Десерт "Тирамису"'])
    .set({ name: 'Мария' }, ['Суши "Калифрония"', 'Пицца "Маргарита"'])
    .set({ name: 'Ирина' }, ['Десерт "Чизкейк"']);

orders.forEach((order, client) => {
    console.log(`Клиент ${client.name} заказал: ${order.join(', ')}`);
})

