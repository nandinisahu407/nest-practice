import { Controller, Get, Param, Post } from "@nestjs/common";

@Controller("hello")
export class HelloController{

    @Get("/greeting")
    addHello():string{
        return "Hello World From Nandini";
    }

   
    @Get("/factorial/:num")
    findFactorial(@Param() p):string{

        const result=this.factorial(p.num);
        return `Factorial of ${p.num} is: ${result}`;
    }

    @Get("/fibonnaci/:num")
    findFibonaaci(@Param() p):string{

        const result= this.fibonacciSeq(p.num);
        return `Fibonnaci sequence is: ${result}`;
    }
    


    //fibonaaci function
    private fibonacciSeq(n:number):number[]{
        const result:number[]=[0,1]

        for(let i=2;i<n;i++){
            result.push(result[i-1]+result[i-2]);
        }

        return result;
    }

    //factorial function
    private factorial(n:number):number{
        if(n==0 || n==1){
            return 1;
        }
        else{
            return n* this.factorial(n-1);
        }
    }

}