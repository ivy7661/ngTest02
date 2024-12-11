import { AfterViewInit, Component,computed,ElementRef,HostListener,inject,OnInit, QueryList, signal, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { OverlayContentComponent } from '../../component/overlay-content/overlay-content.component';
import { NgIf } from '@angular/common';
import { UserService } from '../../user.service';
import { ParentComponent } from '../parent/parent.component';
@Component({
  selector: 'app-source',
  standalone: true,
  imports: [ FormsModule, PortalModule, OverlayModule],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent implements OnInit {
  @ViewChild('loadingDiv') loadingElement!: ElementRef<HTMLDivElement>;
  isLoading = false;
  content: string[] = [];

  ngOnInit() {
    this.loadMoreContent();
  }

  ngAfterViewInit() {
    // 確保 loadingElement 已經被正確初始化
    if (!this.loadingElement) {
      console.error('loadingElement 未被正確初始化');
    }
  }

  onScroll() {
    if (this.isLoading) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomPosition = document.documentElement.scrollHeight;

    if (scrollPosition >= bottomPosition - 100) {
      this.loadMoreContent();
    }
  }

  loadMoreContent() {
    this.isLoading = true;

    // 使用 loadingElement 操作樣式
    if (this.loadingElement) {
      this.loadingElement.nativeElement.style.display = 'block';
    }

    // 模擬延遲加載
    setTimeout(() => {
      const newContent = Array.from({ length: 10 }, (_, index) => `內容項目 ${this.content.length + index + 1}`);
      this.content = [...this.content, ...newContent];

      this.isLoading = false;

      if (this.loadingElement) {
        this.loadingElement.nativeElement.style.display = 'none';
      }
    }, 1500);
  }
}
