const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBoxes');

imgBox.addEventListener('dragstart', (e)=>{
    console.log('DragStart has been triggered');
    e.target.className += ' hold'; //in front of hold there is a space for two class name 
   
    // e.target.className = 'hide';

    /* 
        e.target.className = hide runs when we drag the image 
        and because of this whole image disappear 
        so we have to run it when all the things finishes so thats 
        why i am using setTimeout with time 0 ms that means run at the end of the queue
    */

    setTimeout(()=>{
        e.target.className = 'hide';
    },0);
});

imgBox.addEventListener('dragend', (e)=>{
    console.log('DragEnd triggered');
    e.target.className = 'imgBox';
})

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover',(e)=>{
        console.log('Dragover triggered');
        e.preventDefault();
    });

    whiteBox.addEventListener('dragenter',()=>{
        console.log('DragEnter triggered');
    });

    whiteBox.addEventListener('dragleave',()=>{
        console.log('DragLeave triggered');
    });

    whiteBox.addEventListener('drop', (e)=>{
        console.log('Drop triggered');

        e.target.append(imgBox);

    });
}