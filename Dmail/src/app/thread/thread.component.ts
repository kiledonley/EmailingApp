import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThreadService } from 'src/app/thread.service';
import { Subscription } from 'rxjs';
import { Thread } from 'src/app/thread';
import { startWith } from 'rxjs/operators';
import * as io from 'socket.io-client'

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit, OnDestroy {
  // thread: Thread;
  // private _threadSub: Subscription;
  socket: any = io();
  message: string;
  messages: Array<string> = []
  constructor(private threadService: ThreadService) { }

  sendMessage(){
    this.socket.emit('chat message', this.message);
  }
  ngOnInit() {
    this.socket.on('chat message', msg=>{
      this.messages.push(msg);
    })
    // this._threadSub = this.threadService.currentThread.pipe(
    //   startWith({ id: '', thread: 'Select an existing thread or create a new one to get started'})
    // ).subscribe(thread => this.thread = thread);
  }

  ngOnDestroy() {
    // this._threadSub.unsubscribe();
  }

  editThread() {
    // this.threadService.editThread(this.thread);
  }
}