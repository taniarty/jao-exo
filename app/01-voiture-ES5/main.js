//function voiture 

function Voiture(marque, prix, couleur){
    this.marque = marque;
    this.prix =  prix;
    this.couleur = couleur;
}

Voiture.prototype.start = function(){
    console.log(`vroum, vroum petite ${this.marque} de couleur ${this.couleur} au prix de ${this.prix}.`);
}

const renault = new Voiture('renault', 12000, 'noire');
renault.start();

const ds4 = new Voiture('ds', 20000, 'rouge');
ds4.start();
