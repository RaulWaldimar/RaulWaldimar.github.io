import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sobre-mi.html',
  styleUrls: ['./sobre-mi.css']
})
export class SobreMi {}
