const feedbackContainer = document.querySelector('.feedback-container');

const btnToIndex = document.querySelector('.btn-index');
console.log(btnToIndex);

btnToIndex.addEventListener('click', () => {
    window.location.href = 'index.html'
})

function getFeedbackTemplate(title, feedback) {
    return (
        `<div class="product-feedback">
        <h3 class="product-feedback__title">${title}</h3>
        <p class="product-feedback__content">${feedback}</p>
    </div>`
    )
}

function render() {
    feedbackContainer.innerHTML = '';
    try {
        if (localStorage.length) {
            for (const key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    feedbackContainer.insertAdjacentHTML('beforeend', getFeedbackTemplate(key, localStorage[key]));
                }
            }
        } else {
            throw new Error('Нет актуальных отзывов :(')
        }
    } catch (error) {
        feedbackContainer.textContent = error.message;
        feedbackContainer.style.color = 'red';
    }
}

render();