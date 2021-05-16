import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  //bind to specific prop of hosting element, useful for several  behaviors on a specific prop
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  //better approach to use renderer, doesn't directly access the dom
  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  //use host listener to trigger per event, even custom events
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    
    //use the host binding
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';

  }

}