import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-ghe',
    template: `

    <ng-container *ngIf="!itemGhe.TrangThai;else gheDaDat">
        <button class="btn btn-secondary danhSachGhe-btn" [ngClass]="{'btn-success':status}" (click)="datGhe()">
                {{itemGhe.SoGhe}}
        </button>
    </ng-container>

    <ng-template #gheDaDat>
        <button class="btn btn-danger danhSachGhe-btn" [ngClass]="{'btn-success':status}" style="cursor: not-allowed">
                {{itemGhe.SoGhe}}
        </button>
    </ng-template>
    
    <style>
        .danhSachGhe-btn {
            width: 40px;
            height: 40px;
        }

        .gheDaDat {
            background-color: #f28282;
        }
    </style>
    
    `
})

export class GheComponent implements OnInit {

    status:boolean = false;

    @Output() emitStatus = new EventEmitter();
    @Input() itemGhe: any;
    @Input() danhSachGheDangDat: any;

    constructor() { }

    datGhe() {
        this.status = !this.status;
        this.emitStatus.emit(this.status);
    }

    ngOnChanges() {
        if(this.danhSachGheDangDat.findIndex((ghe: any)=> ghe.SoGhe === this.itemGhe.SoGhe) !== -1) {
            this.status = true;
        }else {
            this.status = false;
        }
    }

    ngOnInit() { 

    }
}