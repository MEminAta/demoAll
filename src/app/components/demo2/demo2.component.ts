import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
  @Input() id!: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.id);
  }

}
