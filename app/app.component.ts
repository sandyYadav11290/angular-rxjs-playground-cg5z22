import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/do";
import "rxjs/add/operator/take";
import "rxjs/add/operator/share";
import "rxjs/add/operator/shareReplay";
import { AppDataService } from "./app-data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private _appDataService: AppDataService) {}
  name = "Angular 5";

  myData1$ = this._appDataService.myData1;
  myData2$ = this._appDataService.myData2;

  myEvent$ = this._appDataService.myEvent;

  private init$: Observable<any>;

  public ngOnInit() {}
}
