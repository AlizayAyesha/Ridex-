export interface Car {
  id: number;
  name: string;
  year: number;
  image: string;
  price: number;
  features: {
    people: number;
    fuel: string;
    mileage: string;
    transmission: string;
  };
}

export interface Step {
  id: number;
  title: string;
  text: string;
}

export interface BlogPost {
  id: number;
  title: string;
  image: string;
  badge: string;
  date: string;
  comments: number;
}

export interface StartStep {
  id: number;
  iconClass: string;
  title: string;
  text: string;
  link?: string;
}
