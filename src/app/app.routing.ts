import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//importar componentes a usar
import { HomeComponent } from './components/home.component';
import { ProductosListComponent } from './components/producto-list.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';
import { ErrorComponent } from './components/error.component';



const appRoutes: Routes = [
	{path: '', component: HomeComponent}, //ruta inicial
	{path: 'home', component: HomeComponent},
  	{path: 'productos', component: ProductosListComponent},
  	{path: 'crear-producto', component: ProductoAddComponent},
  	{path: 'producto/:id', component: ProductoDetailComponent},
  	{path: 'editar-producto/:id', component: ProductoEditComponent},
	{path: '**', component: ErrorComponent}//ruta de error
];

export const appRoutingProviders: any[]= []; //procedimiento que necesita angular para cargar el provider
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);//carga todas las rutas en el configurador inicial
