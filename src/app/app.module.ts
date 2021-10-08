import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';

@NgModule({
  declarations: [AppComponent, ProgressIndicatorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
