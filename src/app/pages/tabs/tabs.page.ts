import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home">
          <ion-icon name="home"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="quran">
          <ion-icon name="book"></ion-icon>
          <ion-label>Quran</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="prayer-times">
          <ion-icon name="time"></ion-icon>
          <ion-label>Prayers</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="hadith">
          <ion-icon name="library"></ion-icon>
          <ion-label>Hadith</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="settings">
          <ion-icon name="cog"></ion-icon>
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  styles: [`
    ion-tab-bar {
      --background: #0d1626;
      border-top: 1px solid rgba(201,168,76,0.18);
      height: 50px;
      padding: 4px 0 6px;
    }
    ion-tab-button {
      --color: #506480;
      --color-selected: #c9a84c;
      padding: 2px 0;
    }
    ion-tab-button ion-icon {
      font-size: 14px;
      margin-bottom: 2px;
    }
    ion-label { 
      font-size: 7px; 
      font-family: 'Lato', sans-serif; 
      font-weight: 400;
    }
  `]
})
export class TabsPage {}
