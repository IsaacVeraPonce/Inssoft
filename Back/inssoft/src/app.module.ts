import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { User } from './entitys/user.entity';
import { UsersModule } from './modules/user.module';
import 'dotenv/config';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: parseInt(process.env.POSTGRES_PORT) || 5432,
			username: process.env.POSTGRES_USER || 'postgres',
			password: process.env.POSTGRES_PASSWORD || '',
			database: process.env.POSTGRES_DATABASE || 'inssoft',
			entities: [User],
			synchronize: true,
		}),
		UsersModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
