import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { PaginationComponent} from '../components/pagination.component';


@Component({
	selector:'productos-list',
	templateUrl:'../views/productos-list.html',
	providers: [ProductoService]
})
export class ProductosListComponent  {

	public titulo: string;
	public productos: Producto[];
	public confirmado;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService
		) {
		this.titulo = "Listado de productos";
		this.confirmado = null
	}
	ngOnInit(){
		console.log('se ha cargado en el listado');
		this.getProductos();

	}

	getProductos(){
		this._productoService.getProductos().subscribe(
			result => {

				if (result.code != 200) {
					console.log(result);
					
				}else{
					this.productos = result.date;
				}

			},
			error =>{
				console.log(<any>error);

			}

		);		
	}

	borrarConfirm(id){
		this.confirmado = id;
	}

	cancelarConfirm(){
		this.confirmado = null;
	}

	onDelete(id){

		this._productoService.deleteProducto(id).subscribe(
			response =>{
				if (response.code == 200) {
					this.getProductos();
				}else{
					alert('Error al borrar');
				}
			},
			error =>{
				console.log(<any>error);
			}
			);

	}
}