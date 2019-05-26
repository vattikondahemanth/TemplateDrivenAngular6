import { Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-header',
    template: `
    <a routerLink="/">Home</a>
    <a routerLink="/about">About</a>
    <a routerLink="/contact/manoj">Contact</a>
    <a routerLink="/lazyload">lazyload</a>
  `
})
export class HeaderComponent {
    constructor(private http: HttpClient) {
        this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((dty)=>{
        console.log(dty)
        },()=>{

        })
    }
}