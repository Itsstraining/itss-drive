import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';


async function bootstrap() {
  const key = require("../keys/admin-key.json")
  admin.initializeApp({
    credential: admin.credential.cert(key)
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
