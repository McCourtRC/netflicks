export interface Show {
  _id: string;
  name: string;
  asset: Asset;
}

interface Asset {
  image: string;
  url: string;
}
