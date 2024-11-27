import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-correu',
  templateUrl: './correu.component.html',
  standalone: true,
  styleUrl: './correu.component.css'
})
export class CorreuComponent implements OnInit{

  titol: string = 'David';


  constructor() {}

  ngOnInit() {}

}
