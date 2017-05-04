import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textclipper'
})
export class TextclipperPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
