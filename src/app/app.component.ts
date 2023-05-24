import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  qrURL : any = {
    "rdbl":"https://tracking.rmkr.lu/SHjv",
    "hkm":"https://tracking.rmkr.lu/SHjw",
    "almak":"https://tracking.rmkr.lu/SHjx",
    "zara":"https://tracking.rmkr.lu/SHju",
    "kfld":"https://tracking.rmkr.lu/SHjt",
    "ssa":"https://tracking.rmkrco.com/SHkD",
    "lts":"https://tracking.rmkr.lu/SHkS",
    "sam":"https://smart-assistant-mate.com/"
  }

  constructor(private route: ActivatedRoute) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe((params:any) => {
      let queryparams = params;
      this.redirectToParam(queryparams);
    });
  }
  
  
  redirectToParam(queryParams : any){
    console.log('conditions : ', Object.keys(queryParams) , queryParams["qr"], !!this.qrURL[queryParams["qr"]], Object.keys(queryParams) && queryParams["qr"] && !!this.qrURL[queryParams["qr"]])
    if (Object.keys(queryParams) && queryParams["qr"] && !!this.qrURL[queryParams["qr"]]) {
      console.log('redirecting ...')
      setTimeout(()=>{
        window.location.href = this.qrURL[queryParams["qr"]];
      }, 5000)
    } else {
      console.log('Not Valid !', queryParams["qr"], this.qrURL[queryParams["qr"]]);
    }
  }


}




// Links : 


// Redbull
// https://links.newsdelivery.info/?qr=rdbl
// Hunkemoller
// https://links.newsdelivery.info/?qr=hkm
// Aldi& Makita
// https://links.newsdelivery.info/?qr=almak
// Zara
// https://links.newsdelivery.info/?qr=zara
// Kaufland
// https://links.newsdelivery.info/?qr=kfld
// surfshark
// https://links.newsdelivery.info/?qr=ssa
// Left To Survive
// https://links.newsdelivery.info/?qr=lts
// SAM
// https://links.newsdelivery.info/?qr=sam