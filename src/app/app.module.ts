import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LinkHandlerComponent } from './link-handler/link-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfReaderComponent,
    LinkHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
