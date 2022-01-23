import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page/todo-page.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [TodoPageComponent],
  imports: [CommonModule, DragDropModule],
})
export class TodoModule {}
