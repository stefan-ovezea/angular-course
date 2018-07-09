// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// App Modules
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

// App Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { FormsComponent } from './forms/forms.component';

// App Directives
import { HighlightDirective } from './attribute-directives/highlight.directive';

// App Services
import { DataService } from './data-service/data.service';
import { PipesComponent } from './pipes/pipes.component';

// App Pipes
import { ExponentialPipe } from './pipes/exponential.pipe';
import { ChildComponent } from './dashboard/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ExponentialPipe,
    DashboardComponent,
    IconsComponent,
    DataBindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    PipesComponent,
    FormsComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
