import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [],
  exports:[MatInputModule, MatButtonModule, MatCheckboxModule,MatDividerModule],
  imports: [
    CommonModule
  ]
})
export class AngularMaterialModule { }
