import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    // LayoutComponent
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
