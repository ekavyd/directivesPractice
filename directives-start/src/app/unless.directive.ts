import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

//custom practice of struc directive :: logical opposite of ngIf
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  
  //technically a method, executed by using prop setter.  in effect whenever this condition changes = execution
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);    //creates a view w/in container
    } else {
      this.vcRef.clear();    //remove everything at this DOM location
    }
  }

  //inject ng-template(templateRef) and DOM location(view container ref)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
