import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'spa-btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() genericLabel!: string;
  @Input() genericType!: string;
  @Input() genericColor!: string;
  @Output() genericEvent = new EventEmitter<any>();

  event(){
    this.genericEvent.emit();
  }
}
