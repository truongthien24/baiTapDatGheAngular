import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DanhSachGheDaDatComponent } from './danh-sach-ghe-da-dat.component';

@Component({
    selector: 'app-danh-sach-ghe',
    template: `
        <div class="col-6">
            <h5 class="p-2 text-center" style="border-radius: 5px; background-color: silver">Tài xế</h5>
            <div class="row">
                <app-ghe class="col-3 d-flex align-item-center justify-content-center my-2" *ngFor="let item of DanhSachGhe; let i = index" [itemGhe]="item" (emitStatus)="DatGheParent($event,item)" [danhSachGheDangDat]="this.DanhSachGheDangDat"></app-ghe>
            </div>
        </div>
        <div class="col-6">
            <h3 class="text-warning text-center">Danh sách ghế đã đặt ({{DanhSachGheDangDat.length}})</h3>
            <app-danh-sach-ghe-da-dat class="row" *ngFor="let item of this.DanhSachGheDangDat" [itemGhe]="item" (emitGheHuy)="DatGheParent($event,item)"></app-danh-sach-ghe-da-dat>
            <div class="d-flex mt-3">
                <h5 class="text-info mr-3">Tổng tiền:</h5>
                {{tongTien}}
            </div>
        </div>
    `
})

export class DanhSachGheComponent implements OnInit {

    @Output() emitDanhSachGhe = new EventEmitter();

    tinhTrangCSS = '';

    DanhSachGhe = [
        {SoGhe:1,TenGhe:'số 1 ',Gia:100,TrangThai:false},
        {SoGhe:2,TenGhe:'số 2 ',Gia:100,TrangThai:false},
        {SoGhe:3,TenGhe:'số 3 ',Gia:100,TrangThai:false},
        {SoGhe:4,TenGhe:'số 4 ',Gia:100,TrangThai:false},
        {SoGhe:5,TenGhe:'số 5 ',Gia:100,TrangThai:false},
        {SoGhe:6,TenGhe:'số 6 ',Gia:100,TrangThai:false},
        {SoGhe:7,TenGhe:'số 7 ',Gia:100,TrangThai:false},
        {SoGhe:8,TenGhe:'số 8 ',Gia:100,TrangThai:false},
        {SoGhe:9,TenGhe:'số 9 ',Gia:100,TrangThai:true},
        {SoGhe:10,TenGhe:'số 10',Gia:100,TrangThai:true},
        {SoGhe:11,TenGhe:'số 11',Gia:100,TrangThai:true},
        {SoGhe:12,TenGhe:'số 12',Gia:100,TrangThai:false},
        {SoGhe:13,TenGhe:'số 13',Gia:100,TrangThai:false},
        {SoGhe:14,TenGhe:'số 14',Gia:100,TrangThai:false},
        {SoGhe:15,TenGhe:'số 15',Gia:100,TrangThai:false},
        {SoGhe:16,TenGhe:'số 16',Gia:100,TrangThai:false},
        {SoGhe:17,TenGhe:'số 17',Gia:100,TrangThai:false},
        {SoGhe:18,TenGhe:'số 18',Gia:100,TrangThai:false},
        {SoGhe:19,TenGhe:'số 19',Gia:100,TrangThai:false},
        {SoGhe:20,TenGhe:'số 20',Gia:100,TrangThai:false},
        {SoGhe:21,TenGhe:'số 21',Gia:100,TrangThai:false},
        {SoGhe:22,TenGhe:'số 22',Gia:100,TrangThai:false},
        {SoGhe:23,TenGhe:'số 23',Gia:100,TrangThai:false},
        {SoGhe:24,TenGhe:'số 24',Gia:100,TrangThai:false},
        {SoGhe:25,TenGhe:'số 25',Gia:100,TrangThai:false},
        {SoGhe:26,TenGhe:'số 26',Gia:100,TrangThai:false},
        {SoGhe:27,TenGhe:'số 27',Gia:100,TrangThai:false},
        {SoGhe:28,TenGhe:'số 28',Gia:100,TrangThai:true},
        {SoGhe:29,TenGhe:'số 29',Gia:100,TrangThai:true},
        {SoGhe:30,TenGhe:'số 30',Gia:100,TrangThai:false},
        {SoGhe:31,TenGhe:'số 31',Gia:100,TrangThai:false},
        {SoGhe:32,TenGhe:'số 32',Gia:100,TrangThai:false},
        {SoGhe:33,TenGhe:'số 33',Gia:100,TrangThai:false},
        {SoGhe:34,TenGhe:'số 34',Gia:100,TrangThai:false},
        {SoGhe:35,TenGhe:'số 35',Gia:100,TrangThai:false},
        {SoGhe:36,TenGhe:'số 36',Gia:100,TrangThai:false},
    ];

    gheNe:Ghe = {
        SoGhe:0,TenGhe:'',Gia:0, TrangThai: false
    }


    DanhSachGheDangDat:any = [];

    tongTien:number = 0;

    constructor() { }

    ngOnInit() { }
    
    DatGheParent(status:boolean, ghe:Ghe) {
        console.log(status);
        console.log(ghe);
        if(status===true) {
            this.DanhSachGheDangDat.push(ghe);
            console.log(this.DanhSachGheDangDat);
            this.tongTien += ghe.Gia;
        }
        else {
            const newDanhSachGheDangDat = this.DanhSachGheDangDat.filter((item: object) => item !== ghe);
            this.DanhSachGheDangDat = newDanhSachGheDangDat;
            this.tongTien -= ghe.Gia;
            console.log(this.DanhSachGheDangDat);
        }
        this.emitDanhSachGhe.emit(this.DanhSachGheDangDat);
    }
}

interface Ghe {
    SoGhe:number,
    TenGhe:string,
    Gia:number,
    TrangThai:boolean
}