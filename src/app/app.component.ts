import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaCitas: any[] = [
    {nombre: "Iván", fecha: "19/04/2022", hora: "18:05", sintomas: "maula"},
    {nombre: "Iván2", fecha: "19/04/2022", hora: "18:05", sintomas: "maula"},
    {nombre: "Iván3", fecha: "19/04/2022", hora: "18:05", sintomas: "maula"},
    {nombre: "Iván4", fecha: "19/04/2022", hora: "18:05", sintomas: "maula"}
  ]

  @Input()  

  anadirCita(cita: any) {
    console.log("he entrado")
    console.log(cita)
    this.listaCitas.push(cita)
    console.log(this.listaCitas)
  }

  eliminarCita(index: number) {
    this.listaCitas.splice(index, 1)
    console.log(this.listaCitas)
  }
}
