import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent {
  nombre = ""
  fecha = ""
  hora = ""
  sintomas = ""

  formularioIncorrecto = false

  @Output() nuevaCita = new EventEmitter<any>()

  crearCita() {
    if (this.nombre === "" || this.fecha === "" || this.hora === "" || this.sintomas === "") {
      this.formularioIncorrecto = true
      return
    }
    this.formularioIncorrecto = false

    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    
    this.nuevaCita.emit(CITA)
    this.limpiarFormulario()
  }

  limpiarFormulario() {
    this.nombre = ""
    this.fecha = ""
    this.hora = ""
    this.sintomas = ""
  }
    
}
