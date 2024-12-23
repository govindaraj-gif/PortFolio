import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { SudokoComponent } from './libs/shared/sudoko/sudoko.component';
import { PdfScannerComponent } from './libs/shared/pdf-scanner/pdf-scanner.component';
import { ToDoComponent } from './libs/shared/to-do/to-do.component';

const routes: Routes = [
  {path:'' , redirectTo:'' ,pathMatch : 'full'},
  {path:'', component : ShellComponent},
  {path:'sudoko', component:SudokoComponent},
  {path:'pdf-scanner', component:PdfScannerComponent},
  {path:'to-do', component:ToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
