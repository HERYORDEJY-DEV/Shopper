import { DHL, FedEx, USPS } from '../svg/DeliveryLogo';
import {
  mastercardCard,
  mastercardXml,
  verveCard,
  visaXml,
} from '../svg/Payment';

export const bio_data: object = {
  name: 'oyebode yusuf ayodeji',
  email: 'test@user.com',
  password: '12345abcde',
  dob: '17-10-1996',
  shippingAddresses: [
    {
      id: '090',
      address: '25, Ibrahim Taiwo Road',
      city: 'Ilorin',
      state: 'Kwara',
      country: 'Nigeria',
      zip: '20014',
      fullname: 'Shamsudeen',
    },
    {
      id: '091',
      address: '1, Dantata Close',
      city: 'Barkin-Gwari',
      state: 'Kano',
      country: 'Nigeria',
      zip: '20014',
      fullname: 'Ismail',
    },
    {
      id: '092',
      address: '25, Airport Road',
      city: 'Ikeja',
      state: 'Lagos',
      country: 'Nigeria',
      zip: '207314',
      fullname: 'Malik',
    },
    {
      id: '093',
      address: '42, Ibrahim Babangida Road',
      city: 'Zaria',
      state: 'Kaduna',
      country: 'Nigeria',
      zip: '20014',
      fullname: 'Shamsudeen',
    },
  ],
  paymentMethods: [
    {
      id: '1221',
      name: 'Oyebode Yusuf',
      number: '50002356356893632',
      expiration: '12/21',
      ccv: '123',
      type: 'visa',
    },
    {
      id: '1121',
      name: 'Oyebode Yusuf',
      number: '50002356356893632',
      expiration: '12/21',
      ccv: '123',
      type: 'visa',
    },
    {
      id: '2741',
      name: 'Oyebode Yusuf',
      number: '50002356356893632',
      expiration: '12/21',
      ccv: '123',
      type: 'mastercard',
    },
    {
      id: '1371',
      name: 'Oyebode Yusuf',
      number: '50002356356893632',
      expiration: '12/21',
      ccv: '123',
      type: 'mastercard',
    },
  ],
  myOrders: [
    {
      orderNo: 'qwerty',
      trackingNo: 'poiuy',
      quantity: '4',
      date: '15-12-2021',
      totalAmount: '1234',
      status: 'delivered',
      items: [
        {
          id: '001',
          quantity: '3',
          size: 'MD',
          color: 'red',
          name: 'TShirt',
          brand: 'Gucci',
          discounted: true,
          percentDiscount: '12',
          price: '3902',
        },
      ],
      information: {
        shippingAddress: '25, Ibrahim Taiwo Road, Ilorin, Kwara State, Nigeria',
        paymentMethod: {
          cardId: '1221',
          cardName: 'Oyebode Yusuf Ayodeji',
          cardNumber: '1234567891011123',
          cardCvv: '123',
          cardExpiration: '12/21',
        },
        deliveryMetod: {
          deliveryId: '112',
          deliveryName: 'FedEx',
          deliveryDays: '3',
          deliveryFee: '35',
        },
        promoCode: {
          name: 'Summer Sale',
          percentDiscount: '14',
          code: '1234abcd',
        },
      },
    },
    {
      orderNo: 'azerty',
      trackingNo: 'p45uy',
      quantity: '2',
      date: '11-10-2021',
      totalAmount: '1114',
      status: 'processing',
    },
    {
      orderNo: '12erty',
      trackingNo: 'p450y',
      quantity: '2',
      date: '1-9-2021',
      totalAmount: '1304',
      status: 'cancelled',
    },
  ],
  promoCodes: [
    { name: 'Summer Sale', percentDiscount: '14', code: '1234abcd' },
    { name: 'Eid Sale', percentDiscount: '11', code: '1234a00d' },
  ],
  myReviews: [
    {
      id: '0101',
      rating: '3',
      date: '10-01-2021',
      text: `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
      images: [],
    },
    {
      id: '0102',
      rating: '3',
      date: '14-11-2021',
      text: `I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.`,
      images: [],
    },
  ],
  settings: {
    notifications: {
      sale: true,
      newArrivals: 'false',
      deliveryStatusChanged: true,
    },
  },
};

export const categories: object[] = [
  { name: 'All' },
  { name: 'Men' },
  { name: 'Women' },
  { name: 'Boys' },
  { name: 'Girls' },
  { name: 'Kids' },
];

export const sizes: object[] = [
  { name: 'Extra Small', slug: 'XS', info: 'Sizes for babies' },
  { name: 'Small', slug: 'SM', info: 'Sizes for Kids' },
  { name: 'Medium', slug: 'MD', info: 'Sizes for Teens' },
  { name: 'Large', slug: 'LG', info: 'Sizes for Adults' },
  { name: 'Extra Large', slug: 'XL', info: 'Sizes for Fat' },
];

export const color: object[] = [
  { name: 'teal' },
  { name: 'black', code: '#000' },
  { name: 'gray' },
  { name: 'red' },
  { name: 'blue' },
  { name: 'purple' },
  { name: 'green' },
  { name: 'orange' },
  { name: 'yellow' },
  { name: 'brown' },
  { name: 'gray' },
  { name: 'grey' },
  { name: 'white', code: '#fff' },
];

export const subCategories: object[] = [
  { name: 'New', imageSource: require('../assets/images/newCategory.png') },
  {
    name: 'Clothes',
    imageSource: require('../assets/images/clothesCategory.png'),
  },
  { name: 'Shoes', imageSource: require('../assets/images/shoesCategory.png') },
  {
    name: 'Accessories',
    imageSource: require('../assets/images/accessoriesCategory.png'),
  },
];

export const clothes: object[] = [
  { name: 'Tops' },
  { name: 'Shirts & Blouses' },
  { name: 'Cardigans & Trousers' },
  { name: 'Knitwear' },
  { name: 'Blazers' },
  { name: 'Outerwear' },
  { name: 'Pants' },
  { name: 'Jeans' },
  { name: 'Short' },
  { name: 'Skirt' },
  { name: 'Dresses' },
];

export const womensTop: object[] = [
  { name: 'TShirt' },
  { name: 'Crop Tops' },
  { name: 'Sleeveless' },
  { name: 'Pullover' },
  { name: 'Shirt' },
  { name: 'Blouse' },
  { name: 'Light Blouse' },
  { name: 'Evening Dress' },
  { name: 'Sport Wear' },
];

export const brand: object[] = [
  { name: 'adidas' },
  { name: 'adidas originals' },
  { name: 'Blend' },
  { name: 'Boutique Moschino' },
  { name: 'Champion' },
  { name: 'Diesel' },
  { name: 'Jack & Jones' },
  { name: 'Naf Naf' },
  { name: 'Red Valentino' },
  { name: 's.Oliver' },
];

export const selectedBrand: object[] = [
  { name: 'adidas originals' },
  { name: 'Diesel' },
  { name: 'Jack & Jones' },
  { name: 'Red Valentino' },
  { name: 's.Oliver' },
  { name: 'Champion' },
  { name: 'Naf Naf' },
];

export const promoCodes: object[] = [
  {
    id: '893',
    name: 'Summer Sale',
    percentDiscount: '15',
    code: '123abc456',
    expiration: '26',
    image: '',
  },
  {
    id: '833',
    name: 'Eid Sale',
    percentDiscount: '19',
    code: '12ydbc456',
    expiration: '6',
    image: '',
  },
  {
    id: '593',
    name: 'Independence Day Sale',
    percentDiscount: '35',
    code: '833abc456',
    expiration: '10',
    image: '',
  },
  {
    name: 'Ramadan Sale',
    percentDiscount: '50',
    code: '833a3g256',
    expiration: '5 ',
    image: '',
  },
  {
    id: '803',
    name: 'Easter Day Sale',
    percentDiscount: '15',
    code: '853a6c456',
    expiration: '2',
    image: '',
  },
  {
    id: '800',
    name: "Mother's Day Sale",
    percentDiscount: '35',
    code: '833tg4456',
    expiration: '10',
    image: '',
  },
];

export const deliveryMethod: object[] = [
  {
    id: '01',
    name: 'FedEx',
    minDays: '3',
    maxDays: '6',
    charge: '43',
    logo: FedEx,
  },
  {
    id: '02',
    name: 'DHL',
    minDays: '4',
    maxDays: '5',
    charge: '41',
    logo: DHL,
  },
  {
    id: '03',
    name: 'USPS',
    minDays: '6',
    maxDays: '8',
    charge: '23',
    logo: USPS,
  },
];

export const colors: object[] = [
  { name: 'red' },
  { name: 'blue' },
  { name: 'green' },
  { name: 'brown' },
];

export const products: object[] = [
  {
    id: '001',
    name: 'Crop Top',
    brand: 'Givenchy',
    colors: [
      { name: 'red' },
      { name: 'blue' },
      { name: 'green' },
      { name: 'brown' },
    ],
    sizes: [
      { name: 'Medium', slug: 'MD' },
      { name: 'Large', slug: 'LG' },
      { name: 'Extra Large', slug: 'XL' },
    ],
    ratings: [
      { star: '4', number: '44' },
      { star: '2', number: '31' },
      { star: '1', number: '10' },
    ],
    reviews: [
      {
        id: '0101',
        name: 'Bello Musa',
        rating: '3',
        date: '10-01-2021',
        text: `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
        images: [],
      },
      {
        id: '0102',
        name: 'Bello Issa',
        rating: '3',
        date: '14-11-2021',
        text: `I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.`,
        images: [],
      },
    ],
    discounted: true,
    percentDiscount: '15',
    price: '3000',
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide fill trimed',
  },

  {
    id: '002',
    name: 'Crop Top',
    brand: 'Givenchy',
    colors: [
      { name: 'red' },
      { name: 'blue' },
      { name: 'green' },
      { name: 'brown' },
    ],
    sizes: [
      { name: 'Medium', slug: 'MD' },
      { name: 'Large', slug: 'LG' },
      { name: 'Extra Large', slug: 'XL' },
    ],
    ratings: [
      { star: '4', number: '44' },
      { star: '2', number: '31' },
      { star: '1', number: '10' },
    ],
    reviews: [
      {
        id: '0101',
        name: 'Bello Musa',
        rating: '3',
        date: '10-01-2021',
        text: `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
        images: [],
      },
      {
        id: '0102',
        name: 'Bello Issa',
        rating: '3',
        date: '14-11-2021',
        text: `I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.`,
        images: [],
      },
    ],
    discounted: true,
    percentDiscount: '15',
    price: '3000',
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide fill trimed',
  },

  {
    id: '003',
    name: 'Crop Top',
    brand: 'Givenchy',
    colors: [
      { name: 'red' },
      { name: 'blue' },
      { name: 'green' },
      { name: 'brown' },
    ],
    sizes: [
      { name: 'Medium', slug: 'MD' },
      { name: 'Large', slug: 'LG' },
      { name: 'Extra Large', slug: 'XL' },
    ],
    ratings: [
      { star: '4', number: '44' },
      { star: '2', number: '31' },
      { star: '1', number: '10' },
    ],
    reviews: [
      {
        id: '0101',
        name: 'Bello Musa',
        rating: '3',
        date: '10-01-2021',
        text: `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
        images: [],
      },
      {
        id: '0102',
        name: 'Bello Issa',
        rating: '3',
        date: '14-11-2021',
        text: `I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.`,
        images: [],
      },
    ],
    discounted: true,
    percentDiscount: '15',
    price: '3000',
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide fill trimed',
  },

  {
    id: '004',
    name: 'Crop Top',
    brand: 'Givenchy',
    colors: [
      { name: 'red' },
      { name: 'blue' },
      { name: 'green' },
      { name: 'brown' },
    ],
    sizes: [
      { name: 'Medium', slug: 'MD' },
      { name: 'Large', slug: 'LG' },
      { name: 'Extra Large', slug: 'XL' },
    ],
    ratings: [
      { star: '4', number: '44' },
      { star: '2', number: '31' },
      { star: '1', number: '10' },
    ],
    reviews: [
      {
        id: '0101',
        name: 'Bello Musa',
        rating: '3',
        date: '10-01-2021',
        text: `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
        images: [],
      },
      {
        id: '0102',
        name: 'Bello Issa',
        rating: '3',
        date: '14-11-2021',
        text: `I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.`,
        images: [],
      },
    ],
    discounted: true,
    percentDiscount: '15',
    price: '3000',
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide fill trimed',
  },

  {
    id: '005',
    name: 'Crop Top',
    brand: 'Givenchy',
    colors: [
      { name: 'red' },
      { name: 'blue' },
      { name: 'green' },
      { name: 'brown' },
    ],
    sizes: [
      { name: 'Medium', slug: 'MD' },
      { name: 'Large', slug: 'LG' },
      { name: 'Extra Large', slug: 'XL' },
    ],
    ratings: [
      { star: '4', number: '44' },
      { star: '2', number: '31' },
      { star: '1', number: '10' },
    ],
    reviews: [
      {
        id: '0101',
        name: 'Bello Musa',
        rating: '3',
        date: '10-01-2021',
        text: `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
        images: [],
      },
      {
        id: '0102',
        name: 'Bello Issa',
        rating: '3',
        date: '14-11-2021',
        text: `I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.`,
        images: [],
      },
    ],
    discounted: true,
    percentDiscount: '15',
    price: '3000',
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide fill trimed',
  },

  {
    id: '006',
    name: 'Crop Top',
    brand: 'Givenchy',
    colors: [
      { name: 'red' },
      { name: 'blue' },
      { name: 'green' },
      { name: 'brown' },
    ],
    sizes: [
      { name: 'Medium', slug: 'MD' },
      { name: 'Large', slug: 'LG' },
      { name: 'Extra Large', slug: 'XL' },
    ],
    ratings: [
      { star: '4', number: '44' },
      { star: '2', number: '31' },
      { star: '1', number: '10' },
    ],
    reviews: [
      {
        id: '0101',
        name: 'Bello Musa',
        rating: '3',
        date: '10-01-2021',
        text: `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
        images: [],
      },
      {
        id: '0102',
        name: 'Bello Issa',
        rating: '3',
        date: '14-11-2021',
        text: `I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.`,
        images: [],
      },
    ],
    discounted: true,
    percentDiscount: '15',
    price: '3000',
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide fill trimed',
  },
];

export const bagItem: object[] = [
  {
    id: '001',
    quantity: '3',
    size: 'MD',
    color: 'red',
    name: 'TShirt',
    brand: 'Gucci',
    discounted: true,
    percentDiscount: '12',
    price: '3902',
  },
];

export const starRating: object[] = [
  { name: 'Poor', rating: '1' },
  { name: 'Average', rating: '2' },
  { name: 'Good', rating: '3' },
  { name: 'VGood', rating: '4' },
  { name: 'Excellent', rating: '5' },
];

export const ratingChart: { star: string; people: string }[] = [
  { star: '5', people: '101' },
  { star: '4', people: '50' },
  { star: '3', people: '4' },
  { star: '2', people: '21' },
  { star: '1', people: '15' },
];

export const paymentCards: {
  id: string;
  type: string;
  background: string;
}[] = [
  {
    id: '5',
    type: 'mastercard',
    background: require('../assets/images/mastercardCard.png'),
  },
  {
    id: '6',
    type: 'visa',
    background: require('../assets/images/visaCard.png'),
  },
];

export const paymentCardBg: {} = {
  mastercard: require('../assets/images/mastercardCard.png'),
  visa: require('../assets/images/visaCard.png'),
};

export const paymentMethods: object[] = [
  {
    id: '1221',
    name: 'Oyebode Yusuf',
    number: '5000235635689363',
    expiration: '12/21',
    ccv: '123',
    type: 'visa',
  },
  {
    id: '1121',
    name: 'Oyebode Yusuf',
    number: '5000235356893632',
    expiration: '12/21',
    ccv: '123',
    type: 'visa',
  },
  {
    id: '2741',
    name: 'Oyebode Yusuf',
    number: '5000235635689332',
    expiration: '12/21',
    ccv: '123',
    type: 'mastercard',
  },
  {
    id: '1371',
    name: 'Oyebode Yusuf',
    number: '5000235635689332',
    expiration: '12/21',
    ccv: '123',
    type: 'mastercard',
  },
];

export const shippingAddresses: object[] = [
  {
    id: '090',
    address: '25, Ibrahim Taiwo Road',
    city: 'Ilorin',
    state: 'Kwara',
    country: 'Nigeria',
    zip: '20014',
    fullname: 'Shamsudeen',
  },
  {
    id: '091',
    address: '1, Dantata Close',
    city: 'Barkin-Gwari',
    state: 'Kano',
    country: 'Nigeria',
    zip: '20014',
    fullname: 'Ismail',
  },
  {
    id: '092',
    address: '25, Airport Road',
    city: 'Ikeja',
    state: 'Lagos',
    country: 'Nigeria',
    zip: '207314',
    fullname: 'Malik',
  },
  {
    id: '093',
    address: '42, Ibrahim Babangida Road',
    city: 'Zaria',
    state: 'Kaduna',
    country: 'Nigeria',
    zip: '20014',
    fullname: 'Shamsudeen',
  },
];

export const womenSizeInfo: {} = {
  XS: {
    def: `XS means Extra Small, which roughly translates to a woman's size 0-2 in most brands`,
    chest: `31.5 to 32.5" (80 to 82.5 cm)`,
    waist: `23 to 24" (58 to 60 cm)`,
    hips: `33.5 to 35 (85 to 90 cm)`,
  },
  SM: {
    def: `SM means Small, which roughly translates to a woman's size 4-6 in most brands`,
    chest: `33.5 to 34.5" (85 to 87 cm)`,
    waist: `25 to 26" (63.5 to 66 cm)`,
    hips: `36 to 37 (91 to 94 cm)`,
  },
  MD: {
    def: `MD means Medium, which roughly translates to a woman's size 8-10 in most brands`,
    chest: `35.5 to 37.5" (90 to 95 cm)`,
    waist: `27 to 28" (68.5 to 71 cm)`,
    hips: `38 to 39 (96.5 to 99 cm)`,
  },
  LG: {
    def: `LG means Extra Small, which roughly translates to a woman's size 12-14 in most brands`,
    chest: `38 to 39.5" (96.5 to 100 cm)`,
    waist: `29.5 to 31" (75 to 79 cm)`,
    hips: `40.5 to 42 (103 to 106.5 cm)`,
  },
  XL: {
    def: `XL means Extra Large, which roughly translates to a woman's size 16-18 in most brands`,
    chest: `40 to 42" (101.5 to 106.5 cm)`,
    waist: `31 to 33" (79 to 84 cm)`,
    hips: `42 to 44 (107 to 112 cm)`,
  },
  '2XL': {
    def: `2XL means Double Large or Extra, Extra Large, which roughly translates to a woman's size 18-20 in most brands`,
    chest: `44 to 46" (112 to 117 cm)`,
    waist: `35 to 37" (90 to 94 cm)`,
    hips: `46 to 48 (117 to 122 cm)`,
  },
  '3XL': {
    def: `3XL means Thriple Large or Extra, Extra, Extra Large, which roughly translates to a woman's size 22-24 (or larger) in most brands`,
    chest: `48 to 52" (112 to 127 cm)`,
    waist: `38 to 40" (96.5 to 102 cm)`,
    hips: `50 to 52 (127 to 132 cm)`,
  },
};

export const paymentCardIcon = {
  Mastercard: mastercardXml,
  Visa: visaXml,
};
