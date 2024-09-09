import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { InsideFormComponent } from '../../component/inside-form/inside-form.component';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [FormsModule,NgIf, NgClass, JsonPipe, InsideFormComponent],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss'
})
export class SystemComponent {
  @ViewChild('form') form!: NgForm;
  public isButtonDisabled = false;
  public isChecked = false;

  public formData = {
    name: 'John',
    email: '',
    phone: '',
    VATNumber: '',
    EInvoice: '',
    tool: '',
    value01: '',
    value02: '',
  }

  checkVATAndEInvoice(form: NgForm): void {
    const VATNumber = form.controls['VATNumber'].value;
    const EInvoice = form.controls['EInvoice'].value;

    if (VATNumber && EInvoice) {
      form.controls['VATNumber'].setErrors({ 'bothFilled': true });
      form.controls['EInvoice'].setErrors({ 'bothFilled': true });
    } else {
      form.controls['VATNumber'].setErrors(null);
      form.controls['EInvoice'].setErrors(null);
    }
  }

  checkErrors(form: NgForm): void {
    if (this.form.invalid) {
      this.form.form.markAllAsTouched();
    }
    console.log('表單數據：', this.formData);
    this.checkVATAndEInvoice(form);
    this.isChecked = true;

    this.isButtonDisabled = form.invalid || !this.formData.tool ? true : false;
  }

  updateButtonState(form: NgForm): void {
    this.isButtonDisabled = form.invalid as boolean;
  }

  onFormChanged(): void {
    this.updateButtonState(this.form);  // 子表單狀態變化時更新按鈕狀態
  }

}
