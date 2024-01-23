import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { UserServices } from '../services/user.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private user: UserServices) { }

  selectedUser: User | null = null;

  ngOnInit() {
    this.user.OnUserDetailsclick.subscribe((res: User) => {
      this.selectedUser = res;
      this.openCustomInfoModal();
    });
  }

  closebtn() {
    this.selectedUser = null;
  }

  openCustomInfoModal(): void {
    if (this.selectedUser) {
      const htmlContent = `
      <div class="user-detail-container">
        <div>
          <img class="user-detail-avatar-image" [src]="'./assets/images/${this.selectedUser.gender}-avatar.png'">
        </div>
        <div class="user-detail-info">
          <h2>User Detail</h2>
          <p><b>Name:</b>${this.selectedUser.name}</p>
          <p><b>Gender:</b>${this.selectedUser.gender}</p>
          <p><b>Subscription Type:</b>${this.selectedUser.subtype}</p>
          <p><b>Status:</b>${this.selectedUser.status}</p>
        </div>    
      </div>
    `;

      Swal.fire({
        title: 'User Details',
        html: htmlContent,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
        width: '80%',
      });
    }
  }
}
