import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { ApiChatMessage } from "../components/chat-message/chat-message.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";

interface ApiResponse {
  role: string;
  content: string;
}

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public constructor(private http: HttpClient) {}

  public requestResponse(
    message: string,
    chatHistory: ApiChatMessage[]
  ): Promise<ApiResponse> {
    const url = this.constructApiUrl(message);

    // since the API costs money to run, we should use mock responses for the development environment
    if (environment.production) {
      // Set the headers
      const headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Cache-Control": "max-age=600",
      });

      // Prepare the request body
      const requestBody = {
        history: chatHistory,
      };

      return this.http
        .post(url, requestBody, { headers })
        .toPromise()
        .then((response) => {
          console.log(response);
          return response;
        }) as Promise<ApiResponse>;
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            role: "bot",
            content: "I am a bot response",
          });
        }, 5000);
      });
    }
  }

  private constructApiUrl(message: string): string {
    return `${environment.apiUrl}?q=${message}`;
  }
}
