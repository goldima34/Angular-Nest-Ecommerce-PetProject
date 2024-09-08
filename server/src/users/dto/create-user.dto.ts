import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'email@mail.com', description: 'User email' })
  readonly email: string;
  @ApiProperty({ example: '12345678', description: 'User password' })
  readonly password: string;
}
