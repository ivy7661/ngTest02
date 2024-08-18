import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

type IBtnDirective = 'primary' | 'secondary' | 'outline';

@Directive({
  selector: '[appUtilityButton]',
  standalone: true
})
export class UtilityButtonDirective {
  @Input('utilityButton') btnType: IBtnDirective = 'primary';
  @Input('height') customHeight?: number;
  @Input('width') customWidth?: number;
  @Input('roundStyle') customRound?: {
    background?: string;
    color?: string;
    border?: string;
    hoverBackground?: string;
    hoverColor?: string;
    fontFamily?: string;
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setButtonStyle();

    if (this.customRound) {
      this.setCustomRoundStyle();
    }

    if (this.customHeight) {
      this.renderer.setStyle(this.el.nativeElement, 'height', `${this.customHeight}px`);
    }

    if (this.customWidth) {
      this.renderer.setStyle(this.el.nativeElement, 'width', `${this.customWidth}px`);
    }
  }

  private setButtonStyle() {
    switch (this.btnType) {
      case 'primary':
        this.renderer.setStyle(this.el.nativeElement, 'background', '#fa0');
        this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
        this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #007bff');
        break;
      case 'secondary':
        this.renderer.setStyle(this.el.nativeElement, 'background', '#6c757d');
        this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
        this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #6c757d');
        break;
      case 'outline':
        this.renderer.setStyle(this.el.nativeElement, 'background', 'transparent');
        this.renderer.setStyle(this.el.nativeElement, 'color', '#007bff');
        this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #007bff');
        break;
    }
  }

  private setCustomRoundStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'background', this.customRound!.background);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.customRound!.color);

    if (this.customRound!.border) {
      this.renderer.setStyle(this.el.nativeElement, 'border', this.customRound!.border);
    }

    if (this.customRound!.fontFamily) {
      this.renderer.setStyle(this.el.nativeElement, 'font-family', this.customRound!.fontFamily);
    }

    // Add hover effect
    this.renderer.listen(this.el.nativeElement, 'mouseover', () => {
      this.renderer.setStyle(this.el.nativeElement, 'background', this.customRound!.hoverBackground);
      this.renderer.setStyle(this.el.nativeElement, 'color', this.customRound!.hoverColor);
    });

    this.renderer.listen(this.el.nativeElement, 'mouseout', () => {
      this.renderer.setStyle(this.el.nativeElement, 'background', this.customRound!.background);
      this.renderer.setStyle(this.el.nativeElement, 'color', this.customRound!.color);
    });
  }

}
