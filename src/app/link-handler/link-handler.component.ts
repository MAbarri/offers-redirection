import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-link-handler',
  templateUrl: './link-handler.component.html',
  styleUrls: ['./link-handler.component.css']
})
export class LinkHandlerComponent {

  qrURL: any = {
  }

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    console.log('Called Constructor');
    this.fetchQRLinks(() => {
      this.route.queryParams.subscribe((params: any) => {
        let queryparams = params;
        this.redirectToParam(queryparams);
      });
    });
  }

  fetchQRLinks(cb: any) {
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
