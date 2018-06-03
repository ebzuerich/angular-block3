import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() title: string;

  public isOpen: boolean;
  public headerClasses: {};

  public constructor() {
    this.isOpen = false;
    this.setHeaderClasses();
  }

  public ngOnInit() {
  }

  public onHeaderClick(e: Event) {
    this.isOpen = !this.isOpen;
    this.setHeaderClasses();
  }

  private setHeaderClasses() {
    this.headerClasses = {'opened': this.isOpen};
  }
}
