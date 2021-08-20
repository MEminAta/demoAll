import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  numberGroups: number[][] = [];
  ids: string[] = [];

  constructor() {
    this.numberGroups = this.parser(this.numbers, 3);
    this.ids = this.idGenerator(this.numbers.length, 'dragDropTable');
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  parser(array: any[], split: number): any[][] {
    let groupedArray: number[][] = [];
    let index = -1
    for (let i = 0; i < array.length; i++) {
      if (i % split == 0) {
        index += 1;
        groupedArray[index] = [];
      }
      groupedArray[index].push(array[i]);
    }
    return groupedArray;
  }

  idGenerator(amount: number, body: string) {
    let ids: string[] = [];
    for (let i = 0; i < amount; i++) {
      ids.push(body + i);
    }
    return ids;
  }
}
