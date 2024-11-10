import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyloading]'
})
export class LazyloadingDirective implements OnInit {
@Input() lazySrc! : string;
@Input() placeholder : string = "https://placehold.co/300x200";

  constructor(
    private element : ElementRef,
    private rendrer : Renderer2


  ) { }

  ngOnInit(): void {


    const imgelement = this.element.nativeElement


    //to set placeholder
    this.rendrer.setAttribute(imgelement, 'src', this.placeholder)


    //lading the lazy attribute
    this.rendrer.setAttribute(imgelement, 'loading', 'lazy')


    //to listen the load event for to load the actual image
    imgelement.addEventListener('load' ,() =>{
      this.rendrer.setAttribute(imgelement, 'src', this.lazySrc)
    })

    //assign the src after some timeperiod
    setTimeout(() => {
      this.rendrer.setAttribute(imgelement, 'src', this.lazySrc)
    }, 50000000000);
  }

}
