import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css']
})
export class PdfReaderComponent implements OnInit {
  pdfSrc: string = ''; // Path to your PDF file
  loading : boolean = true;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
      this.route.queryParams.subscribe((params: any) => {
        let queryparams = params;
        this.loadBookFile(queryparams);
      });
  }

  ngOnInit(): void {
  }

  loadBookFile(queryParams:any){
    if (Object.keys(queryParams) && queryParams["qr"]) {
      console.log('Loading file ...')
      this.pdfSrc = "/assets/library/"+queryParams["qr"]+".pdf";
      this.loading = false;
    } else {
      console.log('Not Valid !', queryParams["qr"]);
    }
  }

}
