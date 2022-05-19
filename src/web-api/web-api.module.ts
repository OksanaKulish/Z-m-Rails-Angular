import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

const components: any = [
]

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    ...components
  ],
  exports: [...components],
  providers: [],
})
export class WebApiModule { }
