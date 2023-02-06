import { Component, OnInit } from '@angular/core';
import { HabilidadeService } from 'src/app/shared/services/habilidade.service';
import { SobreService } from 'src/app/shared/services/sobre.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private sobreService: SobreService, private habilidadeService: HabilidadeService) { }

  sobre: any;
  habilidades: any

  ngOnInit(): void {
    this.getSobre()
    this.getHabilidades()
  }

  getSobre() {
    this.sobreService.getSobre().subscribe(res => {
      this.sobre = res
    }, err => {
      console.log(err);

    })
  }

  getHabilidades() {
    this.habilidadeService.getHabilidades().subscribe(res => {
      this.habilidades = res
    }, err => {
      console.log(err);

    })
  }

}
