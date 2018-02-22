import { Injectable } from "@angular/core";
import { getBoolean, setBoolean, getNumber, setNumber, getString, setString, hasKey, remove, clear } from "application-settings";

@Injectable()
export class SessionService {   

    setLoggedIn(status){
        setBoolean("loggedIn", status);
    }

    loggedIn(){
        return getBoolean("loggedIn");
    }

    setInformation(Data){
        if(Data.length > 0){
            var data = JSON.stringify(Data);
            setString("Information", data);
        }else{
            throw("Debes especificar un parametro no vacio");
        }
    }

    getInformation(){
        var data = JSON.parse(getString("Information"));
        console.log("INFORMACION", data.length);
        return data;
    }

    setToken(Token){
        console.log("TOKEN", Token);
        setString("Token", Token);
        // if(Token.length < 1){
        //     setString("Token", Token);
        // }else{
        //     throw("Debes ingresar un token válido");
        // }
    }

    getToken(){
        return getString("Token");
    }

    setTalonarios(tieneTalonarios)
    {
        setBoolean("tieneTalonarios", tieneTalonarios);
    }

    getTalonarios()
    {
        return getBoolean("tieneTalonarios");
    }

    setFirstRun(boolean){
        setBoolean("firstrun", boolean);
    }

    getFirstRun(){
        return getBoolean("firstrun", true);
    }
}