import { Injectable } from "@angular/core";

const apiEndpoint = "http://localhost:8080/api/";

interface ApiResponse {
  role: string;
  content: string;
};

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public constructor() {}

  public get(message: string): Promise<ApiResponse> {
    const url = this.constructApiUrl(message);

    return fetch(url)
      .then((response) => response.json());
  }

  private constructApiUrl(message: string): string {
    return `${apiEndpoint}?q=${message}`;
  }
}
