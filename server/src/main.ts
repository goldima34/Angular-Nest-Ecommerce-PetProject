import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;

  const config = new DocumentBuilder()
    .setTitle('Dima Golovaschuk PetProject')
    .setDescription('Rest API docs')
    .setVersion('1.0.0')
    .build();

  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(PORT);
}
bootstrap();
