import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  constructor() {}

  scrollToBottom() {
    this.content.scrollToBottom(300); // 300ms animation duration
  }

  scrollToTop() {
    this.content.scrollToTop(300);
  }
}
