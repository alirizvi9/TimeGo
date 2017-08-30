import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'subscription-modal',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionDialogComponent implements OnInit {
    @ViewChild('subscriptionModal') modal: ModalDirective;
    public mytime: Date = new Date();
    constructor() { }

    ngOnInit() {
    }

    showModal() {
        this.modal.show();
    }

    closeModal() {
        this.modal.hide();
    }
}
