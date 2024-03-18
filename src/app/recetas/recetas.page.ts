import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  recipes = [
    {
      title: 'Pizza Margarita',
      description: 'Desc: Una deliciosa pizza con tomate, mozzarella y albahaca.',
      ingredientes: 'Ingredientes: queso, albahaca, tomate, etc'
    },
    {
      title: 'Ensalada César',
      description: 'Desc: Una ensalada clásica con lechuga romana, crutones, queso parmesano y aderezo César.',
      ingredientes: 'Ingredientes: lechuga, crutones, queso'
    },
    {
      title: 'Pastel de Chocolate',
      description: 'Un decadente pastel de chocolate con glaseado de ganache.',
      ingredientes: 'Ingredientes: chocolate, ganache'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
