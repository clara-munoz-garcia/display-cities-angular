import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {routing} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListFilterCitiesComponent } from './list-filter-cities/list-filter-cities.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesService } from './service/cities.service';


@NgModule({
  declarations: [
    AppComponent,
    ListFilterCitiesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
