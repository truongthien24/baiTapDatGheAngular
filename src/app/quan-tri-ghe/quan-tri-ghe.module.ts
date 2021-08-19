import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanTriGheComponent } from './quan-tri-ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe.component';
import { DanhSachGheDaDatComponent } from './danh-sach-ghe-da-dat.component';
import { GheComponent } from './ghe.component';



@NgModule({
  declarations: [QuanTriGheComponent, DanhSachGheComponent, DanhSachGheDaDatComponent, GheComponent],
  imports: [
    CommonModule
  ],
  exports: [QuanTriGheComponent]
})
export class QuanTriGheModule { }
