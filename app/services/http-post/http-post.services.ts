import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Http, Headers, Response } from "@angular/http";
import * as  base64 from "base-64";
import * as utf8 from "utf8";
import { SessionService } from "../session/session.services"

@Injectable()
export class MyHttpPostService {
    private serverUrl = "https://web-clara-p1.azurewebsites.net/";
    //private serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";

    constructor(private http: Http, private session: SessionService) { }

    postData(data: any, path) {
        let options = this.createRequestOptions();
        return this.http.post((encodeURI(this.serverUrl + path)), { data }, { headers: options })
            .map(res => res);
    }

    private createRequestOptions() {
        let headers = new Headers();
        headers.set("Authorization", "Bearer " + this.session.getToken());
        headers.set("Content-Type", "application/json");
        return headers;
    }
}