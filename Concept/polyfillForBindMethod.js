/*
Own implementation of bind method 
*/
let name = {
    firstname : "Navnit",
    lastname : "kumar"

}

let printName = function(hometown,state){
    console.log(this.firstname + " " + this.lastname + " , " + hometown + " , "+ state);
}
let printMyName = printName.bind(name,"Dehradun");
printMyName("Uttarakhand");

/*
 we have to create a ownbuilt bind function 
 named as mybind which have all property of bind.

*/
/*
    step 1: every function  have access to bind() so 
    we have to  make mybind() function  such that all function can
    access it 
    so we can do this by using prototype i.e putting the
    function in prototype
    like ex

    Function.ptototype.mybind = function(){

    }
    let printMyName2 = printName.mybind(name);
    printMyName2();

    step 2: bind() when invoked it returns a function that can be 
    later invoked.
    to make this functionality in mybind().

    i.e
    Function.ptototype.mybind = function(){
        return function(){

        }
    }
    let printMyName2 = printName.mybind(name);
    printMyName2();

    step 3: if we call printMyName2() then our prinName mehtod
            should be executed
            something like 
            printName(); to get this function we can use this keyword
            saving this in variable a, here this is pointing to printname
            so to call the printName  we can write this.call()

    Function.ptototype.mybind = function(){
        let obj = this
        return function(){
            obj.call();
        }
    }
    let printMyName2 = printName.mybind(name);
    printMyName2();

    step 4: we have to pass arguments in mybind because bind() 
            accepts argument too.

            this can be used by extracting (...args) this args is an 
            array of argument we have to slice and take out our argument 
            like args[0]

         Function.ptototype.mybind = function(...args){
        let obj = this
        return function(){
            obj.call(args[0]);
        }
    }
    let printMyName2 = printName.mybind(name);
    printMyName2();

    step 5 : bind() accept arguments first one is function and 
            the other is argument to pass 
            like if we want to write in our original bind()
            something like
            let printName = function(hometown){
                console.log(this.firstname + " " + this.lastname + " " + hometown);
                }
            let printMyName = printName.bind(name,"Dehradun");
            printMyName();

            but in our own built function we cant pass argumment because
            we havnt made this to accept argument.
            so to this we can slice th arguments and then we can pass 
            but array is not supported in call to pass it as 2nd parameter
            we can use apply.
            to extract we can use this 
            params = args.slice(1); and pass it in obj.apply(args[0],params)

            final code 

        Function.ptototype.mybind = function(...args){
        let obj = this
        params = args.slice(1);
            return function(){
            obj.call(args[0],params);
            }
        }
        let printMyName2 = printName.mybind(name, "Dehradun");
        printMyName2();

        step 6: printMyName2() can pass  multiple arguments also but
                our ownbuilt function  mybind just should do same too . we cant simply pass another
                argument in apply because it already have prams . so to overcome this
                we have to concate the two params and passe it as array
                this can be done like this [...params,...args2]

        Function.ptototype.mybind = function(...args){
        let obj = this
        params = args.slice(1);
            return function(...args2){
            obj.apply(args[0],[...params,....args2]);
            }
        }
        let printMyName2 = printName.mybind(name, "Dehradun");
        printMyName2("Uttarakhand");

*/
Function.prototype.mybind = function(...args){
    let obj = this
    params = args.slice(1);
        return function(...args2){
        obj.apply(args[0],[...params,...args2]);
        }
    }
    let printMyName2 = printName.mybind(name, "Dehradun");
    printMyName2("Uttarakhand");


