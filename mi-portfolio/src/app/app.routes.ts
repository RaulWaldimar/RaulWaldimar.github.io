import { Routes } from '@angular/router';
import { SobreMi } from './components/sobre-mi/sobre-mi';
import { HabilidadesComponent } from './components/habilidades/habilidades';
import { HobbiesComponent } from './components/hobbies/hobbies';
import { Contacto } from './components/contacto/contacto';

export const routes: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{ path: 'inicio', component: SobreMi },
	{ path: 'sobre-mi', component: SobreMi },
	{ path: 'habilidades', component: HabilidadesComponent },
	{ path: 'hobbies', component: HobbiesComponent },
	{ path: 'contacto', component: Contacto },
	{ path: '**', redirectTo: 'inicio' }
];
