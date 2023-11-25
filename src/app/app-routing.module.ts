import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';
import { LinkHandlerComponent } from './link-handler/link-handler.component';

const routes: Routes = [
  { path: '', component: LinkHandlerComponent },
  { path: 'pdf-reader', component: PdfReaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
