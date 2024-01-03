import {Component} from "@angular/core";

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
})
export class HomePageComponent {
  disabled: boolean = false;
  sectionTitle: string = 'Favorite Platforms';
  constructor() {
    setTimeout(() => {
      this.disabled = true;
    },2000)
  }

  onCreatePlataform(){
    alert('plataforma Criada')
  }

  onUpdateSectionTitle(event: Event){
    this.sectionTitle = (<HTMLInputElement>event.target).value;
  }
}
