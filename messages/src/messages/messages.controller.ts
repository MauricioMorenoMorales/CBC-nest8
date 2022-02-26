import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  public listMessages() {}

  @Post()
  public createMessage() {}

  @Get('/:id')
  public getMessage() {}
}
