import { Broma } from "./broma";

export class GestionBromas {
    private listaBromas:Broma[];

    public constructor() {
        this.listaBromas = [];
        this.listaBromas.push(new Broma("Pregunta1","Respuesta1"))
        this.listaBromas.push(new Broma("Pregunta2","Respuesta2"))
        this.listaBromas.push(new Broma("Pregunta3","Respuesta3"))
        this.listaBromas.push(new Broma("Pregunta4","Respuesta4"))
    }

    
    public getListaBromas() : Broma[] {
        return this.listaBromas;
    }
    
    
    public añadirBroma(broma:Broma) {
        this.listaBromas.push(broma)
    }

    public crearBroma(nuevaBroma:Broma) {
        this.listaBromas.push(nuevaBroma)
    }

    public devolverIndice(indice:number):Broma {
        return this.listaBromas[indice]
    }

    public eliminarBroma(indice:number){
        this.listaBromas.splice(indice,1)
    }

    

    
    

   

}
