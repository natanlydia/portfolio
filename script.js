/*turn page when click next or prev*/
const pageTurnBtn= document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el,  index) =>{
    el.onclick= () =>{
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(()=> {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(()=> {
                pageTurn.style.zIndex = 20 + index;
            }, 500)

        }

    }
})

//contact me button with click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelectorAll('.btn.contact-me');


ontactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout (() => {
            page.classList.add('trun');


            setTimeout(() => {
                page.style.zIndex = 20 + index;

            })
        }, (index + 1) * 200 + 100)
    }) 

}
//creatr reserve index function 
let totalPages = pages.length;
let pageNumber = 0;
    
function reserveIndex() {
    pageNumber--;
    if (pageNumber < 0){
        pageNumber = totalPages - 1;
    }

}
         
