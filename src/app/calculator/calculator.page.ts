import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  contador:number=0;
  operaciones:string = '';
  mostrar:Number=0;
  error:string=''

  constructor() { }

  ngOnInit() {
  }

  add(number:number){  
    this.operaciones += number;
  }

  addOperadores(operador:any){
    this.operaciones += operador;
  }

  calcular(){
    const operador = ['+', '-', '*', '/'];
    for(let i = 0; i < this.operaciones.length; i++){
      const op = this.operaciones[i];
      let inicio = 0;
      
      if(operador.includes(op)){
        if(this.operaciones[i+1].includes(op)){
          this.mostrar = 0;
          return false;
        }else{
        const longitud = this.operaciones.length; //longitud completa
        const lognitudI = i; //longitud antes del operador
        const longitudDs= longitud - i - 1; //longitud despues del operador

        const nmAntesOperador = this.operaciones.substring(0, lognitudI);
        const nmDespOperador = this.operaciones.substring(i + 1, longitud);

        const num1 = parseInt(nmAntesOperador);
        const num2 = parseInt(nmDespOperador);
        console.log(num1);
        console.log(num2);

        if(op == '+'){
          const suma = num1 + num2;
          this.mostrar = suma;
        }  
        if(op == '-'){
          const resta = num1 - num2;
          this.mostrar = resta;
        } 
        if(op == '*'){
          const multi = num1 * num2;
          this.mostrar = multi;
        } 
        if(op == '/'){
          const div = num1 / num2;
          this.mostrar = div;
        } 
           
      }
    }
    }
    return true;
  }

  borrar(){
    this.operaciones = '';
    this.mostrar = 0;
  }

  borrarUno(){
    const posicion = this.operaciones.length -1;
    let ope = this.operaciones;
    ope = ope.slice(0,posicion) + ope.slice(posicion+1);
    this.operaciones = ope;
    console.log(this.operaciones);
    
  }

}
