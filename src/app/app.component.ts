import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ies-systems';

  public width: Number = 0;
  public height: Number = 0;

  constructor(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])

  onResize(event:any) {

    this.width = window.innerWidth;
    // console.log(this.width);
    
 
    this.height = window.innerHeight;

  }
}
