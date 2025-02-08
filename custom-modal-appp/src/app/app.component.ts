import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custom-modal-appp';
  isModalOpen: boolean = false;

  openModal(){
    this.isModalOpen = true;
  }

 closeModal(){
    this.isModalOpen = false;
  }


}
