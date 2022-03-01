import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
	constructor(public messagesRepository: MessagesRepository) {}

	public findOne(id: string) {
		return this.messagesRepository.findOne(id);
	}

	public findAll() {
		return this.messagesRepository.findAll();
	}

	public createOne(content: string) {
		return this.messagesRepository.create(content);
	}
}
