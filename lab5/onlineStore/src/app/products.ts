export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  link:string;
  category:string;
  like:number;
}

export const products = [
  {
    id: 1,
    like:0,
    name: 'Apple AirPods 3',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h7b/46719105990686/apple-airpods-3-belyj-102667744-1.jpg',
    price: 96900,
    description: 'Color: White, Type: Headset, Type: Intra-channel,Connection: Wireless,Type of acoustic design: open,Mounting type: Without mounting, Active noise reduction system: No, Microphone: Yes',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item',
    category:'Electronics'
  },
  {
    id: 2,
    like:0,
    category:'Electronics',
    name: 'Apple MacBook Air 13 MGN93',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/h58/33271773593630/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg',
    price: 494990,
    description: 'Screen diagonal: 13.3 inch, processor: Apple M1, Graphics card: Apple M1, RAM size: 8 GB, Hard disk type: SSD, total storage capacity: 256 GB',
    rating:5,
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item'
  },
  {
    id: 3,
    like:0,
    name: 'Apple iPad 2021 10.2 64Gb Wi-Fi',
    category:'Electronics',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/hb6/48110926626846/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg',
    price: 159990,
    description: 'diagonal: 10.2 inch, screen resolution: 2160x1620, Screen manufacturing technology: TFT IPS, RAM size: 3 GB, Internal memory size: 64 GB, Battery capacity: 8686 match, Color: grey',
    rating:5,
    link:'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item'
  },
  {
    id: 4,
    like:0,
    category: 'Shoes',
    name: 'Home shoes TANAT 79013817 3965 gray 40-43',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/hde/65228317720606/tanat-79013817-3965-seryi-107382864-1.jpg',
    price: 2350,
    description: 'model: slippers\n' +
        'top material: polyester\n' +
        'season: year-round\n' +
        'size features: size to size',
    rating: 5,
    link:'https://kaspi.kz/shop/p/tanat-79013817-3965-seryi-40-43-107382867/?c=750000000#!/item'
  },
  {
    id: 5,
    like:0,
    category: 'Shoes',
    name: 'Nike STREETGATO DC8466-143 43.5',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h72/62036045266974/nike-dc8466-143-mul-tikolor-106224376-1.jpg',
    price: 63700,
    description: 'model: studs\n' +
        'upper material: genuine leather\n' +
        'season: year-round',
    rating: 0,
    link:'https://kaspi.kz/shop/p/nike-streetgato-dc8466-143-43-5-106224379/?c=750000000#!/item'
  },
  {
    id: 6,
    like:0,
    name: 'Loafers Alessio Nesca W2611598 black 40',
    category: 'Shoes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/hb9/66573023608862/lofery-alessio-nesca-w2611598-chernyi-107921108-1.jpg',
    price: 18990,
    description: 'model: loafers\n' +
        'upper material: genuine leather\n' +
        'season: year-round\n' +
        'heel height: 3.8 cm',
    rating: 0,
    link:'https://kaspi.kz/shop/p/lofery-alessio-nesca-w2611598-chernyi-40-107921118/?c=750000000#!/item'
  },
  {
    id: 7,
    like:0,
    category: 'Shoes',
    name: 'Sneakers FASHION 2021 brown 40',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/haa/67561830252574/fashion-2021-belyi-korichnevyi-108313980-1.jpg',
    price: 13500,
    description: 'model: sneakers\n' +
        'top material: artificial leather\n' +
        'season: demi-season\n' +
        'size features: small size by 1 size',
    rating: 4.7,
    link:'https://kaspi.kz/shop/p/fashion-2021-korichnevyi-40-108313981/?c=750000000#!/item'
  },
  {
    id: 8,
    like:0,
    name: 'ROOMY EVE Plus Robot Vacuum Cleaner white',
    category: 'Electronics',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h01/33199727411230/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-1-Container.jpg',
    price: 211535,
    description: 'cleaning type: dry and wet, dust collector capacity: 550 ml, water tank capacity: 250 ml, fine filter: Yes, Display availability: No, side brushes availability: Yes, Battery capacity: 5200 mAh, Color: White',
    rating: 5,
    link:'https://kaspi.kz/shop/p/roidmi-eve-plus-robot-vacuum-belyi-101000358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item'
  },
  {
    id: 9,
    like:0,
    name: 'iQibla M0220GE Smart Ring Black',
    category: 'Electronics',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/he1/63084235325470/smart-kolco-iqibla-m0220ge-cernyj-106790584-1.jpg',
    price: 20000,
    description: 'Compatibility: Android, Ring size: 20mm, Wireless interfaces: Bluetooth, Color: Black, Model: M0220GE',
    rating: 0,
    link:'https://kaspi.kz/shop/p/smart-kol-tso-iqibla-m0220ge-chernyi-106790584/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item'
  },
  {
    id: 10,
    like:0,
    name: 'Sneakers Toddler 6102 Children Grey 3',
    category: 'Shoes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/h70/49922640117790/toddler-6102-children-seryj-104407957-1.jpg',
    price: 21990,
    description: 'model: sneakers\n' +
        'upper material: genuine leather\n' +
        'season: demi-season, summer',
    rating: 5,
    link:'https://kaspi.kz/shop/p/toddler-6102-children-seryi-34-104407958/?c=750000000#!/item'
  },
  {
    id: 11,
    like:0,
    name: 'LIME 7655-643-451 blue 40',
    category: 'Clothes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h31/68073225060382/lime-7655-643-451-goluboi-108523913-1.jpg',
    price: 1990,
    description: 'model: T-shirt\n' +
        'collar/neckline: round neckline\n' +
        'sleeves: short\n' +
        'composition: cotton\n' +
        'pattern: monochrome',
    rating: 0,
    link:'https://kaspi.kz/shop/p/lime-7655-643-451-goluboi-40-108523915/?c=750000000#!/item'
  },
  {
    id: 12,
    like:0,
    name: 'Tracksuit Good Knitwear SportFit 2022 blue 42',
    category: 'Clothes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/ha3/62617683787806/horosij-trikotaz-sportfit-2022-sinij-106530521-1.jpg',
    price: 21200,
    description: 'sport: universal\n' +
        'hood: Yes\n' +
        'composition: knitwear\n' +
        'equipment: sweatshirt, sports pants\n' +
        'season: demi-season',
    rating: 4,
    link:'https://kaspi.kz/shop/p/horoshii-trikotazh-sportfit-2022-sinii-42-106530531/?c=750000000#!/item'
  },
  {
    id: 13,
    like:0,
    name: 'Dress ETERNAL WOMEN ET090908 black 42 44',
    category: 'Clothes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h62/68521511223326/eternal-women-et090908-108706806-1jpg.jpg',
    price: 14990,
    description: 'model: jacket dress, casual dress\n' +
        'composition: polyester, , knitwear',
    rating: 0,
    link:'https://kaspi.kz/shop/p/eternal-women-et090908-chernyi-42-44-108246027/?c=750000000#!/item'
  },
  {
    id: 14,
    like:0,
    name: 'Men\'s shirt Koton 3WAM60021HW9C9 black L',
    category: 'Clothes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/h2b/68033297645598/koton-3wam60021hw9c9-108506540-1jpg.jpg',
    price: 4990,
    description: 'model: straight\n' +
        'collar/neck type: hooded\n' +
        'composition: cotton, , polyester',
    rating: 4,
    link:'https://kaspi.kz/shop/p/koton-3wam60021hw9c9-chernyi-l-108123436/?c=750000000#!/item'
  },
  {
    id: 15,
    like:0,
    name: 'Men\'s shirt Koton 3WAM60179HW7C9 green M',
    category: 'Clothes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/h0c/68033507622942/koton-3wam60179hw7c9-108506645-1jpg.jpg',
    price: 5490,
    description: 'model: insulated\n' +
        'collar/cut type: classic\n' +
        'composition: cotton, , polyester',
    rating: 0,
    link:'https://kaspi.kz/shop/p/koton-3wam60179hw7c9-zelenyi-m-108381964/?c=750000000#!/item'
  },
  {
    id: 16,
    like:0,
    name: 'Skin1004 Madagascar Centella serum 55 ml',
    category: 'Beauty And Health',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7c/h0e/50582570237982/syvorotka-s-ekstraktom-centelly-skin1004-madagascar-centella-ampoule-55ml-104765457-1.jpg',
    price: 4658,
    description: 'type: serum\n' +
        'action: lifting, ,smoothing, , moisturizing, , anti-inflammatory, , leveling, , regeneration, , soothes the skin, ,removal of swelling, ,increased elasticity\n' +
        'application area: for face\n' +
        'skin type: for all types\n' +
        'country of production: Korea',
    rating: 5,
    link:'https://kaspi.kz/shop/p/skin1004-madagascar-centella-syvorotka-55-ml-104765457/?c=750000000#!/item'
  },
  {
    id: 17,
    like:0,
    name: 'Skin1004 Madagascar Centella Toning Toner tonic 210 ml',
    category: 'Beauty And Health',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/hba/50574287241246/skin1004-madagascar-centella-toning-toner-tonik-210-ml-104762771-1.jpg',
    price: 6186,
    description: 'type: tonic\n' +
        'volume: 210 ml\n' +
        'application area: for face\n' +
        'age restrictions: 16+\n' +
        'skin type: for all types, ,oily, ,mature, ,combined, ,normal, ,problematic, ,dry, ,sensitive\n' +
        'country of production: Korea',
    rating: 5,
    link:'https://kaspi.kz/shop/p/skin1004-madagascar-centella-toning-toner-tonik-210-ml-104762771/?c=750000000#!/item'
  },
  {
    id: 18,
    like:0,
    name: 'Herbal Essences Deep Recovery Moroccan Argan Oil Shampoo 400 ml',
    category: 'Beauty And Health',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/h1f/65289788850206/herbal-essences-marokkanskoe-arganovoe-maslo-400-ml-100224196-1.jpg',
    price: 1930,
    description: 'action: moisturizing, ,protection\n' +
        'features: for daily use\n' +
        'purpose: for women\n' +
        'hair type: for all types, ,thin and damaged\n' +
        'country of production: Russia',
    rating: 5,
    link:'https://kaspi.kz/shop/p/herbal-essences-glubokoe-vosstanovlenie-marokkanskoe-arganovoe-maslo-shampun-400-ml-100224196/?c=750000000#!/item'
  },
  {
    id: 19,
    like:0,
    name: 'LANVIN Jeanne EDP Eau de Parfum 100 ml',
    category: 'Beauty And Health',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h81/31759081177118/lanvin-jeanne-edp-100-ml-17301088-1.jpg',
    price: 19922,
    description: 'type: EDP eau de Parfum\n' +
        'volume: 100 ml\n' +
        'gender: for women\n' +
        'family: fruit\n' +
        'brand country: France',
    rating: 5,
    link:'https://kaspi.kz/shop/p/lanvin-jeanne-parfjumernaja-voda-edp-100-ml-17301088/?c=750000000#!/item'
  },
  {
    id: 20,
    like:0,
    name: 'CHANEL Coco Mademoiselle EDP Eau de Parfum 35 ml',
    category: 'Beauty And Health',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/haf/32200516665374/chanel-coco-mademoiselle-edp-35-ml-17303003-1.jpg',
    price: 46995,
    description: 'type: EDP eau de Parfum\n' +
        'volume: 35 ml\n' +
        'gender: for women\n' +
        'family: oriental, ,floral\n' +
        'brand country: France',
    rating: 5,
    link:'https://kaspi.kz/shop/p/chanel-coco-mademoiselle-parfjumernaja-voda-edp-35-ml-17303003/?c=750000000&tab=reviews#!/item'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/