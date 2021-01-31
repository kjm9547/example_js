let my_word = document.querySelector('#text_zone');
let chece_num = document.querySelector('#check_num');
my_word.addEventListener('keyup', OutKeyUp);

function OutKeyUp(){
    const num = my_word.value;
    console.log(num);
    chece_num.innerText = num.length;
    console.log(chece_num);
}