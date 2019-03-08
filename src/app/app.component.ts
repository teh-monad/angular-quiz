import {Component, OnInit, HostBinding, Injector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup/popup.service';
import { PopupComponent } from './popup/popup.component';

interface Course {
    description: string;
    courseListIcon:string;
    iconUrl:string;
    longDescription:string;
    url:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [],
//  providers: [UserService],
  template: `
  <b>Angular 2 Component Using Observables!</b>
 
  <h6 style="margin-bottom: 0">VALUES:</h6>
  <div *ngFor="let value of values">- {{ value }}</div>
  
  <h6 style="margin-bottom: 0">ERRORs:</h6>
  <div>Errors: {{anyErrors}}</div>
  
  <h6 style="margin-bottom: 0">FINISHED:</h6>
  <div>Finished: {{ finished }}</div>
  
  <button style="margin-top: 2rem;" (click)="init()">Init</button>
  <ul *ngIf="courses$ | async as courses else noData">
	  <li *ngFor="let course of courses">
		  {{course.description}}
	  </li> 
  </ul>
  <ng-template #noData>No Data Available</ng-template>
  <app-hero-form></app-hero-form>
  <div><h1>Test birthdate is {{ birthday | date | uppercase }}{{2 | power: 5}}</h1></div>
  <app-open-close></app-open-close>
  <input #input value="Message">
  <button (click)="popup.showAsComponent(input.value)">Show as component</button>
  <button (click)="popup.showAsElement(input.value)">Show as element</button>
	`
})

export class AppComponent  { //implements OnInit
  
  courses$: Observable<Course[]>;
  title = 'angular-quiz';
  private data: Observable<Array<number>>;
  private values: Array<number> = [1,2];
  private anyErrors: boolean;
  private finished: boolean;
  birthday = new Date(1990, 12, 12);

  constructor(private http:HttpClient, injector: Injector, public popup: PopupService) {
	const PopupElement = createCustomElement(PopupComponent, {injector});
	customElements.define('popup-element', PopupElement);
  }
  
  init() {
	  this.courses$ = this.http
		  .get<Course[]>("/courses.json")
		  .map(data => _.values(data))
		  .do(console.log);

      this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(); //1?
          }, 1000);
          
          setTimeout(() => {
              observer.next(); //2?
          }, 2000);
          
          setTimeout(() => {
              observer.complete();
          }, 3000);
      });

      let subscription = this.data.subscribe(
          value => this.values.push(), //3?
          error => this.anyErrors = true,
          () => this.finished = true
      );
  }

}
