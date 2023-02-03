import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/shared/services/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }

  contatos: any;

  ngOnInit(): void {
    this.getContatos();
  }

  getContatos() {
    this.contatoService.getContatos().subscribe(res => {
      this.contatos = res;  
    }, err => {
      console.log(err);
    })
  }

}
