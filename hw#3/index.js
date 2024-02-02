const productName = document.querySelector('#product-name');
const feedback = document.querySelector('#feedback');

const submitBtn = document.querySelector('.submit-btn');
const feedbackPage = document.querySelector('.feedback-page');

submitBtn.addEventListener('click', (e) => {
    try {
        if (productName.value && feedback.value) {
            localStorage.setItem(productName.value, feedback.value);
            productName.value ='';
            feedback.value = '';
            alert('отзыв отправлен!')
        }else {
            throw new Error('Введите название и отзыв о продукте')
        }
    } catch (error) {
        alert(error.message)
    }
});

feedbackPage.addEventListener('click', function (e) {
    window.location.href = 'feedback.html'
});