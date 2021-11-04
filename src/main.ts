import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
	//const app = await NestFactory.create(AppModule);
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	const port = process.env.PORT || 3004;
	await app.listen(port);
}
bootstrap();
