import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AppDataService {
  myData1 = new BehaviorSubject([1, 2, 3]);
  myData2 = new BehaviorSubject([10, 11, 12]);

  myEvent = new BehaviorSubject(false);

  constructor() {
    this.myEvent.subscribe(data => {
      if (data === true) {
        this.myData1.next([22, 54, 52]);
      }
    });
  }
}
