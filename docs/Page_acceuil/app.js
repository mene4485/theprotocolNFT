const navSlide = ()=>{
    const burger  = document.querySelector('.burger');
    const nav = document.querySelector('.link2');
    const navLinks = document.querySelectorAll('.link2 a');

    

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        navLinks.forEach((link,index)=>{
            link.style.animation = 'navLinkFade 1s ease forwards 0.5s';
            console.log(index/5);
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();