import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [FilterComponent],
  providers: []
})
export class SharedModule { }
