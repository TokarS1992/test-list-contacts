import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    exports: [
        MatGridListModule,
        MatInputModule,
        MatToolbarModule,
        MatSidenavModule,
    ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailComponent,
    FilterPipe
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
