import { Component, OnInit } from '@angular/core';
import { Additive } from '../../../../shared/providers/additive/additive';
import { GenericHttpService } from '../../../../shared/service/http/generic-http.service';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  public searchValue = '';
  public additif: Observable<Additive[]>;
  posts: any;
  data:any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  search(): void {
    console.log('SEARCH: ', this.searchValue);
    if (this.searchValue.length <= 0) {
      // TODO: display form validation error
      return;
    }
    // faire requête http vers service...
  }

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts').subscribe(
      data => this.posts = data
    )
  }

}
