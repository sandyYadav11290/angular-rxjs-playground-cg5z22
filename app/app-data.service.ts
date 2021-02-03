import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AppDataService {
  myData1 = new BehaviorSubject([1, 2, 3]);
  myData2 = new BehaviorSubject([10, 11, 12]);

  myEvent = new BehaviorSubject(false).pipe(data => {
    
  });
}
