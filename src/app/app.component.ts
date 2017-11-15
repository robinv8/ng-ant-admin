import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private renderer: Renderer2) {
    window.onload = () => {
      const ele = document.querySelector('.loader');
      this.renderer.addClass(ele, 'hidden');
    };
  }
}
