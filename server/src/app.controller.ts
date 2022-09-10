import { Bind, Body, Controller, Get, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { favorite } from './favorite.dto';
import { multerOptions } from './multerOption';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  getAll() {
    return this.appService.getFavorite();
  }
  

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  @Bind(UploadedFile())
  uploadFile(file) {
    console.log(file);
  }
  @Post('favorite')

  CreateFavorite(@Body() favorite: favorite, @Req() req, @Res() res) {
    console.log(favorite);
    res.send('ok');
  }
 }
