import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Http, Headers, Response } from "@angular/http";
import * as  base64 from "base-64";
import * as utf8 from "utf8";
import { SessionService } from "../session/session.services"

@Injectable()
export class MyHttpPostService {
    //private serverUrl = "https://web-clara-p1.azurewebsites.net/";
    private serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
    //private serverUrl = "http://localhost:2393/";

    constructor(private http: Http, private session: SessionService) { }

    postNoAuth(data: Object, path) {
        console.log("LLAMA A LA API " + path);
        let options = this.createRequestOptionsNoAuth();
        return this.http.post((encodeURI(this.serverUrl + path)),  data , { headers: options })
            .map(res => res);
    }

    postData(data: Object, path) {
        console.log("LLAMA A LA API " + path);
        let options = this.createRequestOptions();
        return this.http.post((encodeURI(this.serverUrl + path)),  data , { headers: options })
            .map(res => res);
    }

    private createRequestOptions() {
        let headers = new Headers();
        headers.set("Authorization", "Bearer " + this.session.getToken());
        headers.set("Content-Type", "application/json");
        return headers;
    }

    private createRequestOptionsNoAuth() {
        let headers = new Headers();
        headers.set("Content-Type", "application/json");
        return headers;
    }
}