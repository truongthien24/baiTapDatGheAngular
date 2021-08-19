import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-quan-tri-ghe',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="text-warning">ĐẶT VÉ XE BUS HÃNG CYBERSOFT</h1>
                </div>
            </div>
            <app-danh-sach-ghe class="row py-4"></app-danh-sach-ghe>
        </div>

        <style>
            .danhSachGhe-list h5 {
                width: 100%;
                text-align: center;
                background-color: silver;
                padding: 10px;
                border-radius: 5px;
            }
        </style>
    `
})

export class QuanTriGheComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}