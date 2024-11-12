import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnGradientComponent } from '../../tools/btn-gradient/btn-gradient.component';

@Component({
  selector: 'app-register-popup',
  standalone: true,
  imports: [CommonModule,BtnGradientComponent],
  templateUrl: './register-popup.component.html',
  styleUrl: './register-popup.component.css'
})
export class RegisterPopupComponent {
  isOpen = false; // Modal state
  isRegister = false; // Toggle between login and register forms

  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }

  toggleForm() {
    this.isRegister = !this.isRegister; // Toggle between login and register
  }
  
}
