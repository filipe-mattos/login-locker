//Criando uma diretiva


import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]',
})

export class BasicHighlightDirective  implements OnInit{

  //Passando para o construtor os atributos que irei utilizar  quando  uma instacia
  //dessa diretiva for criada
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor  = 'magenta';
    this.elementRef.nativeElement.style.color  = 'white';
  }
}
