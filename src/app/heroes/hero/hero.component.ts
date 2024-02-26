import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public method: string = 'Un método xx';
  public capitalize: string = "nombre tatas";

  get CapitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }
  changenHero(): void {
    this.name = 'Marolay';
  }
  changeAge(): void {
    this.age = 24;
  }
  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
