import { Injectable, Param } from "@nestjs/common";

@Injectable()
export class FactorialService{

    findFactorial(num:number):string{

        const result=this.factorial(num);
        return `Factorial of ${num} is: ${result}`;
    }


    private factorial(n:number):number{
        if(n==0 || n==1){
            return 1;
        }
        else{
            return n* this.factorial(n-1);
        }
    }

}