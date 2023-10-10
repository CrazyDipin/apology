/*const noBtn = document.getElementById('No');
noBtn.addEventListener('mouseover', () => {
    let rand = Math.floor(Math.random() * (-200 - 100) + 1);
    let rand2 = Math.floor(Math.random() * (-100 - 100) + 1);
    noBtn.style.transform = "translate("+rand+"px,"+rand2+"px)";
});*/
const noBtn = document.getElementById('No');

noBtn.addEventListener('mouseover', () => {
    let rand = Math.floor(Math.random() * (-200 - 100) + 1);
    let rand2 = Math.floor(Math.random() * (-100 - 100) + 1);
    noBtn.style.transform = "translate("+rand+"px,"+rand2+"px)";
});

noBtn.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * (-200 - 100) + 1);
    let rand2 = Math.floor(Math.random() * (-100 - 100) + 1);
    noBtn.style.transform = "translate("+rand+"px,"+rand2+"px)";
});