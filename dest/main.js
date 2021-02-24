console.log('Hello CFD');

//add menu
let addclass = document.querySelector(".navmenu");
let btnmenu = document.querySelector(".btnmenu");
//console.log(btnmenu);
//console.log(addclass);
btnmenu.addEventListener('click', function () {
    addclass.classList.toggle('active');
})

//lang

let listLang = document.querySelectorAll('.lang__select span');

//console.log(listLang);

listLang.forEach((item) => {
    item.addEventListener('click', function () {
        let lang = this.textContent;
        let langCurren = document.querySelector('.lang__curren span').textContent;
        this.innerHTML = langCurren;
        document.querySelector('.lang__curren span').innerHTML = lang;

    })
});
//add background heder

const header = document.querySelector('header');
const slider = document.querySelector('.slider');
const hightSlider = slider.clientHeight;
const hightHeader = header.clientHeight;
//console.log(hightSlider);

function addBg() {
    let scrollY = window.pageYOffset;
    if (scrollY > (hightSlider - hightHeader)) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}
document.addEventListener('scroll', function () {
    //console.log('ok!')
    addBg();
    acctiveToTop();
});

const btnToTop = document.querySelector('.to_top');
btnToTop.addEventListener('click', function () {
    //console.log('ok!')
    toTop();
})
function toTop() {
    //document.body.scrollTop =0;
    //document.documentElement.scrollTop = 0;
    window.scrollTo({
        top: 0
    })
}
function acctiveToTop() {
    let scrollY = window.pageYOffset;
    let add = document.querySelector('.to_top span')
    if (scrollY > (hightSlider - hightHeader)) {
        add.classList.add('active');
    }
    else {
        add.classList.remove('active');
    }
}

//Slider

const listSlider = document.querySelectorAll('.slider__list-item');

let index = 0;
listSlider.forEach(function (item, i) {
    if (item.classList.contains('active')) {
        index = i;
    }
});
//Number
const number = document.querySelector('.paging .number');
//console.log(number.innerHTML);

//dot-active
const listDot = document.querySelectorAll('.paging ul li');
listDot[index].classList.add('active');


//bntNext-Prev
document.querySelector('.control__btn.next').addEventListener('click', function () {

    if (index < listSlider.length - 1) {
        /* let str = (index+1) +1; 
        str = str.toString().padStart(2,0);
        number.innerHTML = str; */


        goTo(index + 1);
    }
    else {
        /* let str = 1; 
        str = str.toString().padStart(2,0);
        number.innerHTML = str; */
        goTo(0);
    }
});
document.querySelector('.control__btn.prev').addEventListener('click', function () {
    if (index > 0) {
        /* listSlider[index].classList.remove('active');
        listSlider[index - 1].classList.add('active');
        index--; */
        /*  let str = index; 
         str = str.toString().padStart(2,0);
         number.innerHTML = str; */
        //number.innerHTML = (index+1) -1; 
        goTo(index - 1);
    }
    else {
        /* listSlider[index].classList.remove('active');
        listSlider[listSlider.length - 1].classList.add('active');
        index = listSlider.length - 1; */
        goTo(listSlider.length - 1);
        /* let str = listSlider.length; 
        str = str.toString().padStart(2,0);
        number.innerHTML = str; */
        //number.innerHTML = listSlider.length;
    }

})
function goTo(locate) {
    listSlider[index].classList.remove('active');
    listSlider[locate].classList.add('active');

    listDot[index].classList.remove('active');
    listDot[locate].classList.add('active');
    index = locate;


    number.innerHTML = (index + 1).toString().padStart(2, 0);
    //dot=indexDot;
}
listDot.forEach(function (li, index) {
    li.addEventListener('click', function () {
        goTo(index);
    })
})

//Menu

const menus = document.querySelectorAll('header .menu li a');
let sections = [];
function removeActiveMenu() {
    menus.forEach(function (item_menu, index_menu) {
        item_menu.classList.remove('active_menu');
    })
}
//console.log(menus);
menus.forEach(function (item, index) {
    let className = item.getAttribute('href').replace('#', '');
    const section = document.querySelector('.' + className);
    sections.push(section);
    item.addEventListener('click', function (e) {
        e.preventDefault();

        window.scrollTo({
            top: section.offsetTop - hightHeader + 1,

        })
        removeActiveMenu();
        item.classList.add('active_menu');
    })
})
window.addEventListener('scroll', function (e) {
    let coord = window.pageYOffset;
    sections.forEach(function (section_menu, index) {
        if (coord > section_menu.offsetTop - hightHeader && coord < section_menu.offsetTop + section_menu.offsetHeight) {
            removeActiveMenu();
            menus[index].classList.add('active_menu');
        }
        else {
            menus[index].classList.remove('active_menu');
        }
    });


});
//video

const video = document.querySelectorAll('.video__fr-item img');
const src_video = document.querySelector('.popup-video .iframe_wrap iframe')

const popup = document.querySelector('.popup-video')
const close_popup = document.querySelector('.popup-video .close')
video.forEach(function (item) {
    item.addEventListener('click', function () {
        popup.style.display = 'flex';
        /* popup.style.opacity= 1;
        
        popup.style.pointer-events */
        let idVideoPopup = item.getAttribute('id-video');
        src_video.setAttribute('src', 'https://www.youtube.com/embed/' + idVideoPopup+'?autoplay=1');
        //console.log(idVideoPopup);


    });

});
close_popup.addEventListener('click', function () {
    /* popup.style.opacity= 0;
       
       popup.style.pointer-events */
    popup.style.display = 'none';
    src_video.setAttribute('src', ' ');
});
document.querySelector('.popup-video').addEventListener('click', function (e) {
    popup.style.display = 'none';
    src_video.setAttribute('src', ' ');
})

// popup img

const img = document.querySelectorAll('.gallery__img img');
const popup_img = document.querySelector('.popup__img');
const popup_img_id = document.querySelector('.popup__img .popup__img__wrap img');
const close_img = document.querySelector('.popup__img .popup__img__close');
const bnt_right = document.querySelector('.popup__img .btn_right');
let arrId_img=[];
img.forEach(function (item) {
    item.addEventListener('click', function () {
        let dataImg= item.getAttribute('data-img');
        console.log(dataImg);
        popup_img.style.display = 'flex';
        popup_img_id.setAttribute('src','img/' + dataImg);
    });
    let id =item.getAttribute('data-img')
    arrId_img.push(id);
    
});
close_img.addEventListener('click', function(){
    popup_img.style.display= 'none';
});
/* document.querySelector('.popup__img').addEventListener('click',function(){
    popup_img.style.display= 'none';
}); */
/* let i=0;
document.querySelector('.popup__img .btn_right').addEventListener('click', function(){
    if(i< arrId_img.length){
        popup_img_id.setAttribute('src','img/' +  arrId_img[i++]);
        console.log(arrId_img[i]);
    }
    else{
        i=0
        popup_img_id.setAttribute('src','img/' +  arrId_img[i++]);
    }
});
let a= arrId_img.length;
document.querySelector('.popup__img .btn_left').addEventListener('click', function(){
    if(a< arrId_img.length-1){
        popup_img_id.setAttribute('src','img/' +  arrId_img[a--]);
        console.log(arrId_img[i]);
    }
    else{
        a= arrId_img.length;
        popup_img_id.setAttribute('src','img/' +  arrId_img[a--]);
    }
}); */



