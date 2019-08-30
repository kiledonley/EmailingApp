import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ThreadService } from 'src/app/thread.service';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit, OnDestroy {
  threads: Observable<string[]>;
  currentThread: string;
  private _threadSub: Subscription;

  constructor(private threadService: ThreadService) { }

  ngOnInit() {
    this.threads = this.threadService.threads;
    this._threadSub = this.threadService.currentThread.subscribe(thread => this.currentThread = thread.id);
  }

  ngOnDestroy() {
    this._threadSub.unsubscribe();
  }

  loadThread(id: string) {
    this.threadService.getThread(id);
  }

  newThread() {
    this.threadService.newThread();
  }

}
