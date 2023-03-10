import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { subtrairDatas } from 'src/app/shared/utils/utilitarias';


@Injectable({
    providedIn: 'root'
})
export class InMemoryDataMock implements InMemoryDbService {

    createDb() {

        // lembrando que o mês no Date, vai de 0 a 11
        const experiencias = [
            {
                empresa: "Millenium",
                imagem: "./assets/images/millenium.png",
                cargo: "Desenvolvedor FullStack",
                dataInicio: new Date(2021, 8),
                dataFim: null,
                atividades: ["Desenvolvimento de características evolutivas do sistema;", "Migração de sistemas;",
                    "Tomada de decisões e soluções em conjunto ao analista de negócio;",
                    "Correções de bugs e análise de impacto;",
                    "Sustentação de sistemas legados."],
                tecnologias: ["Java 8, 11 e 17;", "PrimeFaces;", "Angular 2+;", "Spring Boot;", "JBOSS;", "Oracle."],
                clientes: ["POUPEX - Associação de Poupança e Empréstimo."]
            },
            {
                empresa: 'A.Telecom Teleinformática',
                imagem: './assets/images/ATelecom.png',
                cargo: 'Estagiário',
                dataInicio: new Date(2021, 7),
                dataFim: new Date(2021, 8),
                atividades: ["Desenvolvimento com Java"],
                tecnologias: ["Java."],
                clientes: null
            },
            {
                empresa: 'Banco do Brasil',
                imagem: './assets/images/bancoBrasil.jpg',
                cargo: 'Estagiário',
                dataInicio: new Date(2018, 9),
                dataFim: new Date(2020, 9),
                atividades: ["Suporte técnico", "Desenvolvimento com Java para sistemas internos"],
                tecnologias: ["Java;", "PrimeFaces."],
                clientes: null
            }, {
                empresa: 'Banco Central do Brasil',
                imagem: './assets/images/bancoCentral.png',
                cargo: 'Estagiário',
                dataInicio: new Date(2018, 8),
                dataFim: new Date(2018, 9),
                atividades: ["Desenvolvimento Front-End"],
                tecnologias: ["HTML;", "CSS;", "Bootstrap;", " JS;", "Sharepoint."],
                clientes: null
            }
        ]

        const sobre =
        {
            nome: "João Marcelo de Jesus Macedo",
            ensino: "Ensino Superior Completo",
            tempoExperiencia: subtrairDatas(new Date(2018, 9)),
            subTitulo: "Graduado em Sistemas de Informação. Apaixonado por programação, principalmente Java, Spring Boot e Angular 2+"
        }

        const habilidades = [
            {
                nome: "Java",
                imagem: "./assets/images/java.png",
            },
            {
                nome: "Spring Boot",
                imagem: "./assets/images/spring.png",
            },
            {
                nome: "Angular 2+",
                imagem: "./assets/images/angular.png",
            },
            {
                nome: "API Rest",
                imagem: "./assets/images/apirest.png",
            },
            {
                nome: "Bootstrap",
                imagem: "./assets/images/bootstrap.png",
            },
            {
                nome: "HTML",
                imagem: "./assets/images/html.png",
            },
            {
                nome: "GitHub",
                imagem: "./assets/images/github.png",
            }
        ]

        const educacao = [
            {
                sigla: "UPIS",
                nome: "União Pioneira de Integração Social",
                imagem: "./assets/images/upis.png",
                dataInicio: new Date(2018, 1),
                dataFim: new Date(2021, 11),
                curso: "Bacharelado em Sistema de Informação"
            }
        ]

        const contatos = [
            {
                link: "mailto:joaomarcelo588@gmail.com",
                span: "joaomarcelo588@gmail.com",
                text: "E-mail",
                icon: "fi fi-rr-envelope icon"
            },
            {
                link: "https://linkedin.com/in/jmarcelo98",
                span: "linkedin.com/in/jmarcelo98",
                text: "LinkedIn",
                icon: "fi fi-brands-linkedin icon"
            },
            {
                link: "tel:+5561994322941",
                span: "(61) 99432-2941",
                text: "Telefone",
                subText: "WhatsApp",
                icon: "fi fi-brands-whatsapp icon"
            },

        ]

        return { experiencias, contatos, sobre, habilidades, educacao }
    }
}
