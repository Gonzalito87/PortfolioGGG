import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-informacion-ggg',
  templateUrl: './informacion-ggg.component.html',
  styleUrls: ['./informacion-ggg.component.css']
})
export class InformacionGGGComponent implements OnInit {
  persona: persona = new persona("","","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => (this.persona = data))
  }

}
