import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Roles } from '../role/decorators/role.decorator';
import { RoleGuard } from '../role/guards/role.guard';
import { RoleType } from '../role/roletype';
import { SearchService } from './search.service';

@ApiTags('Search Module')
@Controller('search')
export class SearchController {
  constructor(private readonly _searchService: SearchService) {}

  @UseGuards(AuthGuard(), RoleGuard)
  @Roles(RoleType.ADMIN, RoleType.GENERAL)
  @ApiBearerAuth('JWT-auth')
  @ApiQuery({ name: 'search' })
  @Get()
  searchText(@Query() query): Promise<any> {
    const results = this._searchService.searchvideo(query.search);

    return results;
  }
}
