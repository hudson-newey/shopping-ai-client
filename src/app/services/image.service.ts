import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface UnsplashResponse {
  results: [
    {
      urls: {
        regular: string;
      }
    }
  ]
}

@Injectable({
  providedIn: "root"
})
export class ImageService {
  private accessKey = "redacted";

  constructor(private http: HttpClient) { }

  // async getFirstImage(query: string): Promise<string> {
    // const response = await this.http.get<UnsplashResponse>(`https://api.unsplash.com/search/photos?query=${query}&client_id=${this.accessKey}&per_page=1`).toPromise();
//
    // const firstImage = response?.results[0]?.urls?.regular;
    // return firstImage || "";
  // }
}
