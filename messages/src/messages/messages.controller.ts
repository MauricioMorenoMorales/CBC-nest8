import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
	messagesService: MessagesService;
	constructor() {
		// Service is creating its own dependencies
		//! DONT DO THIS ON REAL APPS
		this.messagesService = new MessagesService();
	}
	@Get()
	public listMessages() {
		return this.messagesService.findAll();
	}

	@Post()
	public createMessage(@Body() body: CreateMessageDto) {
		return this.messagesService.createOne(body.content);
	}

	@Get('/:id')
	public getMessage(@Param('id') id: string) {
		return this.messagesService.findOne(id);
	}
}
