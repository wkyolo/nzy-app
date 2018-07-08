import { Component, OnInit } from '@angular/core';

import { Pwinfo } from '../../model/pwinfo';
import { XMLX, PZDW } from '../../model/dict';
import { NzyService } from '../../service/nzy.service';
import { Zdinfo } from '../../model/zdinfo';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nzy-form-reactive',
  templateUrl: './nzy-form-reactive.component.html',
  styleUrls: ['./nzy-form-reactive.component.css']
})

export class NzyFormReactiveComponent implements OnInit {

  nzyForm: FormGroup;

  submitted = false;
  xmlxdict = XMLX;
  pzdwdict = PZDW;
  pwinfo: Pwinfo;
  zdinfo: Zdinfo;
  zdinfos: Zdinfo[];

  get zdExist(): FormArray {
    return this.nzyForm.get('zdExist') as FormArray;
  }
  get zdAdd(): FormArray {
    return this.nzyForm.get('zdAdd') as FormArray;
  }

  constructor(private nzyService: NzyService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.getNzyPwinfoById();
    this.getNzyExistZdinfo();
    const existArray = this.fb.array(this.zdinfos.map(zdinfo => this.fb.group(zdinfo)));
    this.nzyForm.setControl('zdExist', existArray);
    this.setValue();
  }

  createForm() {
    this.nzyForm = this.fb.group({
      xmmc: ['', Validators.required],
      xmlx: '',
      pzdw: '',
      pfwh: '',
      pzrq: '',
      zmj: '',
      zdExist: this.fb.array([]),
      zdAdd: this.fb.array([])
    });
  }

  setValue() {
    this.nzyForm.setValue({
      xmmc: '项目一',
      xmlx: '单独选址',
      pzdw: '国务院',
      pfwh: '国务院[2018]号',
      pzrq: '2018-07-07',
      zmj: 20.09,
      zdExist: this.fb.array([]),
      zdAdd: this.fb.array([])
    });
  }

  getNzyPwinfoById(): void {
    this.nzyService.getNzyPwinfoById('')
    .subscribe(pwinfo => this.pwinfo = pwinfo);
  }

  getNzyExistZdinfo(): void {
    this.nzyService.getNzyExistZdinfo()
    .subscribe(zdinfos => this.zdinfos = zdinfos);
  }

  addNzyPwinfo(): void {
    this.nzyService.addNzyPwinfo(this.pwinfo)
    .subscribe(pwinfo => this.pwinfo = pwinfo);
  }

  addField() {
    this.zdAdd.push(this.fb.group(new Zdinfo()));
  }

  delField(index: number) {
    this.zdAdd.removeAt(index);
  }

  onSubmit() {
    this.submitted = true;
  }

}
