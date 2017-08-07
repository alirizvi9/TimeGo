import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'modal-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileDialogComponent implements OnInit {
    @ViewChild('profileModal') modal: ModalDirective;

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


