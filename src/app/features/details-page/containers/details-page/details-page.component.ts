import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericHttpService } from '../../../../shared/service/http/generic-http.service';
import { Additive } from '../../../../shared/providers/additive/additive';
import { switchMap } from 'rxjs/operators';
import { getColor, getTXT, ITools } from '../../../../shared/utils/level-tools/level-tools';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  public title$: Observable<any[]>;
  public desc$: Observable<any[]>;
  private _tools: ITools = {getColor, getTXT};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: GenericHttpService,
    private _additive: Additive
  ) { }

  ngOnInit() {
    const { enumber } = this._route.snapshot.params;
    if (!enumber) {
      // todo: display error
      return;
    }
    console.log(':: enumber', enumber);
    this._getAdditiveTitle(enumber);
    this._getWikiDetail(enumber);
  }

  back() {
    this._router.navigate(['']);
  }

  private _getAdditiveTitle(enumber: string): void {
    this.title$ =  this._additive.load().pipe(
      switchMap((data: any) => {
        data.map(item => item.getColor = this._tools.getColor(item.level));
        data.map(item => item.getTXT = this._tools.getTXT(item.level));
        return of(data);
      }),
      switchMap((data: any[]) =>
        of(data.find(additif => additif.id === enumber)))
    );
  }

  private _getWikiDetail(enumber: string): void {
    this.desc$ = this._http.get('wikipedia', `/e${enumber}`);
  }

}
