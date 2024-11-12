import { Component, HostListener } from '@angular/core';
import { RegisterPopupComponent } from '../../popup/register-popup/register-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RegisterPopupComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isScrolled = false;
  isAdmin = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 80;  // เปลี่ยนค่าตามความต้องการ
  }

}
