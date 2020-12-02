import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { EducationComponent } from "./components/education/education.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { HomeComponent } from "./components/home/home.component";
import { LanguagesComponent } from "./components/languages/languages.component";
import { SkillsComponent } from "./components/skills/skills.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "skills", component: SkillsComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "education", component: EducationComponent },
  { path: "languages", component: LanguagesComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
