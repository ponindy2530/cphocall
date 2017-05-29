import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PCallPage } from './p-call';

@NgModule({
  declarations: [
    PCallPage,
  ],
  imports: [
    IonicPageModule.forChild(PCallPage),
  ],
  exports: [
    PCallPage
  ]
})
export class PCallPageModule {}
