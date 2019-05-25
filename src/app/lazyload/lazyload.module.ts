import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadComponent } from './lazyload.component';
import { FirstchildComponent } from './firstchild/firstchild.component';

const myroutes: Routes = [
    {
        path: '', component: LazyloadComponent, children: [
            { path: 'firstchild', component: FirstchildComponent }
        ]
    }
];
@NgModule({
    declarations: [
        LazyloadComponent,
        FirstchildComponent
    ],
    imports: [
        RouterModule.forChild(myroutes)
    ]
})

export class LazyLoadModule {

}
