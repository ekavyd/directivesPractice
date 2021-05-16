import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  //add props to customize colors by consumer
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';



  //bind to specific prop of hosting element, useful for several  behaviors on a specific prop
  @HostBinding('style.backgroundColor') backgroundColor: string;

  //better approach to use renderer, doesn't directly access the dom
  ngOnInit(){
    this.backgroundColor = this.defaultColor;


    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  //use host listener to trigger per event, even custom events
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    
    //use the host binding
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;

  }

}