const button = ()=>{
    const nav = document.querySelector('.link2');
    const burger  = document.querySelector('.burger');

    const roadmapMenu  = document.getElementById("roadmapMenu");
    roadmapMenu.addEventListener('click',()=>{
        if(window.innerWidth < 921){
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        }
    })

    const teamMenu  = document.getElementById("teamMenu");
    teamMenu.addEventListener('click',()=>{
        if(window.innerWidth < 921){
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        }
    })
}

button();