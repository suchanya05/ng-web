import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalService } from '../service/personal/personal.service';

@Component({
  selector: 'app-add-personal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-personal.component.html',
  styleUrl: './add-personal.component.css'
})
export class AddPersonalComponent {
  constructor( private personalService: PersonalService) {}
  showPassword = false;

  previewImage: string | null = null;

  username:string=''
  password:string=''
  name:string=''
  role:string=''

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.previewImage = null;
    const fileInput = document.getElementById('profilePicture') as HTMLInputElement;
    fileInput.value = ''; // รีเซ็ตค่า input file
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }

  savePersonal(){
    let payload = {
      username: this.username,
      name: this.name,
      password: this.password,
      role: this.role,
      profile_picture : this.previewImage
    }
    console.log(payload);

    
    this.personalService.addPersonal(payload).then((res)=>{
      console.log(res);
      
    })
  }
}

