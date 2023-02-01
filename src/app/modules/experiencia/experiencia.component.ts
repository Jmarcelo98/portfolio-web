import { Component, OnInit } from '@angular/core';
import { IExperiencia } from 'src/app/shared/interfaces/experiencia';
import { ExperienciaService } from 'src/app/shared/services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private experienciaService: ExperienciaService) { }

  experiencias: Array<IExperiencia>;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  ngOnInit(): void {
    this.getAllExperiencias()
  }

  getAllExperiencias() {
    this.experienciaService.getExperiencias().subscribe(res => {
      this.experiencias = res
    }, err => {
      console.log(err);
    })
  }
}
