// >> http-get-service
import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import * as  base64 from "base-64";
import * as utf8 from "utf8";

@Injectable()
export class MyHttpGetService {
    private serverUrl = "http://web-clara-p1.azurewebsites.net/";

    constructor(private http: Http) { }

    getData(path) {
        let headers = this.createRequestHeader();
        return this.http.get((this.serverUrl + path), { headers: headers })
            .map(res => res);
    }

    getLogin(data: any, path) {
        let options = this.createRequestOptionsLogin(data);
        return this.http.get((this.serverUrl + path), { headers: options })
            .map(res => res);
    }

    getResponseInfo(path) {
        let headers = this.createRequestHeader();
        return this.http.get((this.serverUrl + path), { headers: headers })
            .do(res =>  res);
    }

    private createRequestHeader() {
        let headers = new Headers();
        // set headers here e.g.
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");

        return headers;
    }

    private createRequestOptionsLogin(data) {
        var model = data,
                    email = model.email.toLowerCase(),
                    password = model.password;
        var str = email + ":" + password;
        var bytes = utf8.encode(str);
        let headers = new Headers();
        headers.set("Authorization", "Basic " + base64.encode(bytes));
        headers.set("Content-Type", "application/json");
        return headers;
    }
}
// << http-get-service