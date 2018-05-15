import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes =[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'databinding', component: DataBindingComponent },
    { path: 'structuraldirectives', component: StructuralDirectivesComponent },
    { path: 'attributedirectives', component: AttributeDirectivesComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'forms', component: FormsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
