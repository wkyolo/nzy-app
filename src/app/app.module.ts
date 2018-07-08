import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // template-driven froms, reactive forms

import { AppComponent } from './app.component';
import { NzyFormReactiveComponent } from './component/nzy-form-reactive/nzy-form-reactive.component';
import { NzyFormTemplateComponent } from './component/nzy-form-template/nzy-form-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NzyFormNzComponent } from './component/nzy-form-nz/nzy-form-nz.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    NzyFormReactiveComponent,
    NzyFormTemplateComponent,
    NzyFormNzComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
