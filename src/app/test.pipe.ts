import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(wish:string,parama1:string,param2:string):any {
    console.log(wish)
    console.log(parama1)
    console.log(param2)
    return "hello";
  }

}
