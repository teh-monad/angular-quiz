import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { FormsModule }   from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';

import { PowerPipe } from './power.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './open-close/open-close.component';

import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'} 
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeroFormComponent,
    PowerPipe,
    OpenCloseComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})

export class AppModule { }
