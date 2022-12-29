// const formulario = document.querySelector('.form');
// const cardContainer = document.getElementsByClassName('card');


// const validarFormulario = (submit) => {

//     submit.preventDefault();
//     const nombre = document.getElementById('cardholder').value;
//     const numero = document.getElementById('cardNumber').value;
//     const mes = document.getElementById('input__month').value;
//     const anio = document.getElementById('input__year').value;
//     const cvc = document.getElementById('input__cvc').value;

//     cardContainer.innerHTML = `
//     <div class="card">
//           <img id="card__logo" src="./images/card-logo.svg" alt="logo">
//            <p id="card__number">${numero}</p>
//            <div class="card__information">
//             <p id="card__information-name">${nombre}</p>
//             <p><span class="card__date" id="card__month">${mes}</span>/<span class="card__date" id="card__year">${anio}</span></p>
//            </div>
//         </div>
    
//     `
// }
// formulario.addEventListener('submit',cardContainer);

const nameInput = document.querySelector('#cardholder');
const cardName = document.querySelector('#card__information-name');

const cardNumber = document.querySelector('#card__number');
const numberInput = document.querySelector('#cardNumber');

const cardMonth = document.querySelector('#card__month');
const monthInput = document.querySelector('#input__month');

const cardYear = document.querySelector('#card__year');
const yearInput = document.querySelector('#input__year')

const cardCvc = document.querySelector('#card__cvc');
const cvcInput = document.querySelector('#input__cvc');

const submit = document.getElementById('form__submit');
const thanks = document.getElementById('thanks');

const form = document.getElementById('form');

const continueButtom = document.getElementById('form__continue');

const numberError = document.getElementById('error');
const nameError = document.getElementById('errorName');
const monthError = document.getElementById('errorMonth');
const yearError = document.getElementById('errorYear');
const cvcError = document.getElementById('errorCvc');

const input = document.getElementsByClassName('form__input');

nameInput.addEventListener('input', ()=> {
    if(nameInput.value === '') {
        cardName.innerText = 'Jane Appleseed'
    } else {
        cardName.innerText = nameInput.value;
    }
})


numberInput.addEventListener('input', ()=> {
    cardNumber.innerText = numberInput.value;

    let error = /[A-z]/g;
    if(error.test(numberInput.value)) {
        numberError.innerText = 'Wrong format, numbers only';
    } else {
        numberError.innerText = '';
    }
    if(numberInput.value === '') {
        cardNumber.innerText = '0000 0000 0000 0000';
    }
})

monthInput.addEventListener('input', ()=> {
   if(monthInput.value === '') {
    cardMonth.innerText = '00'
   }else {
    cardMonth.innerText = monthInput.value;
   }
})

yearInput.addEventListener('input', ()=> {
    if(yearInput.value === '') {
        cardYear.innerText = '00'
    }else {
        cardYear.innerText = yearInput.value;
    }
})

cvcInput.addEventListener('input',()=> {
    if(cvcInput.value === '') {
        cardCvc.innerText = '000'
    }else {
        cardCvc.innerText = cvcInput.value;
    }
})

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if (nameInput.value === '' ){
        nameError.innerText = 'Can´t be blank';
    } else {
        thanks.classList.remove('hidden');
        form.classList.add('hidden');
    }
    if (numberInput.value === '' ){
        numberError.innerText = 'Can´t be blank';
    } else {
        thanks.classList.remove('hidden');
        form.classList.add('hidden');
    }
    if (monthInput.value === '' ){
        monthError.innerText = 'Can´t be blank';
    } else {
        thanks.classList.remove('hidden');
        form.classList.add('hidden');
    }
    if (yearInput.value === '' ){
        yearError.innerText = 'Can´t be blank';
    } else {
        thanks.classList.remove('hidden');
        form.classList.add('hidden');
    }
    if (cvcInput.value === '' ){
        cvcError.innerText = 'Can´t be blank';
    } else {
        thanks.classList.remove('hidden');
        form.classList.add('hidden');
    }
})

continueButtom.addEventListener('click' , ()=> {
    location.reload();
})

