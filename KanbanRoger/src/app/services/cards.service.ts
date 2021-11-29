import { Injectable } from '@angular/core';
import { CardNovo } from '../model/cards.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

    private cardNovo: CardNovo[] = [
      new CardNovo('Construir um barco', 'Descrevendo oq ue for necessário para fazer o barco'),
      new CardNovo('pintar o barco', 'como pintar o barco'),
      new CardNovo('passear com o barco', 'Descrevendo como passear o barco'),
    ]
  constructor() { }

  getFazerCard(){
    return this.cardNovo;
  }
}
