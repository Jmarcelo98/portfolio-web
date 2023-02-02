import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-sobre',
  templateUrl: './card-sobre.component.html',
  styleUrls: ['./card-sobre.component.css']
})
export class CardSobreComponent implements OnInit {

  constructor() { }

  @Input()
  sobre: any;

  ngOnInit(): void {
  }

}
