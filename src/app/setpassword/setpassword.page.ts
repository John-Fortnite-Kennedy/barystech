import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.page.html',
  styleUrls: ['./setpassword.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SetpasswordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  finishRegistation(){
    this.router.navigate(['/'])
  }

}
