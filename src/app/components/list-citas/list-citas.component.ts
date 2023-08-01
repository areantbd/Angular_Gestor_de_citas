import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {
  @Input() listadoCitas: any
  @Output() borrarCita = new EventEmitter<number>()
  

  eliminarCita(index: number):void {
    this.borrarCita.emit(index)
  }
}
