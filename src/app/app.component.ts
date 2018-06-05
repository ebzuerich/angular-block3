import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public courses: Course[];

  constructor() {
    this.courses = [
      new Course(1, 'Angular 6 Kurs', '<p>Mit <strong>Angular</strong> können flüssige Web-Applikationen mit bedeutend weniger Code erstellt werden. Durch das View-Model von Angular werden HTML (DOM) und Daten (JavaScript) synchron gehalten. Zuerst werden die Grundlagen erarbeitet, im zweiten Teil wird ein Beispielprojekt umgesetzt. Um die Konzepte von Angular 6 erfolgreich einsetzen zu können, ist ein fundiertes Verständnis von JavaScript erforderlich. Wo nötig, werden diese Kenntnisse aufgefrischt.</p>'),
      new Course(2, 'React Kurs', '<p>Mit <strong>React</strong> und dessen Ökosystem (Redux, Typescript, Webpack, …) ist es ein leichtes moderne, interaktive, client-seitige Webapplikationen zu erstellen. Dabei wird der komponentenbasierte Ansatz durchleuchtet und in Praxisbeispielen näher gebracht. Es werden Konzepte zum Verwalten des Applikationszustands und Werkzeuge für das Routing angewendet.</p>')
    ];
  }
}
