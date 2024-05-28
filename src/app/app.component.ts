import { HostListener, Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() inputValue: string;


  parentInputValue: string = 'Initial Value';

  updateValue() {
    this.parentInputValue = 'Updated Value';
  }




}
