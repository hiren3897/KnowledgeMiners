import { Component, ChangeDetectionStrategy, OnInit, Output, Input } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component'

const purfumes = [{
  id: 1,
  categories: [{
    Catogery: 'Citrus',
    scents: [
      {image: 'assets/images/Citrus/FR1.jpg', description: 'HEllo'},
      {image: 'assets/images/Citrus/FR-Citrus-2.jpg', description: ''},
      {image: 'assets/images/Citrus/FRCITRUS-3.jpg', description: ''},
      {image: 'assets/images/Citrus/FRCITRUS-4.jpg', description: ''},
      {image: 'assets/images/Citrus/FRCITRUS-5.jpg', description: ''},
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
      {image: 'assets/images/Fruity/FRFRUITY-1.jpg', description: ''},
      {image: 'assets/images/Fruity/FRFRUITY-2.jpg', description: ''},
      {image: 'assets/images/Fruity/FRFRUITY-3.jpg', description: ''},
      {image: 'assets/images/Fruity/FRFRUITY-4.jfif', description: ''},
      {image: 'assets/images/Fruity/FRFRUITY-5.png', description: ''},
      {image: 'assets/images/Fruity/FRFRUITY-6.jpg', description: ''},
    ],
    type: "['Fruity (Sweet, edible and tropical like peach, pear and apple)']",
  },{
    Catogery: 'Green',
    scents: [
      {image: 'assets/images/Green/FRGREEN-1.jpg', description: ''},
      {image: 'assets/images/Green/FRGREEN-2.jpg', description: ''},
      {image: 'assets/images/Green/FRGREEN-3.jpg', description: ''},
      {image: 'assets/images/Green/FRGREEN-4.jpg', description: ''},
      {image: 'assets/images/Green/FRGREEN-5.jpg', description: ''},
      {image: 'assets/images/Green/FRGREEN-6.jpg', description: ''},
    ],
    type: "['Green (Smells of freshly mowed lawns and crushed green leaves)']",
  },{
    Catogery: 'Oceanic',
    scents: [
      {image: 'assets/images/Oceanic/FROCEANIC-1.jpg', description: ''},
      {image: 'assets/images/Oceanic/FROCEANIC-2.jpg', description: ''},
      {image: 'assets/images/Oceanic/FROCEANIC-3.jpg', description: ''},
      {image: 'assets/images/Oceanic/FROCEANIC-4.jpg', description: ''},
      {image: 'assets/images/Oceanic/FROCEANIC-5.jpg', description: ''},
      {image: 'assets/images/Oceanic/FROCEANIC-6.jpg', description: ''},
    ],
    type: "['Oceanic (Aquatic scents that smell of sea spray or rain mixed with oceanic notes)']",
  },{
    Catogery: 'Oriental',
    scents: [
      {image: 'assets/images/Oriental/FRORIENTAL-1.jpg', description: ''},
      {image: 'assets/images/Oriental/FRORIENTAL-2.jpg', description: ''},
      {image: 'assets/images/Oriental/FRORIENTAL-3.jpg', description: ''},
      {image: 'assets/images/Oriental/FRORIENTAL-4.jpg', description: ''},
      {image: 'assets/images/Oriental/FRORIENTAL-5.jpg', description: ''},
      {image: 'assets/images/Oriental/FRORIENTAL-6.jpg', description: ''},
    ],
    type: "['Oriental (Sweet, warm notes like cinnamon, vanilla and musk)']",
  },{
    Catogery: 'Spicy',
    scents: [
      {image: 'assets/images/Spicy/FRSPICY-1.jpg', description: ''},
      {image: 'assets/images/Spicy/FRSPICY-2.jpg', description: ''},
      {image: 'assets/images/Spicy/FRSPICY-3.jpg', description: ''},
      {image: 'assets/images/Spicy/FRSPICY-4.jpg', description: ''},
      {image: 'assets/images/Spicy/FRSPICY-5.jpg', description: ''},
      {image: 'assets/images/Spicy/FRSPICY-6.jpg', description: ''},
    ],
    type: "['Spicy (raw fresh aroma of cardamom, sage or saffron)']",
  },{
    Catogery: 'Woody',
    scents: [
      {image: 'assets/images/Woody/FRWOOD-1.jpg', description: ''},
      {image: 'assets/images/Woody/FRWOOD-2.jpg', description: ''},
      {image: 'assets/images/Woody/FRWOOD-3.jpg', description: ''},
      {image: 'assets/images/Woody/FRWOOD-4.jpg', description: ''},
      {image: 'assets/images/Woody/FRWOOD-5.jpg', description: ''},
      {image: 'assets/images/Woody/FRWOOD-6.jpg', description: ''},
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
  constructor() { }

  ngOnInit(): void {
    console.log(this.categorys);
  }

}