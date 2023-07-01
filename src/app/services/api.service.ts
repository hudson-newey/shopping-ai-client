import { Injectable } from '@angular/core';
import { environment } from '../environment';

interface ApiResponse {
  role: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public constructor() {}

  public get(message: string): Promise<ApiResponse> {
    const url = this.constructApiUrl(message);

    // since the API costs money to run, we should use mock responses for the development environment
    if (environment.production) {
      return fetch(url).then((response) => response.json());
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            role: 'bot',
            content: 'I am a bot response',
          });
        }, 5000);
      });
    }
  }

  private constructApiUrl(message: string): string {
    return `${environment.apiUrl}?q=${message}`;
  }
}
