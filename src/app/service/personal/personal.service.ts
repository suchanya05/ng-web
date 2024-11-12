import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  private apiUrl = environment.apiUrl;  // URL ของ API ที่ใช้

  constructor() {}

  // ใช้ fetch เพื่อดึงข้อมูลทั้งหมด
  async getAllPersonal(): Promise<any[]> {
    return fetch(`${this.apiUrl}/personal`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching personal data:', error);
        throw error;
      });
  }

  // ใช้ fetch เพื่อเพิ่มข้อมูล
  async addPersonal(personalData: any): Promise<any> {
    return fetch(`${this.apiUrl}/personal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(personalData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add personal data');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error adding personal data:', error);
        throw error;
      });
  }
}
