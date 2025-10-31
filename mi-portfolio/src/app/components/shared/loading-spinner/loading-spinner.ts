import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  template: `
    <div class="spinner-container" aria-label="Cargando...">
      <div class="spinner"></div>
      <p class="mensaje">Cargando habilidades...</p>
    </div>
  `,
  styles: [`
    .spinner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #4CAF50;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .mensaje {
      margin-top: 1rem;
      color: #666;
      font-size: 1.1rem;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LoadingSpinnerComponent {}