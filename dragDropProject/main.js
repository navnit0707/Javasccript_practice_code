const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBoxes');

imgBox.addEventListener('dragstart', ()=>{
    console.log('DragStart has been triggered');
})

imgBox.addEventListener('dragend', ()=>{
    console.log('DragEnd triggered');
})
