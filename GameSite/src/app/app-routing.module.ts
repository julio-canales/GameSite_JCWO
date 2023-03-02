import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RpsComponent } from './rps/rps.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

const routes: Routes = [
  { path: 'rps', component: RpsComponent },
  { path: '', component: HomeComponent},
  { path: 'tictactoe', component: TictactoeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }