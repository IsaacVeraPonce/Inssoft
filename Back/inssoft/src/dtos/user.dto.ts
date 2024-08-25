// user.dto.ts
import { IsString, IsEmail, MinLength, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsNotEmpty({ message: 'Username cannot be empty' })
	username: string;

	@IsString()
	@IsNotEmpty({ message: 'First name cannot be empty' })
	first_name: string;

	@IsString()
	@IsOptional()
	last_name?: string;

	@IsEmail()
	@IsNotEmpty({ message: 'Last name cannot be empty' })
	email: string;

	@IsString()
	@IsOptional()
	phone?: string;

	@IsString()
	@MinLength(6, { message: 'Password must have at least 6 characters' })
	@IsNotEmpty({ message: 'Password cannot be empty' })
	password: string;
}
