import { Component, OnInit } from '@angular/core';
import { Pwinfo } from '../../model/pwinfo';
import { XMLX, PZDW } from '../../model/dict';
import { NzyService } from '../../service/nzy.service';
import { Zdinfo } from '../../model/zdinfo';

@Component({
  selector: 'app-nzy-form-template',
  templateUrl: './nzy-form-template.component.html',
  styleUrls: ['./nzy-form-template.component.css']
})
export class NzyFormTemplateComponent implements OnInit {

  xmlx = XMLX;
  pzdw = PZDW;
  submitted = false;
  pwinfo: Pwinfo;
  zdinfo: Zdinfo = {zdmc: '宗地项目一', zdmj: 10.99};

  constructor(private nzyService: NzyService) { }

  ngOnInit() {
    this.getNzyPwinfoById();
  }

  getNzyPwinfoById(): void {
    this.nzyService.getNzyPwinfoById('')
    .subscribe(pwinfo => this.pwinfo = pwinfo);
  }

  addNzyPwinfo(): void {
    this.nzyService.addNzyPwinfo(this.pwinfo)
    .subscribe(pwinfo => this.pwinfo = pwinfo);
  }

  onSubmit() {
    this.submitted = true;
  }

  newPwinfo() {

  }

}
