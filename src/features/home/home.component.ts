import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TransferState } from '../../shared/transfer-state/transfer-state';

@Component({
    selector: 'app-home',
    template: `<h3>{{ message }}</h3>`
})
export class HomeComponent implements OnInit {
    public message: string;

    constructor(private transferState: TransferState) { }

    ngOnInit() {
        this.message = this.transferState.get('message');
    }
}
