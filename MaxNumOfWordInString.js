var sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
// var arr = [];
// const maxLength = sentences.forEach((value)=>{
//     value.split(" ").reduce((accum,numb)=>{
//         arr.push(numb);
//     },0);
    
// });
// var temp = 0;
// var len = arr.forEach((i)=>{
//     if(i.length>temp){
//         temp = i.length;
//     }
// })
// console.log(temp);
// var temp = 0;
// for(var i =0;i<sentences.length;i++){
//     if(sentences[i].split(" ").length>temp){
//         temp = sentences[i].split(" ").length
//     }
// }
// console.log(temp);
var temp1 = 0;
var temp = sentences.forEach((sente)=>{
    if(sente.split(" ").length>temp1){
               temp1 = sente.split(" ").length;
       }
});

console.log(temp1);