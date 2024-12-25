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
import { MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule} from '@angular/material/tooltip';
import { ToDoListComponent } from './libs/shared/to-do/to-do-list/to-do-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule } from '@angular/forms';
import { ToDoEditComponent } from './libs/shared/to-do/to-do-edit/to-do-edit.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    ToDoListComponent,
    ToDoEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
