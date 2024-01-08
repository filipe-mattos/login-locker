//Criando uma diretiva


import {Directive, ElementRef, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]',
})

export class BetterHighlightDirective  implements OnInit{
  //Aplica um evento direto no elemento pelo DOM
  @HostListener('mouseenter') mouseover(){

  }
  //Passando para o construtor os atributos que irei utilizar  quando  uma instacia
  //dessa diretiva for criada, utilizando  render para manipular o DOM pois  e uma
  //Boa pratica e previne de erros
  constructor(private elRef: ElementRef ,private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'black');

    this.renderer.setStyle(
      this.elRef.nativeElement,
      'color',
      'white');
  }

}
