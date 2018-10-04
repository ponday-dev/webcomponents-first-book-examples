import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  handleClick(event: MouseEvent) {
    console.log((event.target as any).value);
  }

}
