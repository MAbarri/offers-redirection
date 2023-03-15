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
    "kfld":"https://tracking.rmkr.lu/SHjt"
  }

  constructor(private route: ActivatedRoute) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
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
