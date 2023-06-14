
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
})
export class ChatWindowComponent {
  messages: string[] = [];

  receiveMessage(message: string) {
    this.messages.push(message);
  }
}