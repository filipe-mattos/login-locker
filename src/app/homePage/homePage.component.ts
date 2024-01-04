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
