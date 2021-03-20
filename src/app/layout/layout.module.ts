import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { ComponentsModule } from '../components/components.module'


@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
})
export class LayoutModule { }
