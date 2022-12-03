import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponant/todos/todos.component';
import { TodoItemComponent } from './Mycomponant/todo-item/todo-item.component';
import { AddtodosComponent } from './Mycomponant/addtodos/addtodos.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Mycomponant/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddtodosComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
