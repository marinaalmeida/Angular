import { Component, OnInit } from '@angular/core';
import { projetoservice } from './projeto.service';
import { projeto } from './projetp';

@Component({
    selector: 'app-projeto-lista',
    templateUrl: './projeto-lista.component.html',
    styleUrls: ['./projeto-lista.component.scss'],
    preserveWhitespaces: true
})
export class ProjetoListaComponent implements OnInit {

    projetos: projeto[];

    constructor(private service: projetoservice) { }

    ngOnInit() {
        this.service.list()
        .subscribe(dados => this.projetos = dados);
    }

}