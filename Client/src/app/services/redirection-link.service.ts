import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateLinkResponse } from '../models/create-link-response';
import { GetLinkResponse } from '../models/get-link-response';

@Injectable({
  providedIn: 'root'
})
export class RedirectionLinkService {
  constructor(private httpClient: HttpClient) { }

  public CreateLink(url: string): Observable<CreateLinkResponse> {
    return this.httpClient.put<CreateLinkResponse>(`api/link`, { sourceLink: url });
  }

  public GetLink(id: string): Observable<GetLinkResponse> {
    return this.httpClient.get<GetLinkResponse>(`api/link/${id}`);
  }
}
