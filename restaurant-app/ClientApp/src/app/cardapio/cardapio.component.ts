import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  AfterViewInit(){
    var states = $("#cardapio");
    var estados = $("tr")

    $(document).ready(function () {
          estados = [{
              "Sigla": "AC",
              "Estado": "ACRE"
            }];
            $(estados).each(function (i) {
              //lista os estados
              let opt = "<td value=" + this.Sigla + ">" + this.Estado + "</td> </ br>";

              $(states).append(opt);
            });
          });
  }

}
