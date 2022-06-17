import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { HomeComponent } from "./pages/home/home.component";
import { TeamComponent } from "./pages/team/team.component";

const routes: Routes =[
  {path: 'home',component: HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'team',component: TeamComponent},
  {path:'',redirectTo: 'home',pathMatch: 'full'} // redirigir al home directamente

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
}) 
export class AppRoutingModule{}