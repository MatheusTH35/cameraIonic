import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: 'home', icon: 'home' },
  ];
  public appNativo = [
    { title: 'camera', url: 'camera', icon: 'camera' },
    { title: 'flash', url: 'flash', icon: 'flash' },
  ];
  constructor() {}
}
