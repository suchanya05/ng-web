import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalService } from '../service/personal/personal.service';
import { CommonModule } from '@angular/common';
import { BtnGradientComponent } from '../tools/btn-gradient/btn-gradient.component';

@Component({
  selector: 'app-personal-manager',
  standalone: true,
  imports : [CommonModule,BtnGradientComponent],
  templateUrl: './personal-manager.component.html',
  styleUrls: ['./personal-manager.component.css']
})
export class PersonalManagerComponent implements OnInit {
  dataPersonalTable: any[] = [];

  constructor(private router: Router, private personalService: PersonalService) {}

  ngOnInit() {
    this.loadPersonalData();
  }

  loadPersonalData() {
    this.personalService.getAllPersonal()
      .then(data => {
        this.dataPersonalTable = data;
      })
      .catch(error => console.error('Error loading personal data:', error));
  }

  addPersonal() {
    this.router.navigate(['/personal/add']);
  }
}
