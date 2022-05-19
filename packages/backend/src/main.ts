import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './docs/setup-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
