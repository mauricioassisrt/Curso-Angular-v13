import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  /*
    add uma nova msg
   */
  add(message: string): void {
    this.messages.push(message);
  }

  /*
    Limpa as msgs
   */
  clear(): void {
    this.messages = [];
  }

  /*
  pega as msg
  */
  getMessages(): string[] {
    return this.messages;
  }
}
