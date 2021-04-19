import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Modal } from '../../models/modal';

@Component({
  selector: 'spa-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

modal = {
    title: 'Info:',
    description: 'Operação concluída com exito!',
    bSuccess: 'Confirmar',
    bCancel: 'Cancelar',
    hasBtnCancel: false,
    bCancelColor: "",
    bSuccessColor: "primary"
} as Modal

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Modal) {}

  ngOnInit(): void {
    if (this.data){
      this.modal.title = this.data.title || this.modal.title;
      this.modal.description = this.data.description || this.modal.description;
      this.modal.bSuccess = this.data.bSuccess || this.modal.bSuccess;
      this.modal.bCancel = this.data.bCancel || this.modal.bCancel;
      this.modal.bSuccessColor = this.data.bSuccessColor || this.modal.bSuccessColor;
      this.modal.bCancelColor = this.data.bCancelColor || this.modal.bCancelColor;
      this.modal.hasBtnCancel = this.data.hasBtnCancel || this.modal.hasBtnCancel;
    }
  }
}
