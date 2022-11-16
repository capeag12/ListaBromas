import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'banBadLanguaje'
})
export class BanBadLanguajePipe implements PipeTransform {
  
  transform(value: string, listaBan:string[]) : string{
    let cambiado = "CENSURADO"
    
    listaBan.forEach(element => {
      
        value = value.replace(element,cambiado)
      
    });
    
    return value
  }

}
