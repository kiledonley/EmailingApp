import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThreadService } from 'src/app/thread.service';
import { Subscription } from 'rxjs';
import { Thread } from 'src/app/thread';
import { startWith } from 'rxjs/operators';
import * as io from 'socket.io-client'
import { UserService } from '../user.service';
import { Message } from 'src/app/message';
import { Router } from '@angular/router';

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
  messageThread: string = "0";
  
  constructor(private threadService: ThreadService,
              private userService: UserService,
              private router: Router
              ) { }

  sendMessage(){
  let messagetosend: Message = {
    threadID: this.messageThread,
    body: this.message,
    SenderID: this.userService.activeUserID
  }
  console.log(messagetosend.SenderID)

    this.threadService.addMessage(messagetosend).subscribe(val=> {
      console.log(val)
      })
    }

    // this.socket.emit('chat message', this.message);
  
  ngOnInit() {
    // this.socket.on('chat message', msg=>{
    //   this.messages.push(msg);
    // })

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