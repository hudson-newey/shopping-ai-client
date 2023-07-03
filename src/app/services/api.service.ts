import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { ApiChatMessage } from '../components/chat-message/chat-message.component';

interface ApiResponse {
  role: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public constructor() {}

  public requestResponse(message: string, chatHistory: ApiChatMessage[]): Promise<ApiResponse> {
    const url = this.constructApiUrl(message);

    // since the API costs money to run, we should use mock responses for the development environment
    if (environment.production) {
      const requestBody = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          history: chatHistory,
        })
      };

      return fetch(url, requestBody).then((response) => {
        console.log(response);
        return response.json()
      });
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
