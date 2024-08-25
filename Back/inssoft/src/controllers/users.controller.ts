import { Controller, Post, Body, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../services/user.service';
import { CreateUserDto } from '../dtos/user.dto';

@Controller('users')
export class UsersController {
	private readonly logger = new Logger(UsersController.name);

	constructor(private readonly usersService: UsersService) {}

	@Post()
	async create(@Body() createUserDto: CreateUserDto) {
		try {
			const result = await this.usersService.create(createUserDto);
			this.logger.log(`User created successfully: ${JSON.stringify(result)}`);
			return result;
		} catch (error) {
			this.logger.error(`Error creating user: ${error.message}`, error.stack);
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
