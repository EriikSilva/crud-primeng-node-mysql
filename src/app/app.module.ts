import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';

import { MessageService } from 'primeng/api';


import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AreaTesteComponent } from './area-teste/area-teste.component';


import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { CargosComponent } from './cargos/cargos.component';
import { EstatisticaComponent } from './estatistica/estatistica.component';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    AreaTesteComponent,
    CargosComponent,
    EstatisticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    HttpClientModule,
    ToolbarModule,
    InputTextModule,
    InputSwitchModule,
    BrowserAnimationsModule,
    SidebarModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CardModule,
    DividerModule,
    ConfirmDialogModule,
    DialogModule,
    ToastModule,
    TooltipModule,
    DropdownModule,
    CalendarModule,
    ChartModule
  
    
   
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
