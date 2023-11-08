import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  qrURL: any = {
  }

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    console.log('Called Constructor');
    this.fetchQRLinks(()=>{
      this.route.queryParams.subscribe((params: any) => {
        let queryparams = params;
        this.redirectToParam(queryparams);
      });
    });
  }

  fetchQRLinks(cb : any) {
    const headers = new HttpHeaders().set('x-apikey', '654bda8e9d264b5f411962ed');
    this.http.get<any[]>('https://links-8026.restdb.io/rest/links', { headers: headers })
      .subscribe((links) => {
        links.forEach(link => {
          this.qrURL[link.code] = link.redirectTo;
        });
        console.log('QR URLs fetched: ', this.qrURL);
        cb();
      }, error => {
        console.error('Error fetching QR links: ', error);
      });
  }

  redirectToParam(queryParams: any) {
    console.log('conditions : ', Object.keys(queryParams), queryParams["qr"], !!this.qrURL[queryParams["qr"]], Object.keys(queryParams) && queryParams["qr"] && !!this.qrURL[queryParams["qr"]])
    if (Object.keys(queryParams) && queryParams["qr"] && !!this.qrURL[queryParams["qr"]]) {
      console.log('redirecting ...')
      setTimeout(() => {
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
// SAM IOS
// https://links.newsdelivery.info/?qr=samios
// SAM ANDROID
// https://links.newsdelivery.info/?qr=samandroid
// Fliki
// https://links.newsdelivery.info/?qr=fliki