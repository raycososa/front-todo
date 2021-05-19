import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit  } from '@angular/core';
import { ApitodoService } from './apitodo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';
  todoList: any = [];
  todoListCompleted: any = [];
  constructor(public apiTodoService: ApitodoService) {}
  textTodo: string="";

  ngOnInit(){
    this.read();
  }

  read(){
    this.apiTodoService.read().subscribe(data =>{
      console.log("aqui");
      this.todoList = [];
      this.todoListCompleted = [];
      for (let index = 0; index < data.data.length; index++) {
        const element = data.data[index];
        if(element.status == 0){
          this.todoList.push(element);
        }else if(element.status == 1){
          this.todoListCompleted.push(element);
        }
        
      }
    });
  }

  create(textTodo:string){
    console.log("create ",textTodo);
    var dateTime = this.getDateTime();
    var params = {
      "name": textTodo,
      "datetime": dateTime,
      "status": 0
    }
    this.apiTodoService.add(params).subscribe(data =>{
      this.read();
    });
  }

  /**
   * Actualiza una tarea
   */
  update(){
    console.log("update");
  }
  
  /**
   * Elimina una tarea
   * @param id 
   */
  delete(id:any){
    this.apiTodoService.delete(id).subscribe(data =>{
      this.read();
    });
  }

  /**
   * Marca como completado una tarea
   * @param id 
   */
  completar(id:any){
    console.log("completar ", id);
    var dateTime = this.getDateTime();
    var params = {
      "datetime": dateTime,
      "status": 1
    }
    this.apiTodoService.update(id, params).subscribe(data =>{
      this.read();
    });
  }

  /**
   * Obtiene la hora actual
   */
  getDateTime(){
    return new Date().toISOString();
  }
}
