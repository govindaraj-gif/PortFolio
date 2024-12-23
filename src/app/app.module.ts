import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { SudokoComponent } from './libs/shared/sudoko/sudoko.component';
import { PdfScannerComponent } from './libs/shared/pdf-scanner/pdf-scanner.component';
import { ContentComponent } from './shell/content/content.component';
import { FooterComponent } from './shell/footer/footer.component';
import { NavBarComponent } from './shell/nav-bar/nav-bar.component';
import { SkillsComponent } from './shell/content/skills/skills.component';
import { ToDoComponent } from './libs/shared/to-do/to-do.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SudokoComponent,
    PdfScannerComponent,
    ContentComponent,
    FooterComponent,
    NavBarComponent,
    SkillsComponent,
    ToDoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
