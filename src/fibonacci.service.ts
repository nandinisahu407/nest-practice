import { Injectable } from "@nestjs/common";

@Injectable()
export class FibonacciService{

    findFibonaaci(num: number ):string{

        const result= this.fibonacciSeq(num);
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
}