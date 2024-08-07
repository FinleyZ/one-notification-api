import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailApiModule } from './email-api/email-api.module';
import { PrismaModule } from './prisma/prisma.module';




@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // MailerModule.forRoot({
    //   transport: 'smtps://user@domain.com:pass@smtp.domain.com',
    //   template: {
    //     dir: process.cwd() + '/templates/',
    //     adapter: new HandlebarsAdapter(),
    //     options: {
    //       strict: true,
    //     },
    //   },
    // }),
    EmailApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
