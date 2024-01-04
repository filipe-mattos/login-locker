import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-locker';

  platforms: {
    username: string,
    password: string,
    platformName: string,
  }[] = [];

  onPlatformCreated(plataformData: {username: string, password: string, platformName: string,}){
    this.platforms.push({
      username: plataformData.username,
      password: plataformData.password,
      platformName: plataformData.platformName,
    })
  }

}
