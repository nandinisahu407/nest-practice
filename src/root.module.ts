import { Module } from '@nestjs/common';
import { HelloController } from './app.controller';
import { FibonacciService } from './fibonacci.service';
import { FactorialService } from './factorial.service';


@Module({
  imports: [],
  controllers: [HelloController],
  providers: [FactorialService,FibonacciService],
})
export class RootModule {
  constructor(){
    console.log("hello from root module")
  }

}
