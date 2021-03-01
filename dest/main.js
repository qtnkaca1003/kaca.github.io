console.log('Hello CFD');

//add menu
let addclass = document.querySelector(".navmenu");
let btnmenu = document.querySelector(".btnmenu");
//console.log(btnmenu);
//console.log(addclass);
btnmenu.addEventListener('click', function () {
    addclass.classList.toggle('active');
    btnmenu.classList.toggle('menu_mobile');
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

//const listSlider = document.querySelectorAll('.slider__list-item');

/* let index = 0;
listSlider.forEach(function (item, i) {
    if (item.classList.contains('active')) {
        index = i;
    }
}); */
//Number
/* const number = document.querySelector('.paging .number'); */
//console.log(number.innerHTML);

//dot-active
/* const listDot = document.querySelectorAll('.paging ul li');
listDot[index].classList.add('active'); */


//bntNext-Prev
/* document.querySelector('.control__btn.next').addEventListener('click', function () {

    if (index < listSlider.length - 1) {
         let str = (index+1) +1; 
        str = str.toString().padStart(2,0);
        number.innerHTML = str; */


  /*       goTo(index + 1);
    }
    else {
         let str = 1; 
        str = str.toString().padStart(2,0);
        number.innerHTML = str; 
        goTo(0);
    } */
/* });  */
/* document.querySelector('.control__btn.prev').addEventListener('click', function () {
    if (index > 0) {
         listSlider[index].classList.remove('active');
        listSlider[index - 1].classList.add('active');
        index--; 
          let str = index; 
         str = str.toString().padStart(2,0);
         number.innerHTML = str; 
        number.innerHTML = (index+1) -1; 
        goTo(index - 1);
    }
    else {
        /listSlider[index].classList.remove('active');
        listSlider[listSlider.length - 1].classList.add('active');
        index = listSlider.length - 1; 
        goTo(listSlider.length - 1);
         let str = listSlider.length; 
        str = str.toString().padStart(2,0);
        number.innerHTML = str; 
        number.innerHTML = listSlider.length;
    } 

}) */
/* function goTo(locate) {
    listSlider[index].classList.remove('active');
    listSlider[locate].classList.add('active');

    listDot[index].classList.remove('active');
    listDot[locate].classList.add('active');
    index = locate;


    number.innerHTML = (index + 1).toString().padStart(2, 0);
    //dot=indexDot;
} */
/* listDot.forEach(function (li, index) {
    li.addEventListener('click', function () {
        goTo(index);
    })
}) */

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
//Menu mobile
let sections_mobile = [];
let btnmenu_mobile = document.querySelector(".btnmenu");
const menus_mobile = document.querySelectorAll('.navmenu ul li a');
let addclass_mobile = document.querySelector(".navmenu");
menus_mobile.forEach(function (item, index) {
    let className_mobile = item.getAttribute('href').replace('#', '');
    const section = document.querySelector('.' + className_mobile);
    sections_mobile.push(section);
    item.addEventListener('click', function (e) {
        e.preventDefault();

        window.scrollTo({
            top: section.offsetTop - hightHeader + 1,

        })
       /*  removeActiveMenu();
        item.classList.add('active_menu'); */
        btnmenu_mobile.classList.remove('menu_mobile')
        addclass_mobile.classList.remove('active');
    })
})
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

/* const img = document.querySelectorAll('.gallery__img img');
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
}); */
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



let $carousel = $('.slider .slider__list');
//console.log($carousel);
$carousel.flickity({
    // options
   
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    
    on: {
        ready: function(){
           
            let dotted = $('.flickity-page-dots');
            let paging = $('.slider__control .paging .dotted');
            dotted.appendTo(paging);
        },
        change: function(index) {
            let number = $('.slider__control .paging .number');
            let indexNumber = index +1;
            number.text(indexNumber.toString().padStart(2,0));
            //console.log(number);
        }
    }
    
  });

$('.prev').on('click', function(){
    //alert(1);
    let dotted = $('.flickity-page-dots');
    $carousel.flickity('previous');
    console.log(dotted);
});
$('.next').on('click', function(){
    //alert(1);
    $carousel.flickity('next');
});


/* $('.slide__bottom__img').flickity({
   
    groupCells: 2
}) */

var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            showAnimationDuration : 0,
            hideAnimationDuration : 0
        };
        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if( isNaN(options.index) ) {
            return;
        }
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

$(window).on('load', function(){
  
    initPhotoSwipeFromDOM('.carousel-img');
});

