import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor() { }

  @Input()
  habilidades: any

  ngOnInit(): void {
  }

}
