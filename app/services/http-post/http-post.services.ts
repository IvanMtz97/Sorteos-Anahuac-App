import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Http, Headers, Response } from "@angular/http";
import * as  base64 from "base-64";
import * as utf8 from "utf8";

@Injectable()
export class MyHttpPostService {
    private serverUrl = "http://web-clara-p1.azurewebsites.net/";

    constructor(private http: Http) { }

    postData(data: any, path) {
        let options = this.createRequestOptions();
        return this.http.post((this.serverUrl + path), { data }, { headers: options })
            .map(res => res);
    }

    private createRequestOptions() {
        let headers = new Headers();
        headers.set("Content-Type", "application/json");
        return headers;
    }
}