import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arraySanitas = [];

  constructor() {

    let urlFoto = '';
    
    for(let i=0; i<4000;i++){
      urlFoto = urlFoto.concat('https://i.picsum.photos/id/', i.toString(),'/500/500.jpg');
      this.arraySanitas.push({
        "id":i,
        "photo":urlFoto,
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      });
      urlFoto= "";
    }
    console.log(this.arraySanitas);
  }

}
