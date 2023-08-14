import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutPageComponent } from "./pages/about/about.component";
import { ChatComponent } from "./components/chat/chat.component";
import { ContactUsPageComponent } from "./pages/contact-us/contact-us.component";
import { ServicesPageComponent } from "./pages/services/services.component";

const routes: Routes = [
  { path: "", component: ChatComponent },
  { path: "about", component: AboutPageComponent },
  { path: "contact-us", component: ContactUsPageComponent },
  { path: "services", component: ServicesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
