import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Thread } from './thread';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  currentThread = this.socket.fromEvent<Thread>('thread');
  threads = this.socket.fromEvent<string[]>('threads');

  constructor(private socket: Socket,
              private http: HttpClient  
    ) { }

  addMessage(messagetoadd: Message){
    let messageRoute = '/api/message/addMessage'
    return this.http.post(messageRoute, messagetoadd);
  }

  getThread(id: string) {
    this.socket.emit('getThread', id);
  }

  newThread() {

    this.socket.emit('addThread', { id: this.threadId(), thread: '' });
  }

  editThread(thread: Thread) {
    this.socket.emit('editThread', thread);
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
