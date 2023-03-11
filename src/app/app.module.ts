// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import {CardModule} from 'primeng/card';
// import {PanelModule} from 'primeng/panel';
// import { ButtonModule } from 'primeng/button';
// import {DropdownModule} from 'primeng/dropdown';

import {SelectButtonModule} from 'primeng/selectbutton';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DockModule} from 'primeng/dock';

// import { CommonModule } from '@angular/common';
 import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
// import { AppCodeModule } from '../../app.code.component';
// import { AppDemoActionsModule } from '../../app.demoactions.component';
// import { DockDemo } from './dockdemo';
// import { DockDemoRoutingModule } from './dockdemo-routing.module';
import { MenubarModule } from 'primeng/menubar';
 import { DialogModule } from 'primeng/dialog';
 import { ToastModule } from 'primeng/toast';
import { GalleriaModule } from 'primeng/galleria';
 import { TerminalModule } from 'primeng/terminal';
 import { TreeModule } from 'primeng/tree';
 import {ToolbarModule} from 'primeng/toolbar';
 import {ButtonModule} from 'primeng/button';
 import {SplitButtonModule} from 'primeng/splitbutton';
import { KodambakkamComponent } from './kodambakkam/kodambakkam.component';
import { TrustpuramComponent } from './trustpuram/trustpuram.component';
import { AdminComponent } from './admin/admin.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NetcalculateComponent } from './netcalculate/netcalculate.component';
import { HousespendsComponent } from './housespends/housespends.component';
import {PickListModule} from 'primeng/picklist';
import {SidebarModule} from 'primeng/sidebar';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';

import {CheckboxModule} from 'primeng/checkbox';
import { ShopserviceService } from './shopservice.service';
import{HttpClientModule} from '@angular/common/http'
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {SliderModule} from 'primeng/slider';
import {ProgressBarModule} from 'primeng/progressbar';
import {CalendarModule} from 'primeng/calendar';
import {StepsModule} from 'primeng/steps';
import { CalcidisplayComponent } from './calcidisplay/calcidisplay.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { CopyMoneyComponent } from './copy-money/copy-money.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import {PanelModule} from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';
import {ChartModule} from 'primeng/chart';
import {RatingModule} from 'primeng/rating';
import {ListboxModule} from 'primeng/listbox';


import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {InputTextModule} from 'primeng/inputtext';

import {RippleModule} from 'primeng/ripple';


// import { PiModule } from './core/primeng/primeng.module';
@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    KodambakkamComponent,
    TrustpuramComponent,
    AdminComponent,
    CalculatorComponent,
    NetcalculateComponent,
    HousespendsComponent,
    CalcidisplayComponent,
    CopyMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DockModule,
    FormsModule,
    DropdownModule,
    GalleriaModule,
    DialogModule,
    ToastModule,

    TerminalModule,
    TreeModule,
    BrowserAnimationsModule,
    MenubarModule,CardModule,TabViewModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    PickListModule,
    SidebarModule,
    InputNumberModule,
    RadioButtonModule,
    SelectButtonModule,
    CheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,MultiSelectModule,SliderModule,ProgressBarModule,
    CalendarModule,
    StepsModule,
    OverlayPanelModule,
    ChartModule,PanelModule,
    DataViewModule,RatingModule,
    InputTextModule,RippleModule,ProgressSpinnerModule,ListboxModule
    
    
    

  ],
  providers: [ShopserviceService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
