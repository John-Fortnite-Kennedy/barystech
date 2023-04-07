import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WelcomePage implements OnInit {


  phone;
  password;
  action = true;
  segmentValue = "Логин";
  actionDirection;
  actionAxisX;

  constructor(public router: Router, private animationCtrl: AnimationController, platform: Platform) {
    platform.ready().then(() => {
      if (platform.width() > 1200) {
        this.actionDirection = 'translateX';
        this.actionAxisX = true;
      } else {
        this.actionDirection = 'translateY';
        this.actionAxisX = false;
      }
    });
  }

  ngOnInit() {
    sessionStorage.removeItem('manager_access_data');
  }



  validation_messages = {
    'login': [
      { type: 'required', message: 'Необходимо ввести почту.' },
      { type: 'pattern', message: 'Введите правильную почту.' }
    ],
    'password': [
      { type: 'required', message: 'Необходимо ввести пароль.' },
      { type: 'minlength', message: 'Пароль не может быть короче 5 символов.' }
      // { type: 'pattern', message: 'Пароль должен содержать как минимум 1 заглавную букву, 1 строчную букву и 1 число.' }
    ],
  }

  async swap() {
    if (this.action) {
      this.slideR()
      this.stalkR('.go_right')
    } else {
      this.slideL()
      this.stalkL('.go_left')
    }
    await this.delay(500);
    this.action = !this.action;
    if (!this.action) {
      this.returnL('.go_left');
      this.returnR('.go_right');
    } else {
      this.returnL('.go_right');
      this.returnR('.go_left');
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  segmentChanged(e) {
    console.log(e.detail.value)
    this.segmentValue = e.detail.value;
  }

  slideR() {
    let reg = this.actionAxisX ? document.getElementById('reg').getBoundingClientRect().width : document.getElementById('reg').getBoundingClientRect().height;
    let wrap = this.actionAxisX ? document.getElementById('wrap').getBoundingClientRect().width : document.getElementById('reg').getBoundingClientRect().height;
    //console.log(myElement.getBoundingClientRect().width)
    let slideRight = this.animationCtrl
      .create()
      .addElement(document.querySelector('.signIn'))
      .duration(1000)
      .easing("ease-in-out")
      .fromTo('transform', this.actionDirection + '(0%)', this.actionDirection + '(calc(0% ' + (this.actionAxisX ? '+ ' : '- ') + (reg) + 'px))')
    slideRight.play()

    let slideleft = this.animationCtrl
      .create()
      .addElement(document.querySelector('.signUp'))
      .duration(1000)
      .easing("ease-in-out")
      .keyframes([
        { offset: 0, width: '100%', transform: this.actionDirection + '(0%)' },
        { offset: 0.2, width: '120%' },
        { offset: 1, width: '100%', transform: this.actionDirection + '(calc(100% ' + (!this.actionAxisX ? '+ ' : '- ') + (wrap) + 'px))' }
      ]);
    slideleft.play()
  }

  slideL() {
    let reg = this.actionAxisX ? document.getElementById('reg').getBoundingClientRect().width : document.getElementById('reg').getBoundingClientRect().height;
    let wrap = this.actionAxisX ? document.getElementById('wrap').getBoundingClientRect().width : document.getElementById('reg').getBoundingClientRect().height;
    //console.log(myElement.getBoundingClientRect().width)

    let slideRight = this.animationCtrl
      .create()
      .addElement(document.querySelector('.signIn'))
      .duration(1000)
      .easing("ease-in-out")
      .fromTo('transform', this.actionDirection + '(calc(0% ' + (this.actionAxisX ? '+ ' : '- ') + (reg) + 'px))', this.actionDirection + '(0%)')
    slideRight.play()

    let slideleft = this.animationCtrl
      .create()
      .addElement(document.querySelector('.signUp'))
      .duration(1000)
      .easing("ease-in-out")
      .keyframes([
        { offset: 0, width: '100%', transform: this.actionDirection + '(calc(100%  ' + (!this.actionAxisX ? '+ ' : '- ') + (wrap) + 'px))' },
        { offset: 0.2, width: '120%' },
        { offset: 1, width: '100%', transform: this.actionDirection + '(0%)' }
      ]);
    slideleft.play()
  }

  stalkR(e) {
    let stalkRight = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll(e))
      .duration(400)
      .easing("ease-in-out")
      .keyframes([
        { offset: 0, transform: this.actionDirection + '(0px)', opacity: "1" },
        { offset: 1, transform: this.actionDirection + '(' + (this.actionAxisX ? '' : '-') + '200px)', opacity: "0" }
      ]);
    stalkRight.play()
  }

  stalkL(e) {
    let stalkLeft = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll(e))
      .duration(400)
      .easing("ease-in-out")
      .keyframes([
        { offset: 0, transform: this.actionDirection + '(0px)', opacity: "1" },
        { offset: 1, transform: this.actionDirection + '(' + (!this.actionAxisX ? '' : '-') + '200px)', opacity: "0" }
      ]);
    stalkLeft.play()
  }

  returnR(e) {
    let stalkRight = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll(e))
      .duration(400)
      .easing("ease-in-out")
      .keyframes([
        { offset: 0, transform: this.actionDirection + '(' + (!this.actionAxisX ? '' : '-') + '200px)', opacity: "0" },
        { offset: 1, transform: this.actionDirection + '(0px)', opacity: "1" }
      ]);
    stalkRight.play()
  }

  returnL(e) {
    let stalkLeft = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll(e))
      .duration(400)
      .easing("ease-in-out")
      .keyframes([
        { offset: 0, transform: this.actionDirection + '(' + (this.actionAxisX ? '' : '-') + '200px)', opacity: "0" },
        { offset: 1, transform: this.actionDirection + '(0px)', opacity: "1" }
      ]);
    stalkLeft.play()
  }

}
