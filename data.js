const rectangel = document.querySelector('#rectangle');
const size_bt = document.querySelector('#change_max');
const color_bt = document.querySelector('#change_color');
const return_bt = document.querySelector('#return').addEventListener('click',OnClickButton_return);
color_bt.addEventListener('click', OnClickButton);
size_bt.addEventListener('click',OnClickButton_max);

function OnClickButton(){
    const randomHue = Math.trunc(Math.random()*360);
    const randomcolor = `hsl(${randomHue}, 70% ,50%)`;

    rectangle.style.setProperty('--color', randomcolor);
    
}
function OnClickButton_max(){

    const ran_num = Math.trunc(Math.random() * 100);
    const input_size = `${ran_num}%`;

    rectangle.style.setProperty('--max', input_size);

}
function OnClickButton_return(){
    const default_color = `hsl(0, 70%, 50%)`;
    const default_size =`80%`;

    rectangel.style.setProperty('--color', default_color);
    rectangel.style.setProperty('--max', default_size);
    
}
