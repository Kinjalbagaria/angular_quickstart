import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppGlobals } from '../app.globals';

@Injectable()
export class AuthenticationService {
    api_url = this._global.base_url_admin;
    
    constructor(
        private http: HttpClient,
        private _global: AppGlobals) {}
    
    login(email: string, password: string) {
        return this.http.post<any>(this.api_url+`/user/login`, { email: email, password: password })
            .pipe(map(response => {
                // login successful if there's a jwt token in the response
                if(response.status === true && response.data && response.data.token)
                {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response.data.user));
                    return response;
                }
                else 
                {
                    return response;
                }    
                
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}