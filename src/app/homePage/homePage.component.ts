import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
})
export class HomePageComponent {
  disabled: boolean = false;
  sectionTitle: string = 'Favorite Platforms';
  //O decorator Output habilita que o componente envie dados para fora no elemento pai
  @Output() platformCreated = new EventEmitter<
    {username: string, password: string, platformName: string}>
  newUsername: string = '';
  newPassword: string = '';
  newPlatform: string = '';
  constructor() {
    setTimeout(() => {
      this.disabled = true;
    },2000)
  }

  //Utilizado para hocks no ciclo de vida dos componentes
  //On init e chamando quando o componennte e  inicializado
  ngOnInit(){

  }

  //On change e chhamanndo sempre que uma propiedade input e alterada
  ngOnChanges(){

  }

  //Do check e  chamado quando qualquer alteracao no componente e feita
  //Ou  seja  sempre que o componennte e  renderizado ou utilizado
  ngDoCheck(){}

  //E chamado depois que o conteudo  do componnente e  projetado na view
  ngAfterContenntInit(){

  }

  //E chamado toda vez que o conteudo do componente e  verificado
  ngAfterContentChecked(){}

  //E chamado apos o as view e chieldView forem iniciadas
  ngAfterViewInit(){}

  //E chamado no momento em que a view e verificada
  ngAfterViewCheck(){}

  //E   chamado  quando o componente  e "destruido"
  ngOnDestroy(){}

  onCreatePlataform(){
    this.platformCreated.emit(
      {
        username: this.newUsername,
        password: this.newPassword,
        platformName: this.newPlatform
      }
    );
    alert('plataforma Criada')
  }

  onUpdateSectionTitle(event: Event){
    this.sectionTitle = (<HTMLInputElement>event.target).value;
  }
}
