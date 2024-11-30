import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CorreuComponent} from './components/correu/correu.component';
import {LlistaCorreusComponent} from './components/llista-correus/llista-correus.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CorreuComponent, LlistaCorreusComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ExercicisAngularComponentsDavidGelmaDAM1';
  contadorLletres = this.title.length;
  augmentarcontador() {
    this.contadorLletres++;
  }
}
