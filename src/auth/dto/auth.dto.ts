import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'The username of the user',
    type: String,
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: 'The password of the user',
    type: String,
    required: false,
  })
  @IsString()
  password: string;
}

export class UpdateUserDto {
  @ApiProperty({
    description: 'The username of the user',
    type: String,
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: 'The new name of the user',
    type: String,
    required: false,
  })
  @IsString()
  newUsername: string;
}
