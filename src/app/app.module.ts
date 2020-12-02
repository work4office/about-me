import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { HomeComponent } from "./components/home/home.component";
import { MatCardModule } from "@angular/material/card";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { AppRoutingModule } from "./app-routing.module";
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule
  ],
  declarations: [AppComponent, HomeComponent, LandingPageComponent, ExperienceComponent, SkillsComponent, EducationComponent, LanguagesComponent, ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
