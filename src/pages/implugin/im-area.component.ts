import { Component } from '@angular/core';

interface Dialogs {
  me: number;
  wts: string;
}

@Component({
  selector: 'im-area',
  templateUrl: 'im-area.html'
})
export class ImArea {

  public dialogs: Dialogs[];

  // newDia: any;
  // newDia = {
  //   me : 1
  // } ;
  // this.newDia.wts = '';

  constructor() {
    this.dialogs = [
      { me: 1, wts: 'Mr. Nice' },
      { me: 2, wts: 'Narco' },
      { me: 1, wts: 'Bombasto' },
      { me: 2, wts: 'Celeritas' },
      { me: 1, wts: 'Magneta' },
      { me: 1, wts: 'RubberMan' },
      { me: 2, wts: 'Dynama' },
      { me: 1, wts: 'Dr IQ' },
      { me: 2, wts: 'Magma' },
      { me: 2, wts: 'Tornado' }
    ];
  }

  addWhatISay(): void {
  }
}
