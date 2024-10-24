import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EmailDto {
    @IsEmail()
    @IsNotEmpty()
    recipient: string;

    // @IsEmail()
    // @IsNotEmpty()
    // sender: User;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    // @IsString()
    status?: string;

    // @IsJSON()
    // attachments?: JSON;

    //may have to add template and schedule
}
