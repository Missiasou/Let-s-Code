import { CardNovo } from "./cards.model";



export class CardsService{

    private card: CardNovo[] = [
        new CardNovo('Primeiro Titulo', 'descrição do primeiro titulo'),
        new CardNovo('Segundo Titulo', 'descrição 2')
    ];

    getCardTitle(){
        return this.card;
    }

    getCardDescription(){

    }
}