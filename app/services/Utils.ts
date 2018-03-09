import { Injectable } from "@angular/core";
import { MyHttpGetService } from "./http-get/http-get.services";
import { SessionService } from "./session/session.services";

@Injectable()
export class UtilsService {
    constructor(private GET: MyHttpGetService, private session: SessionService){

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
}