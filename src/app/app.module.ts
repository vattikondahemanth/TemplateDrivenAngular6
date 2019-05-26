import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ExponentialStrengthPipe } from "./power.pipe";
import { UnlessDirective } from './unlessdirective';
import { TableComponent } from "./tablecomponent/table.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header.component';

const myroutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact/:id?', component: ContactComponent },
  { path: 'lazyload', loadChildren: './lazyload/lazyload.module#LazyLoadModule' },
  { path: '**', component: NotfoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ExponentialStrengthPipe,
    NotfoundComponent,
    TableComponent,
    HeaderComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
