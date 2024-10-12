import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

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

  @HostBinding('style.--element-height') get getHeight() {
    return this.customHeight ? `${this.customHeight}px` : null;
  }

  @HostBinding('class') get classList() {
    return `utility-btn__${this.btnType}`;
  }

  ngOnInit() {
    if (this.customRound) {
      this.setCustomRoundStyle();
    }

    if (this.customWidth) {
      this.renderer.setStyle(this.el.nativeElement, 'width', `${this.customWidth}px`);
    }
  }

  public highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
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
