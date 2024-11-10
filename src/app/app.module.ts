import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LazyloadingComponent } from './shared/component/lazyloading/lazyloading.component';
import { LazyloadingDirective } from './shared/directive/lazyloading.directive';

@NgModule({
  declarations: [
    AppComponent,
    LazyloadingComponent,
    LazyloadingDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
