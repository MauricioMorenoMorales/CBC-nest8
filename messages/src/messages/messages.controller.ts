import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
	constructor(public messagesService: MessagesService) {}
	@Get()
	public listMessages() {
		return this.messagesService.findAll();
	}

	@Post()
	public createMessage(@Body() body: CreateMessageDto) {
		return this.messagesService.createOne(body.content);
	}

	@Get('/:id')
	public async getMessage(@Param('id') id: string) {
		const message = await this.messagesService.findOne(id);
		if (!message) throw new NotFoundException('Message not found');
		return message;
	}
}
