const first_name = document.querySelector('#first_name');
const button_name = document.querySelectorAll('#section_zone button');



first_name.addEventListener('keyup', () => {
    
    const search_word = first_name.value;    
    button_name.forEach((element) =>
    {
        const st_box_name = element.dataset.name;

        if(search_word.charAt(0) === st_box_name.charAt(0))
        {
            element.classlist.remove('hide');
        }
        else{
            element.classlist.add('hide');
        }

    });
});