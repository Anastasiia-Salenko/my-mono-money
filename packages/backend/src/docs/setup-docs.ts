import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DocsModule } from './docs.module';
import { ArchInsightsService } from './services/arch-insights.service';

const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('My mono money API try 1')
    .setDescription('We stand with Ukraine πΊπ¦')
    .setVersion('1.0')
    .addTag('Authentication')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'jwt-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/api', app, document);
};

export const setupDocs = (app: INestApplication) => {
  const archService = app.select(DocsModule).get(ArchInsightsService);
  archService.setApp(app);

  setupSwagger(app);
};
