import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-plataform-card',
  templateUrl: './plataformCard.component.html'
})
export class PlataformCardComponent{

  //O decorator Input habilita que essa propiedade possa receber dados de fora do componente
  //fazendo assim com que seu uso seja  acessado pelo elemento pai
  //E possivel definir um apelido para o Input alterando assim o nome pelo qual
  //e chamado pelo elemenno pai
  @Input('platformData') platform: { username: string, password: string, platformName: string } = {
    username: '',
    password: '',
    platformName: ''
  };

  constructor() {

  }
  ngOnInit(){};

}
