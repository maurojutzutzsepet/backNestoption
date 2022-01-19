import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { map } from 'rxjs';

@Injectable()
export class SearchService {
  constructor(private _httpService: HttpService) {}
  private readonly apikey_youtubev3: string = process.env.API_KEY_YOUTUBE;
  private readonly url_youtubev3: string = process.env.YOUTUBE_V3;

  async searchvideo(q: string): Promise<any> {
    console.log('que trae la q', q);
    const results: any = await this._httpService
      .get(this.url_youtubev3, {
        params: { q, part: 'snippet', key: this.apikey_youtubev3 },
        headers: { Accept: 'application/json' },
      })
      .pipe(map((response) => response.data));

    return results;
  }
}
