import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  message = "hello how are you doing"
@Output() emitted = new EventEmitter

passtoparent(){
  this.emitted.emit(this.message)
}

}
