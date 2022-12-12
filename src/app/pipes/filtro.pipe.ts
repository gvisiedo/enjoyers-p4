import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '')
    return value;
    const songResult = [];
    for (const song of value) {
      if (song.title.toLowerCase().indexOf(arg.toLowerCase()) > -1 || song.performer.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        songResult.push(song);

      }
    }
    return songResult;
  }
}



