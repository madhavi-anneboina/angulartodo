import { Component } from '@angular/core';
import { ChatWindowComponent } from '../chat-window/chat-window.component';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
})
export class MessageInputComponent {
  messageText: string = '';

  constructor(private chatWindow: ChatWindowComponent) {}

  // sendMessage() {
  //   this.chatWindow.receiveMessage(this.messageText);
  //   this.messageText = '';
  // }
}
