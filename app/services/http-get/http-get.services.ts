// >> http-get-service
import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import * as  base64 from "base-64";
import * as utf8 from "utf8";
import { SessionService } from "../session/session.services"

@Injectable()
export class MyHttpGetService {
    //private serverUrl = "https://web-clara-p1.azurewebsites.net/";
    private serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";

    constructor(private http: Http, private session: SessionService) { }

    getData(path) {
        let headers = this.createRequestHeader();
        return this.http.get((encodeURI(this.serverUrl + path)), { headers: headers })
            .map(res => res);
    }

    getLogin(data: any, path) {
        let options = this.createRequestOptionsLogin(data);
        return this.http.get((encodeURI(this.serverUrl + path)), { headers: options })
            .map(res => res);
    }

    getDataAuthorization(path) {
        let headers = this.createRequestHeaderAuthorization();
        return this.http.get((encodeURI(this.serverUrl + path)), { headers: headers })
            .map(res =>  res);
    }

    private createRequestHeaderAuthorization() {
        let headers = new Headers();
        // set headers here e.g.
        headers.set("Authorization", "Bearer " + this.session.getToken());
        headers.set("Content-Type", "application/json");

        return headers;
    }

    private createRequestHeader() {
        let headers = new Headers();
        // set headers here e.g.
        headers.set("Content-Type", "application/json");

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