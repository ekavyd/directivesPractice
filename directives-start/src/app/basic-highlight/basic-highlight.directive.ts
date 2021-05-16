import { Directive, ElementRef, OnInit } from "@angular/core";

//Do not forget to add the ref to the local Module that uses it
//example of custom attribute directive
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    constructor(private elementRef: ElementRef) {
        elementRef        
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}