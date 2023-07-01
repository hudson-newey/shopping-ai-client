import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { environment } from 'src/app/environment';
import { Chat } from 'src/app/models/Chat';

@Component({
  selector: 'ais-chat-history',
  templateUrl: './chat-history.component.html',
})
export class ChatHistoryComponent {
  public constructor() {}

  public open: boolean = false;
  public brandName: string = environment.brandName;

  // TODO: when api is fully functional
  public get chatHistory(): Chat[] {
    return [
      new Chat(
        faker.lorem.sentences(3).split('. '),
        faker.lorem.sentences(3).split('. ')
      ),
      new Chat(
        faker.lorem.sentences(3).split('. '),
        faker.lorem.sentences(3).split('. ')
      ),
      new Chat(
        faker.lorem.sentences(3).split('. '),
        faker.lorem.sentences(3).split('. ')
      ),
      new Chat(
        faker.lorem.sentences(3).split('. '),
        faker.lorem.sentences(3).split('. ')
      ),
      new Chat(
        faker.lorem.sentences(3).split('. '),
        faker.lorem.sentences(3).split('. ')
      ),
    ];
  }
}
