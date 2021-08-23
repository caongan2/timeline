import { Component, OnInit } from '@angular/core';
import {DateUtilService} from "../../services/date-util.service";

@Component({
  selector: 'app-timlines',
  templateUrl: './timlines.component.html',
  styleUrls: ['./timlines.component.css']
})
export class TimlinesComponent implements OnInit {

  output = ''

  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }

  onChange(value: any) {
    this.output = this.dateUtilService.getDiffToNow(value)
  }

}
