import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
