const envelope = document.querySelector('.envelope-wrapper');
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const happy = document.getElementById('happy-dog');
const sad = document.getElementById('sad-dog');
const dis = document.getElementById('new-display');
const goBackHappy = document.getElementById('go-back-happy');
const goBackSad = document.getElementById('go-back-sad');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

yesBtn.addEventListener('click', () => {
    dis.style.display ='none'
    happy.style.display = 'block'
});

noBtn.addEventListener('click', () => {
    dis.style.display ='none'
    sad.style.display = 'block'
});

goBackHappy.addEventListener('click', () => {
       happy.style.display = 'none'
       dis.style.display ='initial'
})

goBackSad.addEventListener('click', () => {
       sad.style.display = 'none'
       dis.style.display ='initial'
})