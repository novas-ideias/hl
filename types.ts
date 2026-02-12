
export enum AppView {
  HOME = 'HOME',
  CATALOG = 'CATALOG',
  DETAIL = 'DETAIL',
  ASSISTANT = 'ASSISTANT'
}

export interface Product {
  id: string;
  ref: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
  specs: {
    composition: string;
    resistance: string;
    origin: string;
  };
  labels?: string[];
}
