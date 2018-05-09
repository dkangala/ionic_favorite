import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,MenuController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";
import { SettingsService } from "../../services/settings"


/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
    private modelCtrl: ModalController,
    private menuController: MenuController,
    private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  onViewQuote(quote: Quote) {
    const modal = this.modelCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
        // this.quotesService.removeQuoteToFavorites(quote);
        // const position = this.quotes.findIndex((quoteEl: Quote) => {
        //   return quoteEl.id == quote.id;
        // })
        // this.quotes.splice(position, 1);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteToFavorites(quote);
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    })
    this.quotes.splice(position, 1);
  }

  onOpenMenu() {
    this.menuController.open();
  }

  getBackground() {
    //return this.settingsService.isAltBackground() ? 'altQuoteBackground':'quoteBackground';
    //return "altQuoteBackground";
    return this.settingsService.isAltBackground()? 'altQuoteBackground':'quoteBackground';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
