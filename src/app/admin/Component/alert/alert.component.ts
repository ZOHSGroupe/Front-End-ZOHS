import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-admin',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() type: string = 'info'; // default to info
  @Input() message: string = '';
  @Output() closed = new EventEmitter<void>();

  visible: boolean = true;

  closeAlert(): void {
    this.visible = false;
    this.closed.emit();
  }
}

