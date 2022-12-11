function initTabNav() {
  const jstab = document.querySelectorAll('.js-tabmenu li');
  const jscont = document.querySelectorAll('.js-tabcontent section');

  function activeTab(index) {
    jscont.forEach((el) => { el.classList.remove('ativo') })
    jscont[index].classList.add('ativo');
  }

  if (jscont.length && jstab.length) {
    jstab.forEach((el, index) => {
      el.addEventListener('click', () => {
          activeTab(index);
      });
    });
  }
}

initTabNav();

function initFaq() {
  const faqLq = document.querySelectorAll('.js-accordion dt');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo')
  }

  if (faqLq.length) {

    faqLq[0].classList.add('ativo');
    faqLq[0].nextElementSibling.classList.add('ativo');

    faqLq.forEach((el, index) => {
        el.addEventListener('click', activeAccordion);
    })
  }
}

initFaq();

function initScrollSuave() {
  const linkInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  linkInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}

initScrollSuave();

function initScrollSec(){

  const sections = document.querySelectorAll('.js-scroll');
  const winMet = window.innerHeight * 0.6;

  if(sections.length){
    function animaScroll(){
      sections.forEach((section) => {
  
      const sectionTop = section.getBoundingClientRect().top - winMet;
  
      if(sectionTop < 0){
        section.classList.add('ativo');
      } else {
        section.classList.remove('ativo');
      }
      })
    }
  
    window.addEventListener('scroll', animaScroll);
    animaScroll();
  }
}

initScrollSec();