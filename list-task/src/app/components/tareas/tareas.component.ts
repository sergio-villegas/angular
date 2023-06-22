import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  
  listaTareas: Tarea[] = [];
  nombre = '';
  keyStorage :string = 'todos';

  constructor()
  {

  }

  ngOnInit(): void
  {
    const localStorageItem = localStorage.getItem(this.keyStorage);
    if(!localStorageItem){
      localStorage.setItem(this.keyStorage, JSON.stringify([]));
    }
    else{
      this.listaTareas = JSON.parse(localStorageItem);
    }
  }
  agregarTarea()
  {
    const tarea: Tarea={
      nombre: this.nombre,
      estado: false
    }
    this.listaTareas.push(tarea);
    this.nombre = "";
    localStorage.setItem(this.keyStorage, JSON.stringify(this.listaTareas))

  }
  eliminarTarea(index : number): void
  {
    this.listaTareas.splice(index,1);
    localStorage.setItem(this.keyStorage, JSON.stringify(this.listaTareas))
  }
  actualizarTarea(tarea: Tarea, index: number)
  {
    this.listaTareas[index].estado =! tarea.estado;
    localStorage.setItem(this.keyStorage, JSON.stringify(this.listaTareas))
  }

  addTodo()
  {
    this.listaTareas.push({nombre: this.nombre, estado: false})
    this.nombre = ''
    localStorage.setItem(this.keyStorage, JSON.stringify(this.listaTareas))
  }

  deleteTodo(indice: number): void
  {
    this.listaTareas.splice(indice, 1)
    localStorage.setItem(this.keyStorage, JSON.stringify(this.listaTareas))
  }

  checkTodo(indice: number): void
  {
    this.listaTareas[indice].estado = true;
    localStorage.setItem(this.keyStorage, JSON.stringify(this.listaTareas))
  }
}

