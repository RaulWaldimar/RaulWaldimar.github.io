import { Injectable } from '@angular/core';

export interface Perfil {
  nombre: string;
  titulo?: string;
  resumen?: string;
}

@Injectable({ providedIn: 'root' })
export class DatosService {
  private perfil: Perfil = {
    nombre: 'Raul Waldimar',
    titulo: 'Estudiante de Ingeniería de Sistemas',
    resumen: 'Apasionado por la tecnología, la programación y el aprendizaje continuo.'
  };

  private habilidades = [
    { nombre: 'Programación', detalle: 'HTML, CSS, JavaScript, Angular, Python' },
    { nombre: 'Ciberseguridad', detalle: 'Interés en redes y herramientas de análisis' },
    { nombre: 'Bases de Datos', detalle: 'SQL y MySQL básicos' },
    { nombre: 'Desarrollo Web', detalle: 'Sitios estáticos y dinámicos, GitHub Pages' }
  ];

  private hobbies = [
    {
      nombre: 'escuchar música',
      icono: '🎧',
      descripcion: 'Disfruto descubrir nuevos géneros y artistas.',
      imagen: 'assets/images/musica.jpg',
      detalles: [
        { label: 'Alan Walker — Faded', url: 'https://www.youtube.com/results?search_query=Alan+Walker+Faded' },
        { label: 'Alan Walker — Alone', url: 'https://www.youtube.com/results?search_query=Alan+Walker+Alone' },
        { label: 'Alan Walker — The Spectre', url: 'https://www.youtube.com/results?search_query=Alan+Walker+The+Spectre' },
        { label: 'Alan Walker — Ignite', url: 'https://www.youtube.com/results?search_query=Alan+Walker+Ignite' },
        { label: 'Alan Walker — Darkside', url: 'https://www.youtube.com/results?search_query=Alan+Walker+Darkside' }
      ]
    },
    {
      nombre: 'leer libros',
      icono: '📚',
      descripcion: 'La lectura me inspira y amplía mis horizontes.',
      imagen: 'assets/images/lectura.jpg',
      detalles: [
        { label: 'Mycelium Running — Paul Stamets', url: 'https://www.google.com/search?q=Mycelium+Running+Paul+Stamets' },
        { label: 'Entangled Life — Merlin Sheldrake', url: 'https://www.google.com/search?q=Entangled+Life+Merlin+Sheldrake' },
        { label: 'The Hidden Life of Fungi', url: 'https://www.google.com/search?q=The+Hidden+Life+of+Fungi' }
      ]
    },
    {
      nombre: 'jugar videojuegos',
      icono: '🎮',
      descripcion: 'Exploro mundos virtuales y desarrollo reflejos.',
      imagen: 'assets/images/juegos.jpg',
      detalles: [
        { label: 'World of Warcraft', url: 'https://worldofwarcraft.com/' },
        { label: 'Mobile Legends', url: 'https://www.mobilelegends.com/' },
        { label: 'Last Day on Earth: Survival', url: 'https://www.king.com/' }
      ]
    },
    {
      nombre: 'hacer deporte',
      icono: '⚽',
      descripcion: 'Me mantiene activo y lleno de energía.',
      imagen: 'assets/images/deportes.jpg',
      detalles: [
        { label: 'Básquet' },
        { label: 'Vóley' },
        { label: 'Trekking' }
      ]
    }
  ];

  private proyectos = [
    { titulo: 'Mi Portfolio', descripcion: 'Sitio personal creado con Angular y GitHub Pages', url: '/' }
  ];

  obtenerPerfil(): Perfil {
    return this.perfil;
  }

  obtenerHabilidades() {
    return this.habilidades.slice();
  }

  obtenerHobbies() {
    return this.hobbies.slice();
  }

  obtenerProyectos() {
    return this.proyectos.slice();
  }
}
