import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
girls: string[];
parts: string[];
  constructor() { 
 this.girls = ['hoe1','hoe2','hoe4'];
 this.parts = ["vagina","Anus"];
  }

  ngOnInit() {
  }

}
