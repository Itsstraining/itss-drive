import { Body, Injectable, Req, Res } from '@nestjs/common';
import { async } from 'rxjs';
import { favorite } from './favorite.dto';
import { firestore } from 'firebase-admin';

@Injectable()
export class AppService {
  // favorite = []
  fs = firestore().collection('element');
  getHello(): string {
    return 'Hello World!';
  }
  async getByID(id){
    let result = (await this.fs.doc(id).get()).data();
    return result;
  }

  async getFavorite(){
    let docs = await this.fs.get();
    // let res = docs.docs.map((data)=>data.data());
    // return res;
    let data = [];
    docs.forEach((doc)=>{
      data.push(doc.data());
    }
    )
    return data;
  }

  // post file
  CreateFavorite(@Body() favorite: favorite, @Req() req, @Res() res) {
    // console.log(favorite);
    // this.favorite.push(favorite);
    // res.send('ok');
    this.fs.add(favorite);
    res.send('ok');
  }
}
