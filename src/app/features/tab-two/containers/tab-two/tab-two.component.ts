import { Component, OnInit } from '@angular/core';
import { GenericHttpService } from '../../../../shared/service/http/generic-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Additive } from '../../../../shared/providers/additive/additive';
import { switchMap } from 'rxjs/operators';
import { getColor, getTXT, ITools } from '../../../../shared/utils/level-tools/level-tools';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.css']
})
export class TabTwoComponent implements OnInit {

  public posts$: Observable<any[]>;
  private _tools: ITools = {getColor, getTXT};

  constructor(
    private _router: Router,
    private _additive: Additive,
  ) { }

  ngOnInit() {
    this._loadAllAdditive();
  }

  goPost(data): void {
    this._router.navigate(['detail/' + data.id]);
  }

  private _loadAllAdditive(): void {
    this.posts$ =  this._additive.load().pipe(
      switchMap((data: any) => {
        data.map(item => item.getColor = this._tools.getColor(item.level));
        data.map(item => item.getTXT = this._tools.getTXT(item.level));
        return of(data);
      })
    );
  }

}
