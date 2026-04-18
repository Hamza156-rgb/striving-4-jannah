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
          <ion-icon name="home-outline"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="quran">
          <ion-icon name="book-open-outline"></ion-icon>
          <ion-label>Quran</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="prayer-times">
          <ion-icon name="time-outline"></ion-icon>
          <ion-label>Prayers</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="hadith">
          <ion-icon name="library-outline"></ion-icon>
          <ion-label>Hadith</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="settings">
          <ion-icon name="settings-outline"></ion-icon>
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  styles: [`
    ion-tab-bar {
      --background: linear-gradient(180deg, #0d1626 0%, #0a0e1a 100%);
      border-top: 1px solid rgba(201,168,76,0.25);
      height: 65px;
      padding: 8px 12px 12px;
      backdrop-filter: blur(20px);
      box-shadow: 0 -2px 12px rgba(0,0,0,0.3);
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    ion-tab-button {
      --color: #6b7c93;
      --color-selected: #c9a84c;
      padding: 6px 4px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      flex: 1 !important;
      min-width: 0 !important;
      max-width: 20% !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
    ion-tab-button::part(native) {
      padding: 6px 8px;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    ion-tab-button.tab-selected::part(native) {
      background: rgba(201,168,76,0.08);
      border-radius: 12px;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(201,168,76,0.15);
    }
    ion-tab-button ion-icon {
      font-size: 20px;
      margin-bottom: 4px;
      transition: all 0.3s ease;
    }
    ion-tab-button.tab-selected ion-icon {
      transform: scale(1.1);
      filter: drop-shadow(0 2px 4px rgba(201,168,76,0.3));
    }
    ion-label { 
      font-size: 9px; 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
      font-weight: 500;
      letter-spacing: 0.3px;
      transition: all 0.3s ease;
    }
    ion-tab-button.tab-selected ion-label {
      font-weight: 600;
      color: #e8c97a;
    }
    ion-tab-button:not(.tab-selected):hover {
      --color: #9aafcc;
    }
    ion-tab-button:not(.tab-selected):active {
      transform: scale(0.95);
    }
  `]
})
export class TabsPage {}
