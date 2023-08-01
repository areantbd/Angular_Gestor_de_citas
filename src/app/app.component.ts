import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaCitas: any[] = [
    // {nombre: "Test", fecha: "19/04/2022", hora: "18:05", sintomas: "test"},
    // {nombre: "Test2", fecha: "19/04/2022", hora: "18:05", sintomas: "test"},
    // {nombre: "Test3", fecha: "19/04/2022", hora: "18:05", sintomas: "test"},
    // {nombre: "Test4", fecha: "19/04/2022", hora: "18:05", sintomas: "test"}
  ]

  @Input()  

  anadirCita(cita: any) {
    this.listaCitas.push(cita)
  }

  eliminarCita(index: number) {
    this.listaCitas.splice(index, 1)
  }
}
