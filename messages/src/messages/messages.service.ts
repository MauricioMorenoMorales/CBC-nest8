import { MessagesRepository } from './messages.repository';

export class MessagesService {
	messagesRepository: MessagesRepository;

	constructor() {
		// Service is creating its own dependencies
		//! DONT DO THIS ON REAL APPS
		this.messagesRepository = new MessagesRepository();
	}

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
