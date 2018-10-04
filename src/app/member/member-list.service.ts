import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {RootObject} from './json.model';
import 'rxjs/Rx';
// import { do } from 'rxjs/operators';
// import 'rxjs/add/operator/catch ';
// import {kjhihui} from '../../api/fhjt.component';

@Injectable()

export class MemberListService {
    private _url ='./api/member/memberlist.json';
    constructor(private _http:HttpClient) {
        
        
    }
getMemberList():Observable<RootObject[]>{
    return this._http.get<RootObject[]>(this._url)
//    .do(data=>console.log(JSON.stringify(data))) ;
   .do(data=>console.log(JSON.stringify(data)))
    .catch(this.errorHandler)
}
private errorHandler(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
}
}