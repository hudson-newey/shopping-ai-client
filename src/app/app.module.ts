import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatComponent } from "./components/chat/chat.component";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faGears, faLink, faMagnifyingGlass, faPlus, faUser, fas } from "@fortawesome/free-solid-svg-icons";
import { FormsModule } from "@angular/forms";
import { ChatMessageComponent } from "./components/chat-message/chat-message.component";
import { ChatHistoryComponent } from "./components/saved-chats/chat-history.component";
import { SavedChatComponent } from "./components/saved-chat/saved-chat.component";
import { ExamplesComponent } from "./components/examples/examples.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { faFacebook, faReddit, faTiktok, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { HttpClientModule } from "@angular/common/http";
import { ShareMenuComponent } from "./components/share-menu/share-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatMessageComponent,
    ChatHistoryComponent,
    SavedChatComponent,
    ExamplesComponent,
    ShareMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
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
    library.addIcons(faTwitter);
    library.addIcons(faReddit);
    library.addIcons(faLink);
  }
}
