import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: process.env.,
      username: 'postgres',
      password: 'root',
      database: 'test',
      models: [],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
