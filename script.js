const jstab = document.querySelectorAll('.js-tabmenu li');
const jscont = document.querySelectorAll('.js-tabcontent section');

function activeTab(index){
    jscont.forEach((el)=>{ el.classList.remove('ativo') })
    jscont[index].classList.add('ativo');
}

jstab.forEach((el, index) => {
    el.addEventListener('click', () => {
        activeTab(index);
    });
});

