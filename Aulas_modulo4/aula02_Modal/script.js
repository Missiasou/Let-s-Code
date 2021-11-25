
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

btnOpenModal.forEach(btn => console.log(btn.textContent));

btnOpenModal.forEach( btn => btn.addEventListener('click',
function () {
    console.log('Botão clicado!');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}))


const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    // console.log('pressionei uma tecla')

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})