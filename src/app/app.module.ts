import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';

import { PowerPipe } from './power.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './open-close/open-close.component';

import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';
import { ClickMeComponent } from './click-me/click-me.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';

import { Logger } from './logger.service';

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
    PopupComponent,
    ClickMeComponent,
    HeroFormTemplateComponent,
    HeroFormReactiveComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [PopupService, Logger],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})

export class AppModule { }
