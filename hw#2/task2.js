/*   Задание 2
  Вы разрабатываете систему отзывов для вашего веб - сайта.Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
  
  Создайте HTML - структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
  
  Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
  
  При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
  
      
  
  Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения. */
const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const containerEl = document.querySelector('.container');
const template = document.querySelector('#product-template .product');

initialData.forEach(element => {
    let product = template.cloneNode(true);
    product.querySelector('.product__title').innerHTML = element.product;
    product.querySelector('.product__input').id = initialData.indexOf(element);
    product.querySelector('.product__btn').id = initialData.indexOf(element);

    element.reviews.forEach(review => {
        const reviewEl = document.createElement('li');
        reviewEl.classList.add('.product__review');
        reviewEl.innerHTML = review.text;
        product.querySelector('.product__reviews').appendChild(reviewEl);
    });
    containerEl.appendChild(product);
});

function addReview(btnId) {
    const products = document.querySelectorAll('.product');
    const reviewInput = products[btnId].querySelector('.product__input');
    const reviewValue = reviewInput.value;
    try {
        if (reviewValue.length < 10 || reviewValue.length > 500) {
            throw new Error('Длина отзыва должна быть от 10 до 500 символов.');
        }
        const reviewEl = document.createElement('li');
        reviewEl.classList.add('.product__review');
        reviewEl.innerHTML = reviewValue;
        products[btnId].querySelector('.product__reviews').appendChild(reviewEl);
        reviewInput.value = '';
    } catch (error) {
        alert(error.message)
    }
}


const buttons = document.querySelectorAll('.product__btn');
buttons.forEach(button => {
    button.addEventListener('click', () => addReview(button.id));
});