import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public barcode: BarcodeScanner
  ) {}
  results: any = null;

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
  }

  scan() {
    this.barcode.scan().then(data => {
      this.results = data;
      console.dir(data);
    });
  }

  clearResults() {
    this.results = null;
  }
}
