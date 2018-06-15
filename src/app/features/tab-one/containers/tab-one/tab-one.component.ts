import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  public searchValue = '';

  constructor(private _router: Router) {}

  ngOnInit() {
  }

  search(): void {
    console.log('SEARCH: ', this.searchValue);
    if (this.searchValue.length <= 0) {
      // TODO: display form validation error
      return;
    }
    // faire requête http vers service...
    this._router.navigate(['/detail/' + this.searchValue]);
  }

}
