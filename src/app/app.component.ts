import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  numero1: number = 0;
  numero2: number = 0;
  operador: string = '+';
  resultado: number | string = 0;

  historial: string[] = [];

  operar(): void {

    let resultadoOperacion: number;

    switch (this.operador) {

      case '+':
        resultadoOperacion = this.numero1 + this.numero2;
        break;

      case '-':
        resultadoOperacion = this.numero1 - this.numero2;
        break;

      case '*':
        resultadoOperacion = this.numero1 * this.numero2;
        break;

      case '/':
        if (this.numero2 === 0) {
          this.resultado = 'No se puede dividir por cero';
          return;
        }

        resultadoOperacion = this.numero1 / this.numero2;
        break;

      default:
        resultadoOperacion = 0;
    }

    this.resultado = resultadoOperacion;

    this.historial.unshift(
      `${this.numero1} ${this.operador} ${this.numero2} = ${resultadoOperacion}`
    );
  }
}