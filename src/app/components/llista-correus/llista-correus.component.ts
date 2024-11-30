import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-llista-correus',
  imports: [NgForOf, NgClass, NgIf],
  templateUrl: './llista-correus.component.html',
  standalone: true,
  styleUrl: './llista-correus.component.css'
})
export class LlistaCorreusComponent implements OnInit {
  titol: string = 'Correus amb ngFor'
  titol2: string = "Correus sense ngFor"
  correus =
    [{titol: 'Correu 1',contingut:'Primer correu',correu:'pere@gmail.com',llegit:true},
      {titol:'Correu 2',contingut:'Segon correu',correu:'maria@gmail.com',llegit:false}
    ];
  numero_llegits = 0;
  numero_no_llegits = 0;
  constructor() {
    for (let i = 0; i < this.correus.length; i++) {
      if (this.correus[i].llegit) {
        this.numero_llegits++
      } else {
        this.numero_no_llegits++
      }
    }
  }
  ngOnInit() {}
}
