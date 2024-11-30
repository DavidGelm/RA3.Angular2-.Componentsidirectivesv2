import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-llista-correus',
  imports: [NgForOf, NgClass],
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
  constructor() {}
  ngOnInit() {}
}
