import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToolsService } from 'src/app/services';

@Component({
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.scss']
})
export class FooterOneComponent implements OnInit {

  @Input() width: any;

  langs: any[] =  [
    {value: 'en', name: 'English'},
    {value: 'es', name: 'Español'}
  ];

  myform: FormGroup;
  
  constructor(private fb: FormBuilder, private translate: TranslateService, private toolsService: ToolsService) { 
    
  }

  ngOnInit(): void {
    const lang = this.toolsService.language();
    this.myform = this.fb.group({
      language: [lang, Validators.required],
    });
  }

  changeLang(lang: string) {
    this.toolsService.languageCreate(lang);
    this.translate.use(lang);
  }

  textMessage()
  {
    // quiero hacerte darte en cuatro
    // quiero besarte toda
    // quiero hacerte genir rico
    // quiero penetrarte rico
    // estoy caliente quiero hacerte rico
    // me gustaría hacer le delicioso contigo
    return "Hola, acabo de ver la pagina de Celccar.com, " +
            ", Quiero consultarte.";
  }
}
