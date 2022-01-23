import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { TodoPageComponent } from './todo/todo-page/todo-page.component';
import { TodoModule } from './todo/todo.module';

const route: Routes = [
  {
    path: 'todo',
    component: TodoPageComponent,
  },
  {
    path: '**',
    redirectTo: 'todo',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TodoModule,
    RouterModule.forRoot(route),
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
