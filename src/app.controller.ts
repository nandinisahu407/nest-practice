import { Controller, Get, Param, Post } from "@nestjs/common";
import {FactorialService} from "./factorial.service";
import{FibonacciService} from './fibonacci.service';

@Controller("hello")
export class HelloController{

    constructor(
        private readonly factService: FactorialService,
        private fibService:FibonacciService
        ){

    }

    @Get("/greeting")
    addHello():string{
        return "Hello World From Nandini";
    }

   
    @Get("/factorial/:num")
    findFactorial(@Param('num') num: number ):string{
        return this.factService.findFactorial(num);
    }

    @Get("/fibonnaci/:num")
    findFibonaaci(@Param('num') num: number):string{
        return this.fibService.findFibonaaci(num);        
    }

}