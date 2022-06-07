import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: { firstname: string, lastname: string}, locale: 'en' | 'fr'): string {
    return locale === 'fr' ?
      `${value.firstname.toUpperCase()} ${value.lastname}`
      : `${value.lastname} ${value.firstname}`
  }
}
