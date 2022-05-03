import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  exports:[MatInputModule, MatButtonModule],
  imports: [
    CommonModule
  ]
})
export class AngularMaterialModule { }
