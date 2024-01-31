/* Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку. */

class Library {
    #books = [];

    constructor(books) {
        if (new Set(books).size !== books.length) {
            throw new Error('Список книг содержит дубликаты')
        }
        this.#books = books;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error('Книга с таким названием уже есть в списке')
            }
            this.#books.push(title);
        } catch (err) {
            console.log(err.message);
        }
    }

    removeBook(title) {
        let bookIndex = this.#books.indexOf(title);
        try {
            if (bookIndex !== -1) {
                this.#books.splice(bookIndex, 1);
            } else {
                throw new Error('Книга не найдена')
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

const bookShelf = ['1984', 'Чапаев и Пустота', 'Поймать большую рыбу'];

const lib = new Library(bookShelf);

lib.hasBook('1984');
lib.hasBook('1985');
lib.removeBook('1984');
console.log(lib.allBooks);
console.log(lib.hasBook('Чапаев и Пустота'));
lib.addBook('1984');
console.log(lib.allBooks);

