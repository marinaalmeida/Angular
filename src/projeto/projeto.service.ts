import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { projeto } from './projetp';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn : 'root'
})
export class projetoservice {

    private readonly API = 'http://localhost:3000/projetos'

    constructor(private http: HttpClient) {}

    list() {
        return this.http.get<projeto[]>(this.API)
        .pipe(
            tap(console.log)
        );
    }
}