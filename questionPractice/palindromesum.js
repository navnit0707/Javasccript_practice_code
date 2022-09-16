var randomString = "434256";
var reverseRandom = randomString.split('').join();
const temp = randomString.split('').reverse().join();
const temp2 = temp.length
var numb = temp2/2;
    while(numb--){
        for(var i = 0; i< (temp2)/2;i++){
            var arr = parseInt(temp[i]) + parseInt(reverseRandom[i]);
        }
        
    }
    if(((temp2)/2)=== 0){
        arr.push(parseInt(randomString[(temp2)/2]));
    }

    console.log(arr);