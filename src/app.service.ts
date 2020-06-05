import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    let data = {
      name: 'Vic Chen',
      age: 30,
      sex: 2,
      avatar: 'https://www.baidu.com'
    };
    return data;
  }
}
