import { Injectable } from "@angular/core";
import { getBoolean, setBoolean, getNumber, setNumber, getString, setString, hasKey, remove, clear } from "application-settings";

@Injectable()
export class SessionService { 
    
    setURL(url)
    {
        setString("url", url);
    }

    getURL()
    {
        return getString("url");
    }

    setClave(Clave: string){
        setString("ClaveLogin", Clave);
    }

    getClave(){
        return getString("ClaveLogin");
    }

    setCorreo(Correo: string){
        setString("CorreoLogin", Correo);
    }

    getCorreo(){
        return getString("CorreoLogin");
    }

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
        return data;
    }

    setSorteoActivo(Data){
        if(Data.length > 0){
            var data = JSON.stringify(Data);
            setString("SorteoActivo", data);
        }else{
            throw("Debes especificar un parametro no vacio");
        }
    }

    getSorteoActivo(){
        var data = JSON.parse(getString("SorteoActivo"));        
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

    setTokenDevice(TokenDevice){
        console.log("TokenDevice", TokenDevice);
        setString("TokenDevice", TokenDevice);
        // if(TokenDevice.length < 1){
        //     setString("TokenDevice", TokenDevice);
        // }else{
        //     throw("Debes ingresar un TokenDevice válido");
        // }
    }

    getTokenDevice(){
        return getString("TokenDevice");
    }

    setIdColaborador(IdColaborador){
        setString("IdColaborador", IdColaborador);
    }

    getIdColaborador(){
        return getString("IdColaborador");
    }

    setCorreoColaborador(CorreoColaborador){
        setString("CorreoColaborador", CorreoColaborador);
    }

    getCorreoColaborador(){
        return getString("CorreoColaborador");
    }

    setPassColaborador(PassColaborador){
        setString("PassColaborador", PassColaborador);
    }

    getPassColaborador(){
        return getString("PassColaborador");
    }

    setGanadores(Ganadores){
        setString("Ganadores", Ganadores);
    }

    getGanadores(){
        return getString("Ganadores");
    }

    getMiCuenta()
    {
        return getString("MiCuenta");
    }
    
    setMiCuenta(MiCuenta)
    {
        setString("MiCuenta", MiCuenta);
    }

   

    setPoliticas(Politicas){
        setString("Politicas", Politicas);
    }

    getPoliticas(){
        return getString("Politicas");
    }

    setReglamento(Reglamento){
        setString("Reglamento", Reglamento);
    }

    getReglamento(){
        return getString("Reglamento");
    }

    setAceptacionTalonarios(AceptacionTalonarios){
        setString("AceptacionTalonarios", AceptacionTalonarios);
    }

    getAceptacionTalonarios(){
        return getString("AceptacionTalonarios");
    }

    setConoceSorteo(ConoceSorteo){
        setString("ConoceSorteo", ConoceSorteo);
    }

    getConoceSorteo(){
        return getString("ConoceSorteo");
    }
    
    setCondiciones(Condiciones){
        setString("Condiciones", Condiciones);
    }

    getCondiciones(){
        return getString("Condiciones");
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

    setImagenPublicidad(Publicidad)
    {
        setString("Publicidad", Publicidad);
    }

    getImagenPublicidad()
    {
        return getString("Publicidad");
    }
}