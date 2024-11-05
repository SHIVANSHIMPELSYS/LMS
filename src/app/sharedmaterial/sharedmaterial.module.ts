import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTreeModule,
    MatTooltipModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule
  ],
  exports:[
    MatTreeModule,
    MatTooltipModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule
  ]
})
export class SharedmaterialModule { }
