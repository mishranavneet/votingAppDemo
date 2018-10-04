import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import {map} from 'rxjs/operators';
  
@Injectable()  
export class CommonService {  
  
  constructor(private http: Http) { }  
  
  saveUser(model){      
    return this.http.post('http://localhost:8080/api/SaveUser/', model).pipe(map((response: Response) =>response.json()))
            
  }  
  
  GetUser(){       
    return this.http.get('http://localhost:8080/api/getUser/').pipe(map((response: Response) => response.json()))
            
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id}).pipe(map((response: Response) =>response.json()))
                  
  }
  
  getTeam(){       
    return this.http.get('http://localhost:8080/api/getTeam/').pipe(map((response: Response) => response.json()))    
  }

  getMember(){       
    return this.http.get('http://localhost:8080/api/getMember/').pipe(map((response: Response) => response.json()))    
  }
  
} 