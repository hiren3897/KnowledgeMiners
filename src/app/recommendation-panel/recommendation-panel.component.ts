import { Component, ChangeDetectionStrategy, OnInit, Output, Input } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


const purfumes = [{
  id: 1,
  categories: [{
    Catogery: 'Citrus',
    scents: [
      {image: 'assets/images/Citrus/FR1.jpg', description: 'Name: ACQUA DI GIÒ EAU DE TOILETTE'},
      {image: 'assets/images/Citrus/FR-Citrus-2.jpg', description: 'Name: FRESH | Citron de Vigne'},
      {image: 'assets/images/Citrus/FRCITRUS-3.jpg', description: 'Name: Maison Francis Kurkdjian'},
      {image: 'assets/images/Citrus/FRCITRUS-4.jpg', description: 'Name: Ck One Eau De Toilette'},
      {image: 'assets/images/Citrus/FRCITRUS-5.jpg', description: 'LITTLE ITALY'},
    ],
    type: "['Citrus (Zesty or tangy notes like mandarins or limes)']",
  }, {
    Catogery: 'Floral',
    scents: [
      {image: 'assets/images/Floral/FRFLORAL-1.png', description: ''},
      {image: 'assets/images/Floral/FRFLORAL-2.png', description: ''},
      {image: 'assets/images/Floral/FRFLORAL-3.png', description: ''},
      {image: 'assets/images/Floral/FRFLORAL-4.png', description: ''},
      {image: 'assets/images/Floral/FRFLORAL-5.png', description: ''},
      {image: 'assets/images/Floral/FRFLORAL-6.png', description: ''},
    ],
    type: "['Floral (Smells like fresh-cut flowers - imagine rose, lily or jasmine)']",
  },{
    Catogery: 'Fruity',
    scents: [
      {image: 'assets/images/Fruity/FRFRUITY-1.jpg', description: 'Name: Etro Musk Eau de Parfum'},
      {image: 'assets/images/Fruity/FRFRUITY-2.jpg', description: 'Name: Dolce & Gabbana The Only One 2 Eau de Parfum'},
      {image: 'assets/images/Fruity/FRFRUITY-3.jpg', description: 'Name: ELIE SAAB Girl of Now Forever Eau de Parfum'},
      {image: 'assets/images/Fruity/FRFRUITY-4.jfif', description: 'Name: Tom Ford LOST CHERRY NO. T6-LOSTCHERRY'},
      {image: 'assets/images/Fruity/FRFRUITY-5.png', description: 'Name: CHANEL CHANCE EAU TENDRE'},
      {image: 'assets/images/Fruity/FRFRUITY-6.jpg', description: 'Name: HERMÈS Eau de Rhubarbe Écarlate'},
    ],
    type: "['Fruity (Sweet, edible and tropical like peach, pear and apple)']",
  },{
    Catogery: 'Green',
    scents: [
      {image: 'assets/images/Green/FRGREEN-1.jpg', description: 'Name : HERMÈS Un Jardin Sur Le Toit Eau de Toilette'},
      {image: 'assets/images/Green/FRGREEN-2.jpg', description: 'Name: CLINIQUE Happy For Men Eau de Cologne'},
      {image: 'assets/images/Green/FRGREEN-3.jpg', description: 'Name : Jaguar Green Eau de Toilette'},
      {image: 'assets/images/Green/FRGREEN-4.jpg', description: 'Name : LANVIN Eclat d"Arpege Eau de Parfum'},
      {image: 'assets/images/Green/FRGREEN-5.jpg', description: 'Name : DKNY Be Delicious Shimmer & Shine Eau de Toilette'},
      {image: 'assets/images/Green/FRGREEN-6.jpg', description: 'Name : CACHAREL Noa Eau de Toilette'},
    ],
    type: "['Green (Smells of freshly mowed lawns and crushed green leaves)']",
  },{
    Catogery: 'Oceanic',
    scents: [
      {image: 'assets/images/Oceanic/FROCEANIC-1.jpg', description: 'Name : BVLGARI Aqva Atlantiqve Eau de Toilette'},
      {image: 'assets/images/Oceanic/FROCEANIC-2.jpg', description: 'Name : RALPH LAUREN Polo Deep Blue Eau de Parfum'},
      {image: 'assets/images/Oceanic/FROCEANIC-3.jpg', description: 'Name : ARMANI Acqua Di Gio Profumo Eau de Parfum'},
      {image: 'assets/images/Oceanic/FROCEANIC-4.jpg', description: 'Name : ANNA SUI Romantica Exotica Eau de Toilette'},
      {image: 'assets/images/Oceanic/FROCEANIC-5.jpg', description: 'Name : KATE SPADE NEW YORK TRULY dazzling Eau de Toilette'},
      {image: 'assets/images/Oceanic/FROCEANIC-6.jpg', description: 'Name : HERMÈS Eau des Merveilles Eau de Toilette'},
    ],
    type: "['Oceanic (Aquatic scents that smell of sea spray or rain mixed with oceanic notes)']",
  },{
    Catogery: 'Oriental',
    scents: [
      {image: 'assets/images/Oriental/FRORIENTAL-1.jpg', description: 'Name: COMME DES GARÇONS Floriental Eau de Parfum'},
      {image: 'assets/images/Oriental/FRORIENTAL-2.jpg', description: 'Name: TOM FORD Tom Ford Noir Eau de Parfum'},
      {image: 'assets/images/Oriental/FRORIENTAL-3.jpg', description: 'Name:  MUGLER A*Men Eau de Toilette Refillable'},
      {image: 'assets/images/Oriental/FRORIENTAL-4.jpg', description: 'Name: VERSACE Oud Oriental Eau de Parfum'},
      {image: 'assets/images/Oriental/FRORIENTAL-5.jpg', description: 'Name: HUGO BOSS Boss Femme Eau de Parfum'},
      {image: 'assets/images/Oriental/FRORIENTAL-6.jpg', description: 'Name: ELIZABETH ARDEN Red Door Eau de Toilette Gift Set'},
    ],
    type: "['Oriental (Sweet, warm notes like cinnamon, vanilla and musk)']",
  },{
    Catogery: 'Spicy',
    scents: [
      {image: 'assets/images/Spicy/FRSPICY-1.jpg', description: 'Name: TOMMY HILFIGER Tommy Into the Surf Eau de Toilette'},
      {image: 'assets/images/Spicy/FRSPICY-2.jpg', description: 'Name: RALPH LAUREN Safari Eau de Toilette'},
      {image: 'assets/images/Spicy/FRSPICY-3.jpg', description: 'Name : NARCISO RODRIGUEZ For Him Bleu Noir Eau de Toilette'},
      {image: 'assets/images/Spicy/FRSPICY-4.jpg', description: 'Name : DIESEL Fuel For Life Unlimited Eau de Parfum.'},
      {image: 'assets/images/Spicy/FRSPICY-5.jpg', description: 'Name : DIOR Dolce Vita Eau de Toilette'},
      {image: 'assets/images/Spicy/FRSPICY-6.jpg', description: 'Name : ESTÉE LAUDER Cinnabar 2015 Eau de Parfum'},
    ],
    type: "['Spicy (raw fresh aroma of cardamom, sage or saffron)']",
  },{
    Catogery: 'Woody',
    scents: [
      {image: 'assets/images/Woody/FRWOOD-1.jpg', description: 'Name : MICHAEL KORS Sexy Ruby Eau de Parfum'},
      {image: 'assets/images/Woody/FRWOOD-2.jpg', description: 'Name : JIMMY CHOO Jimmy Choo Eau de Parfum Gift Set'},
      {image: 'assets/images/Woody/FRWOOD-3.jpg', description: 'Name : ARMANI Si Eau de Parfum Gift Set'},
      {image: 'assets/images/Woody/FRWOOD-4.jpg', description: 'Name : DUNHILL Century Eau de Parfum'},
      {image: 'assets/images/Woody/FRWOOD-5.jpg', description: 'Name : MICHAEL BUBLÉ Pour Homme Eau de Parfum'},
      {image: 'assets/images/Woody/FRWOOD-6.jpg', description: 'Name : BVLGARI Man In Black Eau de Toilette'},
    ],
    type: "['Woody [Chypre] (Aromatic scents like cedar-wood, sandalwood, bergamot or vetiver)']",
  }]
}]

@Component({
  selector: 'app-recommendation-panel',
  templateUrl: './recommendation-panel.component.html',
  styleUrls: ['./recommendation-panel.component.css']
})
export class RecommendationPanelComponent implements OnInit {
  categorys = purfumes[0].categories;
  category;
  prediction:string
  getRec: string = "http://ec2-100-26-219-28.compute-1.amazonaws.com:3000/get_recommendation/420";
  constructor(private http:HttpClient,private router:Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.prediction = JSON.parse(params.special)
        this.category = this.categorys.filter(x => x.type === this.prediction)[0];
        console.log(this.category.type);
      }
    });
  
  }

  ngOnInit(): void {
    // console.log(this.categorys);
    this.getprediction();
  }

  getprediction() {
    this.http.get(this.getRec).subscribe(data => {
      var pred = data;
      
    })
  }
  logout() {
    this.router.navigate((['login']));
  }

}