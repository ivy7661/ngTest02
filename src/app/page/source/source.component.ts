import { AfterViewInit, Component,computed,ElementRef,HostListener,inject,OnInit, QueryList, signal, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { OverlayContentComponent } from '../../component/overlay-content/overlay-content.component';
import { NgFor, NgIf } from '@angular/common';
import { UserService } from '../../user.service';
import { ParentComponent } from '../parent/parent.component';
@Component({
  selector: 'app-source',
  standalone: true,
  imports: [ FormsModule, PortalModule, OverlayModule, NgIf, NgFor],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent {
  content: string[] = []; // 儲存模擬資料
  isLoading = false;      // 加載狀態

  private totalDataCount = 100;  // 總共的模擬資料數量
  private loadedDataCount = 0;   // 已加載的資料數量
  private pageSize = 15;         // 每次加載的資料數量

  constructor() {
    this.loadMoreContent();
  }

  // 滾動事件監聽
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isLoading) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomPosition = document.documentElement.scrollHeight;

    if (scrollPosition >= bottomPosition - 100) {
      this.loadMoreContent();
    }
  }

  // 模擬加載更多資料
  loadMoreContent() {

    if (this.loadedDataCount >= this.totalDataCount) return; // 如果所有數據都已加載，則停止
    console.log('more data');

    this.isLoading = true;

    // 模擬 API 加載延遲
    setTimeout(() => {
      const newContent = this.generateMockData(this.loadedDataCount, this.pageSize);
      this.content = [...this.content, ...newContent];
      this.loadedDataCount += newContent.length;

      this.isLoading = false;
    }, 1000);
  }

  // 生成模擬資料
  private generateMockData(startIndex: number, count: number): string[] {
    return Array.from({ length: count }, (_, i) => `內容項目 ${startIndex + i + 1}`);
  }
}
