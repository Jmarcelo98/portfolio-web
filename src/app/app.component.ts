import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {


    constructor() {

    }

    nameTitle = "João Marcelo"

    menuItems = [
        {
            label: 'Experiências',
            icon: 'fi-rr-briefcase',
            visible: true,
            routerLink: '/experiencia'
        },
        {
            label: 'Educação',
            icon: 'fi-rr-graduation-cap',
            visible: true,
            routerLink: '/educacao'
        },
        {
            label: 'Contato',
            icon: 'fi fi-rr-comment-quote',
            visible: true,
            routerLink: '/contato'

        },

    ];



}
