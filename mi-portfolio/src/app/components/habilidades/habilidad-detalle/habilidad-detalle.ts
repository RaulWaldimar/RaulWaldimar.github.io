import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-habilidad-detalle',
  standalone: true,
  imports: [],
  template: `
    <div class="habilidad-card" [class.destacada]="habilidad.destacada">
      <h3>{{ habilidad.nombre }}</h3>
      <div class="nivel-container">
        <div class="nivel-barra" [style.width.%]="habilidad.nivel"></div>
        <span class="nivel-texto">{{ habilidad.nivel }}%</span>
      </div>
      <p>{{ habilidad.descripcion }}</p>
      <div class="acciones">
        <button (click)="onToggleDestacada()">
          {{ habilidad.destacada ? 'Quitar destacada' : 'Destacar' }}
        </button>
        <button (click)="onNivelChange(5)" [disabled]="habilidad.nivel >= 100">+</button>
        <button (click)="onNivelChange(-5)" [disabled]="habilidad.nivel <= 0">-</button>
      </div>
    </div>
  `,
  styles: [`
    .habilidad-card {
      background: var(--card, #121C3B);
      border: 2px solid var(--accent2, #00FFFF);
      border-radius: 8px;
      padding: 20px;
      margin: 10px;
      transition: all 0.3s ease;
      box-shadow: 0 0 15px var(--accent2, #00FFFF);
      color: var(--text-primary, #E6E6E6);
    }

    .habilidad-card.destacada {
      border-color: var(--accent1, #00FF99);
      box-shadow: 0 0 25px var(--accent1, #00FF99);
      background: linear-gradient(45deg, var(--card, #121C3B), var(--bg-dark, #0A0F24));
    }

    h3 {
      color: var(--accent2, #00FFFF);
      font-size: 1.8rem;
      margin-bottom: 1rem;
      /* brillo reducido ligeramente */
      text-shadow: 0 0 6px rgba(0, 255, 255, 0.28);
      font-weight: bold;
      letter-spacing: 1px;
      opacity: 0.9;
    }

    p {
      color: var(--text-primary, #E6E6E6);
      margin: 0.5rem 0;
      font-size: 1.1rem;
      /* sombra de texto más suave para menor brillo */
      text-shadow: 0 0 3px rgba(230, 230, 230, 0.18);
      line-height: 1.4;
      opacity: 0.82;
    }

    .nivel-container {
      position: relative;
      height: 25px;
      background: var(--bg-dark, #0A0F24);
      border-radius: 12px;
      margin: 1.5rem 0;
      border: 2px solid var(--accent2, #00FFFF);
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
    }

    .nivel-barra {
      height: 100%;
      background: linear-gradient(90deg, var(--accent2, #00FFFF), var(--accent1, #00FF99));
      transition: width 0.3s ease;
      box-shadow: 0 0 15px var(--accent2, #00FFFF);
    }

    .nivel-texto {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--text-primary, #FFFFFF);
      font-weight: bold;
      font-size: 1rem;
      /* leve reducción de brillo en el porcentaje */
      text-shadow: 0 0 4px rgba(0, 255, 255, 0.28);
      z-index: 1;
      opacity: 0.88;
    }

    .acciones {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-top: 1.5rem;
    }

    button {
      padding: 8px 16px;
      border: 1px solid var(--accent1, #00FF99);
      background: linear-gradient(90deg, var(--btn-primary, #121C3B), var(--btn-hover, #1A2C5C));
      color: var(--text-primary, #E6E6E6);
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-shadow: 0 0 5px var(--accent1, #00FF99);
    }

    button:hover:not([disabled]) {
      background: linear-gradient(90deg, var(--btn-hover, #1A2C5C), var(--accent1, #00FF99));
      transform: translateY(-2px);
      box-shadow: 0 0 15px var(--accent1, #00FF99);
    }

    button[disabled] {
      background: var(--card, #121C3B);
      border-color: var(--text-secondary, #A0AEC0);
      cursor: not-allowed;
      opacity: 0.7;
      text-shadow: none;
    }
  `]
})
export class HabilidadDetalleComponent {
  @Input() habilidad!: {
    nombre: string;
    nivel: number;
    descripcion: string;
    destacada: boolean;
  };

  @Output() toggleDestacada = new EventEmitter<void>();
  @Output() nivelCambiado = new EventEmitter<number>();

  onToggleDestacada() {
    this.toggleDestacada.emit();
  }

  onNivelChange(cambio: number) {
    this.nivelCambiado.emit(cambio);
  }
}