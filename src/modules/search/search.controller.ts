import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly _searchService: SearchService) {}

  @Get()
  searchText(@Query() query): Promise<any> {
    const results = this._searchService.searchvideo(query.search);

    return results;
  }
}
