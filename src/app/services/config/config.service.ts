import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  //   public rootUrl: string = 'http://abn.arkaautomaations.com/API/';
  public rootUrl: string = 'https://cors-anywhere.herokuapp.com/http://abn.arkaautomaations.com/API/';
  // headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    private http: HttpClient
  ) { }

  onPasswordToggle(shwPwd): boolean {
    console.log(shwPwd);
    return !shwPwd;
  }

  getData(url): Observable<any> {
    const geturl = `${this.rootUrl}${url}`;
    // console.log(geturl);
    return this.http.get(geturl);
  }


}
