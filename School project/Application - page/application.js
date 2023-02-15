const menuOpen = () =>{
    const menuIcon = document.querySelector('.menuIcon');
    const nav = document.querySelector('.menu');
    const menuOptions = document.querySelectorAll('.menu li');

    menuIcon.addEventListener('click', ()=>{
        nav.classList.toggle('menuAct');

        menuOptions.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `menuOptions 0.5s ease forwards ${index / 7 + 0.9}s`;
            }
        });
        menuIcon.classList.toggle('toggle')
    });

}
menuOpen();