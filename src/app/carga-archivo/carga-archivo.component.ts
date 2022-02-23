import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-carga-archivo',
  templateUrl: './carga-archivo.component.html',
  styleUrls: ['./carga-archivo.component.scss']
})
export class CargaArchivoComponent {
  loadedFile: boolean = false;

  name: string = '';
  size: number = 0;
  type: string = '';

  kbToMb(kb: number): string {
  return (kb / 1024).toFixed(2);
  }

  onFileCharge(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);

    if (file) {
      
     if (file.name.split('.').slice(-1)[0] === 'csv'){

        const { name, size, type } = file;

        this.name = name;
        this.size = size;
        this.type = type;

        this.loadedFile = true;

      } else{
        alert(':(') 
      }
    }
  }

  onFileLoad() {
    console.log('File loaded');
  }
}




