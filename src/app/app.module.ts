import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ChatComponent } from "./components/chat/chat.component";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faGears, faUser, fas } from "@fortawesome/free-solid-svg-icons";
import { FormsModule } from "@angular/forms";
import { ChatMessageComponent } from "./components/chat-message/chat-message.component";
import { ChatHistoryComponent } from "./components/saved-chats/chat-history.component";
import { SavedChatComponent } from "./components/saved-chat/saved-chat.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    ChatMessageComponent,
    ChatHistoryComponent,
    SavedChatComponent,
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
  }
}
