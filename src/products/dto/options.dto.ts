import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class OptionsDto {
    @IsOptional()
    @IsString()
    query: string = 'futbol';

    @IsOptional()
    @IsString()
    limit: string = '4';

    @IsOptional()
    @IsString()
    offset?: string = '0';
}
