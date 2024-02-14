import { Module } from '@nestjs/common';
import { HelloController } from './app.controller';


@Module({
  imports: [],
  controllers: [HelloController],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log("hello from root module")
  }

}
