import { Component, OnInit } from '@angular/core';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { error } from 'protractor';


@Component({
  selector: 'app-complejo',
  templateUrl: './complejo.page.html',
  styleUrls: ['./complejo.page.scss'],
})
export class ComplejoPage implements OnInit {


  complejos: Complejo[] = [];

  complejo = {
    idComplejo: 0,
    nombre: null,
    localidad: null,
    foto: null,
    estado: null,
    idAdmin: null
  };


  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {
    // if (document.referrer !== 'http://localhost:8100/login') {
    //   location.href = 'http://localhost:8100/login';
    // }
    this.complejo.idAdmin = this.apiServi.getAuxUsu();
    this.apiServi.getComplejoAdmin(this.complejo.idAdmin)
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      console.log('SERVICIO', resp);
    });

  }


  obtenerComplejoId() {
    this.apiServi.getComplejoId(this.complejo.idComplejo)
    .subscribe( resp => {
      console.log('EJECUTADO CON EXITO');
    });
  }
  crearComplejo() {

    const fileInput: any = document.getElementById('img');
    const file = fileInput.files[0];

    const imgPromise = this.getFileBlob(file);

    imgPromise.then(blob => {
      this.complejo.foto = blob;
      console.log("ESTE ES MI BLOB: " + blob);


      this.apiServi.postComplejo(this.complejo)
    .subscribe((data) => {
      this.complejos.push(this.complejo);
      this.complejo = {
        idComplejo: 0,
        nombre: null,
        localidad: null,
        foto: null,
        estado: null,
        idAdmin: null
      };
      window.alert('AGREGADO');
    },
    (error) => {
      console.log('ERROR: ', error);
    }
    );

    });

    

  }
  modificarComplejo() {
    this.apiServi.putComplejo(this.complejo.idComplejo, this.complejo)
    .subscribe((data) => {
      this.complejos.push(this.complejo);
      this.complejo = {
        idComplejo: 0,
        nombre: null,
        localidad: null,
        foto: null,
        estado: null,
        idAdmin: null
      };
      window.alert('ACTUALIZADO CON EXITO');
    },
    (error) => {
      console.log(error);
    }
    );
  }
  eliminarComplejo() {
    this.apiServi.deleteComplejo(this.complejo.idComplejo)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
  }



  getFileBlob(file) {
    const reader = new FileReader();
    return new Promise(function(resolve, reject) {

      reader.onload = (function(theFile) {
        return function(e) {
          resolve(e.target.result);
        };
      })(file);

      reader.readAsDataURL(file);

    });
  }



}
