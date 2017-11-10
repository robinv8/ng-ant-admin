import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit} from '@angular/core';
import * as echarts from 'echarts';
import {isNullOrUndefined} from 'util';

@Directive({
  selector: 'echart'
})
export class EChartOptionDirective implements OnInit, OnChanges {
  @Input('chartType') chartType: any;

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    try {
      if (!isNullOrUndefined(this.chartType)) {
        echarts.init(this.el.nativeElement).setOption(this.chartType);
      }
    } catch (e) {
      this.error(e);
    }
  }

  ngOnChanges(changes): void {
    try {
      if (!isNullOrUndefined(this.chartType)) {
        echarts.init(this.el.nativeElement).setOption(this.chartType);
      }
    } catch (e) {
      this.error(e);
    }
  }

  private error(error: any) {
    console.log('统计图表出错：' + error);
  }
}
