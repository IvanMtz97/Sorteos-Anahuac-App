import { Injectable } from "@angular/core";
import { MyHttpGetService } from "./http-get/http-get.services";
import { MyHttpPutService } from "./http-put/http-put.services";
import { SessionService } from "./session/session.services";
import * as platformModule from "tns-core-modules/platform";

@Injectable()
export class UtilsService {
    constructor(private GET: MyHttpGetService, private session: SessionService, private PUT: MyHttpPutService){

    }

    ActualizarTalonarios(){
        var Correo = this.session.getCorreoColaborador();
        this.GET.getDataAuthorization("api/Colaborador/GetCorreo/"+Correo+"/").subscribe(res => {
            console.log("TALONARIOS ACTUALIZADOS");
            this.session.setInformation(JSON.stringify(res.json()));
        }, error => {
            console.log("ERROR AL ACTUALIZAR TALONARIOS");
            console.log(error);
        });
    }

    ActualizarTalonariosToken(){
        //var Correo = this.session.getCorreoColaborador();
        this.PUT.putData({}, "api/Colaborador/" + platformModule.device.uuid).subscribe(res => {
            console.log("ACTUALIZAR TAL CON TOKEN");
            console.dir(res.json());
            this.session.setInformation(JSON.stringify(res.json()));
            this.session.setToken(res.json().token);
        }, error => {
            console.log("ERROR AL ACTUALIZAR TAL CON TOKEN");
            console.log(error);
        })
    }
}