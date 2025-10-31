import { Component } from '@angular/core';
import { Cabeza } from './components/cabeza/cabeza';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Cabeza, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
