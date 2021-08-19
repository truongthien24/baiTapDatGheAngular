import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-danh-sach-ghe-da-dat',
    template: `
        <div>
            <div class="col-12 d-flex align-items-center justify-content-around p-2">
                <div><span class="mr-2">Ghế: {{itemGhe.SoGhe}}</span> $<span>{{itemGhe.Gia}}</span></div>
                <a href="#" class="text-danger" (click)="huyGhe()">[Hủy]</a>
            </div>
        </div>
    `
})

export class DanhSachGheDaDatComponent implements OnInit {

    status:boolean = true;

    @Input() itemGhe!: any;

    @Output() emitGheHuy = new EventEmitter();
 
    constructor() { }

    ngOnInit() { }

    huyGhe() {
        this.status = false;
        this.emitGheHuy.emit(this.status);
    }
}