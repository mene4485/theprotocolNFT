const roadMap = () => {
    const boxes = document.querySelectorAll('.box');
    const rects  = document.querySelectorAll('.fragment-container');
    const headers = document.querySelectorAll('.header');
    const originalContent = document.querySelectorAll('.content');
    const newContent = document.querySelectorAll('.newContent');
    const opacities = document.querySelectorAll('.normalOpacity');


    boxes.forEach((i,index) => {
        i.addEventListener('mouseover',() => {
            rects[index].classList.add('fragment-container-after')
            headers[index].classList.add('header-after');
            originalContent[index].classList.add('content-after');
            originalContent[index].classList.remove('content');
            newContent[index].classList.add('newContent-after');
            newContent[index].classList.remove('newContent');
            let aux = 0
            if(window.innerWidth > 921) {
                aux = 9;
            }
            for (let j = 0; j < opacities.length; j++) {
                if(j-aux != index) {
                    opacities[j].classList.add('minorOpacity');
                    opacities[j].classList.remove('normalOpacity');
                } 
            }
        });
        i.addEventListener('mouseleave',() => {
                rects[index].classList.remove('fragment-container-after');
                headers[index].classList.remove('header-after');
                originalContent[index].classList.remove('content-after');
                originalContent[index].classList.add('content');
                newContent[index].classList.remove('newContent-after');
                newContent[index].classList.add('newContent');
                for (let j = 0; j < opacities.length; j++) {
                    if(j != index) {
                        opacities[j].classList.remove('minorOpacity');
                        opacities[j].classList.add('normalOpacity');
                    } 
                }
        });
    });

   

    


    

}

roadMap();