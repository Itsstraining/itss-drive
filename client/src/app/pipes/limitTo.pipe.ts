import { PipeTransform, Pipe  } from '@angular/core';
 @Pipe({
   name: 'limitToPipe'
 })
 export class StringLimitPipe implements PipeTransform {
   transform(value: string, limit: number) : string {
     let trail = '...';
     return value.length > limit ? value.substring(0, limit) + trail : value;
   }
   standalone: true
 }
 