import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaCitas: any[] = []

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
