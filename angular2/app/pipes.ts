import {Pipe, PipeTransform} from '@angular/core';
import {Comedian} from './models';
@Pipe({
  name: 'fullNameFilter'
})
export class FullNameFilter {
  transform(value:Array<Comedian>, searchName) {
    let name = searchName.toLowerCase();
    return value.filter(c => {
      if(name){
        return c.fullName.toLowerCase().includes(name);
      }
      return true;
    });
  }
}