import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {ChatService} from "../../services/chat.service";
import {GroupeService} from "../../services/groupe.service";
import {User} from "../../models/user";
import {Groupe} from "../../models/groupe";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {

  }
}
