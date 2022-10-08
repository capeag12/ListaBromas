export class Broma {
    private pregunta:string;
    private respuesta:string;
    
    public constructor(pregunta:string, respuesta:string) {
        this.pregunta=pregunta;
        this.respuesta=respuesta;
    }

    
    public getPregunta() : string {
        return this.pregunta;
    }

    
    public getRespuesta() : string {
        return this.respuesta;
    }
    
    
}
