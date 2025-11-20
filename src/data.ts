import { Car, StartStep, BlogPost } from './types';

export const cars: Car[] = [
  {
    id: 1,
    name: 'Toyota RAV4',
    year: 2021,
    image: '/assets/images/car-1.jpg',
    price: 440,
    features: {
      people: 4,
      fuel: 'Hybrid',
      mileage: '6.1km / 1-litre',
      transmission: 'Automatic'
    }
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    year: 2019,
    image: '/assets/images/car-2.jpg',
    price: 350,
    features: {
      people: 4,
      fuel: 'Gasoline',
      mileage: '8.2km / 1-litre',
      transmission: 'Automatic'
    }
  },
  {
    id: 3,
    name: 'Volkswagen T-Cross',
    year: 2020,
    image: '/assets/images/car-3.jpg',
    price: 400,
    features: {
      people: 4,
      fuel: 'Gasoline',
      mileage: '5.3km / 1-litre',
      transmission: 'Automatic'
    }
  },
  {
    id: 4,
    name: 'Cadillac Escalade',
    year: 2020,
    image: '/assets/images/car-4.jpg',
    price: 620,
    features: {
      people: 4,
      fuel: 'Gasoline',
      mileage: '7.7km / 1-litre',
      transmission: 'Automatic'
    }
  },
  {
    id: 5,
    name: 'BMW 4 Series GTI',
    year: 2021,
    image: '/assets/images/car-5.jpg',
    price: 530,
    features: {
      people: 4,
      fuel: 'Gasoline',
      mileage: '7.6km / 1-litre',
      transmission: 'Automatic'
    }
  },
  {
    id: 6,
    name: 'BMW 4 Series',
    year: 2019,
    image: '/assets/images/car-6.jpg',
    price: 490,
    features: {
      people: 4,
      fuel: 'Gasoline',
      mileage: '7.2km / 1-litre',
      transmission: 'Automatic'
    }
  }
];

export const startSteps: StartStep[] = [
  {
    id: 1,
    iconClass: 'icon-1',
    title: 'Create a profile',
    text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure.'
  },
  {
    id: 2,
    iconClass: 'icon-2',
    title: 'Tell us what car you want',
    text: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose'
  },
  {
    id: 3,
    iconClass: 'icon-3',
    title: 'Match with seller',
    text: 'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
  },
  {
    id: 4,
    iconClass: 'icon-4',
    title: 'Make a deal',
    text: 'There are many variations of passages of Lorem available, but the majority have suffered alteration'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Opening of new offices of the company',
    image: '/assets/images/blog-1.jpg',
    badge: 'Company',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    id: 2,
    title: 'What cars are most vulnerable',
    image: '/assets/images/blog-2.jpg',
    badge: 'Repair',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    id: 3,
    title: 'Statistics showed which average age',
    image: '/assets/images/blog-3.jpg',
    badge: 'Cars',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    id: 4,
    title: 'What´s required when renting a car?',
    image: '/assets/images/blog-4.jpg',
    badge: 'Cars',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    id: 5,
    title: 'New rules for handling our cars',
    image: '/assets/images/blog-5.jpg',
    badge: 'Company',
    date: 'January 14, 2022',
    comments: 114
  }
];
