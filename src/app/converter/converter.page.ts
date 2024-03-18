import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {

  var1:any=''
  moneda:any
  var2:any=''
  moneda2:any
  pais1:any
  pais2:any
  selectValue1:any
  selectValue2:any

  pesoMXM:string='MXM -> Peso mexicano'
  dolarUSD:string='USD -> Dolar estadounidense'
  solPEN:string='PEN -> Sol peruano'

  pesoMXM2:string='MXM -> Peso mexicano'
  dolarUSD2:string='USD -> Dolar estadounidense'
  solPEN2:string='PEN -> Sol peruano'
  constructor() { }

  ngOnInit() {
  }

  onSelectionChange(event: any) {
    const selectedValue = event.detail.value;
    if(selectedValue == 'mxm'){
      this.moneda = 'mxm' 
    }
    if(selectedValue == 'usd'){
      this.moneda = 'usd'
    }
    if(selectedValue == 'sol'){
      this.moneda = 'sol'
    }
  }

  onSelectionChange2(event: any) {  
    const selectedValue2 = event.detail.value;
    if(selectedValue2 == 'mxm'){
      this.moneda2 = 'mxm'
    }
    if(selectedValue2 == 'usd'){
      this.moneda2 = 'usd'
    }
    if(selectedValue2 == 'sol'){
      this.moneda2 = 'sol'
    }
  }

 calc(){
  if(this.selectValue1 == 'mxm' && this.selectValue2 == 'mxm' || this.selectValue1 == 'usd' && this.selectValue2 == 'usd' || this.selectValue1 == 'sol' && this.selectValue2 == 'sol'){
    console.log("No puedes calcular la misma moneda");
    this.selectValue2 = '';
    this.var2 = '';
    this.moneda2 = '';
  }else{
    if(this.selectValue1 == 'mxm' && this.selectValue2 == 'usd'){
      const result = parseFloat(this.var1) * 16.72;
      this.var2 = result + ' usd'; 
    }
    if(this.selectValue1 == 'mxm' && this.selectValue2 == 'sol'){
      const result = parseFloat(this.var1) * 0.22;
      this.var2 = result + ' pen'; 
    }
    if(this.selectValue1 == 'usd' && this.selectValue2 == 'mxm'){
      const result = parseFloat(this.var1) * 0.060;
      this.var2 = result + ' mxm'; 
    }
    if(this.selectValue1 == 'usd' && this.selectValue2 == 'sol'){
      const result = parseFloat(this.var1) * 3.69;
      this.var2 = result + ' pen'; 
    }
    if(this.selectValue1 == 'sol' && this.selectValue2 == 'mxm'){
      const result = parseFloat(this.var1) * 4.53;
      this.var2 = result + ' mxm'; 
    }
    if(this.selectValue1 == 'sol' && this.selectValue2 == 'usd'){
      const result = parseFloat(this.var1) * 0.27;
      this.var2 = result + ' usd'; 
    }
  }
 }

  change(){
    const var1 = this.var1;
    const moneda1 = this.moneda;
    const pais1 = this.selectValue1;

    this.var1 = this.var2;
    this.var2 = var1;
    this.moneda = this.moneda2;
    this.moneda2 = moneda1;

    this.selectValue1 = this.selectValue2;
    this.selectValue2 = pais1;
    
  }
}
