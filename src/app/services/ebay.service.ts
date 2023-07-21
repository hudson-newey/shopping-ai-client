import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EbayService {
  private readonly appId = 'YOUR_APP_ID';
  private readonly apiUrl = 'https://api.ebay.com';

  constructor(private http: HttpClient) {}

  getFirstImageFromSearchTerm(searchTerm: string): Promise<string> {
    const endpoint = `${this.apiUrl}/buy/browse/v1/item_summary/search?q=${encodeURIComponent(searchTerm)}`;

    return this.http.get(endpoint, {
      headers: {
        'Authorization': `Bearer ${this.appId}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .toPromise()
      .then((data: any) => {
        const firstItem = data.itemSummaries[0];
        const firstImage = firstItem.image.imageUrl;
        return firstImage;
      })
      .catch(error => {
        console.error('Error:', error);
        return null;
      });
  }
}
