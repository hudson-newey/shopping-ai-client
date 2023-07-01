import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatComponent } from "./components/chat/chat.component";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faGears, faMagnifyingGlass, faPlus, faUser, fas } from "@fortawesome/free-solid-svg-icons";
import { FormsModule } from "@angular/forms";
import { ChatMessageComponent } from "./components/chat-message/chat-message.component";
import { ChatHistoryComponent } from "./components/saved-chats/chat-history.component";
import { SavedChatComponent } from "./components/saved-chat/saved-chat.component";
import { ExamplesComponent } from "./components/examples/examples.component";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatMessageComponent,
    ChatHistoryComponent,
    SavedChatComponent,
    ExamplesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faUser);
    library.addIcons(faGears);
    library.addIcons(faBars);
    library.addIcons(faMagnifyingGlass);
    library.addIcons(faPlus);
  }
}
