import { Component, OnInit, Input  } from '@angular/core';
import Estudio from '../interfaces/estudios.interface';
import { EstudiosService } from '../services/estudios.service';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Auth } from '@angular/fire/auth';
import User from '../interfaces/user.interface';
import Doc from '../interfaces/doc.interface';
import Cita from '../interfaces/cita.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados-node',
  templateUrl: './resultados-node.component.html',
  styleUrls: ['./resultados-node.component.css']
})
export class ResultadosNodeComponent implements OnInit {
  // /resultss/:id/:nombre/:precio/:fecha/:name/:lastname
  id: string;
  nombre: string;
  precio: number;
  fecha: string;
  name: string;
  lastname: string;

  constructor(public activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe ( params => {
    this.id = params['id'];
    this.nombre = params['nombre'];
    this.precio = params['precio'];
    this.fecha = params['fecha'];
    this.name = params['name'];
    this.lastname = params['lastname'];


    })
  }

  ngOnInit(): void {
  }

}
