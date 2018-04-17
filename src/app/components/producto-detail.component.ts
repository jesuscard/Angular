import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component({
	selector:'producto-detail',
	templateUrl:'../views/producto-detail.html',
	providers: [ProductoService ]
})

export class ProductoDetailComponent{
	public titulo: string;
	public producto:Producto;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService
	) {
		this.titulo = "Detalle del producto";
	}
	ngOnInit(){
		console.log('se ha cargado crear producto');
		this.getProducto();
	}
	getProducto(){
		this._route.params.forEach((params: Params)=>{
			let id = params['id'];
			this._productoService.getProducto(id).subscribe(
					response =>{
						console.log('respuesta', response);
						if (response.code == 200) {
							this.producto = response.date;
						}else{
							this._router.navigate(['productos']);
						}

					}, 
					error=>{
						console.log(<any>error);
					}
				);
		});
	}
}