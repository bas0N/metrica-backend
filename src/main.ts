import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.enableCors({
  //   origin: [
  //     'http://localhost:3002',
  //     'http://localhost:3000',
  //     'http://localhost:3001',
  //     'https://metrica-app.vercel.app',
  //     'https://www.metrica-app.vercel.app',
  //     'https://metrica-landing.vercel.app/',
  //     'https://www.metrica-landing.vercel.app/',
  //   ],
  //   credentials: true,
  // });

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
