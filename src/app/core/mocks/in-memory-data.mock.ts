import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataMock implements InMemoryDbService {

    createDb() {

        // lembrando que o mês no Date, vai de 0 a 11
        const experiencias = [
            {
                empresa: "Millenium",
                imagem: "millenium.png",
                cargo: "Desenvolvedor FullStack",
                dataInicio: new Date(2021, 8),
                dataFim: null,
                atividades: ["Desenvolvimento de características evolutivas do sistema", "Migração de sistemas",
                    "Tomada de decisões e soluções em conjunto ao analista de negócio", "Correções de bugs e análise de impacto",
                    "Sustentação de sistemas legados"],
                tecnologias: "Java 8, 11 e 17, PrimeFaces, Angular 2+, Spring Boot, JBOSS e Oracle",
                cliente: "POUPEX",
            }, {
                empresa: 'Banco do Brasil',
                imagem: 'bancoBrasil.jpg',
                cargo: 'Estagiário',
                dataInicio: new Date(2018, 9),
                dataFim: new Date(2020, 9),
                atividades: ["Suporte técnico", "Desenvolvimento com Java para sistemas internos"],
                tecnologias: "Java e PrimeFaces",
                cliente: null
            }, {
                empresa: 'Banco Central do Brasil',
                imagem: 'bancoCentral.png',
                cargo: 'Estagiário',
                dataInicio: new Date(2018, 8),
                dataFim: new Date(2018, 9),
                atividades: ["Desenvolvimento Front-End"],
                tecnologias: "HTML, CSS, Bootstrap, JS e Sharepoint",
                cliente: null
            }
        ]

        const contatos =
        {
            email: "joaomarcelo588@gmail.com",
            telefone: "(61) 99432-2941",
            linkedin: "https://www.linkedin.com/in/jmarcelo98/",
            instagram: "https://www.instagram.com/jmarcelo098/"
        }


        return { experiencias, contatos }
    }
}
