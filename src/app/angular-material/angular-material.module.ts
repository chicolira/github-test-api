import { NgModule } from '@angular/core';
import {
  MatTabsModule,
} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
  ],
  exports: [
    MatTabsModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
  ]
})
export class AngularMaterialModule { }
