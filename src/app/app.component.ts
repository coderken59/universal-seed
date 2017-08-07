import { Component, OnInit } from '@angular/core';
import { TransferState } from '../shared/transfer-state/transfer-state';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Universal Seed';

  constructor(private cache: TransferState) { }

  ngOnInit() {
    this.cache.set('message', 'Hello Universal-Seed');
  }
}
