import { Component, OnInit } from '@angular/core';
import { EducacaoService } from 'src/app/shared/services/educacao.service';

@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.component.html',
  styleUrls: ['./educacao.component.css']
})
export class EducacaoComponent implements OnInit {

  constructor(private educacaoService: EducacaoService) { }

  educacoes: any;

  ngOnInit(): void {
    this.getEducacoes()
  }

  getEducacoes() {
    this.educacaoService.getEducacoes().subscribe(res => {
      this.educacoes = res;
    }, err => {
      console.log(err);
    })
  }

}
