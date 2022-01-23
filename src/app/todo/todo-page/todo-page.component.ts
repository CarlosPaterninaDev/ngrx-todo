import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

interface todo {
  id: number;
  titulo: string;
  description: string;
}

@Component({
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  dones: todo[] = [];
  todos: todo[] = [
    {
      id: 11,
      titulo: 'Lorem',
      description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      consequuntur minus porro atque explicabo nostrum laborum animi?
      Voluptatum eius autem excepturi itaque molestias, commodi quod
      dignissimos. Necessitatibus modi et repellat.`,
    },
    {
      id: 12,
      titulo: 'Lorem',
      description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      consequuntur minus porro atque explicabo nostrum laborum animi?
      Voluptatum eius autem excepturi itaque molestias, commodi quod
      dignissimos. Necessitatibus modi et repellat.`,
    },
    {
      id: 13,
      titulo: 'Lorem',
      description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      consequuntur minus porro atque explicabo nostrum laborum animi?
      Voluptatum eius autem excepturi itaque molestias, commodi quod
      dignissimos. Necessitatibus modi et repellat.`,
    },
    {
      id: 14,
      titulo: 'Lorem',
      description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      consequuntur minus porro atque explicabo nostrum laborum animi?
      Voluptatum eius autem excepturi itaque molestias, commodi quod
      dignissimos. Necessitatibus modi et repellat.`,
    },
    {
      id: 15,
      titulo: 'Lorem',
      description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      consequuntur minus porro atque explicabo nostrum laborum animi?
      Voluptatum eius autem excepturi itaque molestias, commodi quod
      dignissimos. Necessitatibus modi et repellat.`,
    },
    {
      id: 16,
      titulo: 'Lorem',
      description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      consequuntur minus porro atque explicabo nostrum laborum animi?
      Voluptatum eius autem excepturi itaque molestias, commodi quod
      dignissimos. Necessitatibus modi et repellat.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<todo[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
