import { Component, OnInit } from '@angular/core';
import { Additive } from '../../../../shared/providers/additive/additive';
import { GenericHttpService } from '../../../../shared/service/http/generic-http.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  public searchValue = '';
  public additif: Observable<Additive>;
  data$: any;
  heroes: Additive[];

  constructor(private http: GenericHttpService, private route: ActivatedRoute, private addService: Additive) {
    this.route.params.subscribe( params => this.data$ = params.id);
  }

  ngOnInit() {
  }

  search(): void {
    console.log('SEARCH: ', this.searchValue);
    if (this.searchValue.length <= 0) {
      // TODO: display form validation error
      return;
    }
    // faire requête http vers service...
    this.addService.load().subscribe();
  }

}
