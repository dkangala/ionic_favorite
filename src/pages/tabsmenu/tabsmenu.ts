import {Component} from '@angular/core';

import {FavoritesPage} from '../favorites/favorites'
import {LibraryPage} from '../library/library'

import { QuotesPage } from '../quotes/quotes';
import { QuotePage } from '../quote/quote';
import { SettingsPage } from '../settings/settings';

@Component({
  selector:'page-tabs',
  template: `
    <ion-tabs selectedIndex="3">
      <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="star"></ion-tab>
      <ion-tab [root]="quotePage" tabTitle="Quote" tabIcon="book"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})

export class TabsmenuPage {
  settingsPage = SettingsPage;
  quotePage = QuotePage;
  libraryPage = LibraryPage;
  favoritesPage = FavoritesPage;
}
