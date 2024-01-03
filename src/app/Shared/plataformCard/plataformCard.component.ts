import {Component} from "@angular/core";

@Component({
  selector: 'app-plataform-card',
  templateUrl: './plataformCard.component.html'
})
export class PlataformCardComponent{

  user: string = 'Filipe';
  password: string = '12345';
  plataformName: string = 'Steam';
}
