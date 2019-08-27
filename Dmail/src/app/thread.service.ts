import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Thread } from './thread';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  currentThread = this.socket.fromEvent<Thread>('thread');
  threads = this.socket.fromEvent<string[]>('threads');

  constructor(private socket: Socket) { }

  getThread(id: string) {
    this.socket.emit('getThread', id);
  }

  newThread() {
    console.log("new thread in thread service")
    this.socket.emit('addThread', { id: this.threadId(), thread: '' });
  }

  editThread(thread: Thread) {
    this.socket.emit('editThread', Thread);
  }

  private threadId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;  
  }
}
