// const chooseColor = document.querySelectorAll(".choose-color__btn");
// const contentItem = document.querySelectorAll(".content-item");

// chooseColor.forEach(function(element){
//     element.addEventListener('click', open)
// });

// function open(event){
//     const target = event.currentTarget;
//     const button = target.dataset.button;
//     const contentActive = document.querySelectorAll(`.${button}`);

//     chooseColor.forEach((item)=>{
//         item.classList.remove('choose-color__btn--active')
//     })

//     target.classList.add('choose-color__btn--active');

//     contentItem.forEach((item)=>{
//         item.classList.remove('content-item__active')
//     })
//     contentActive.forEach((item)=>{
//         item.classList.add('content-item__active')
//     })
// }

const chooseColor = document.querySelectorAll(".choose-color__btn");
const contentItem = document.querySelectorAll(".content-item");

chooseColor.forEach((element) => {
  element.addEventListener("click", open);
});

function open(event) {
    const target = event.currentTarget;
    const btn = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${btn}`);

    chooseColor.forEach((item)=>{
        item.classList.remove('choose-color__btn--active')
    })

    target.classList.add('choose-color__btn--active')

    contentItem.forEach(item =>{
        item.classList.remove('content-item__active')
    })

    contentActive.forEach((item)=>{
        item.classList.add('content-item__active')
    })
}
