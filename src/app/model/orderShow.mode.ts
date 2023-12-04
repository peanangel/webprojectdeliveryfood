// To parse this data:
//
//   import { Convert } from "./file";
//
//   const orderShow = Convert.toOrderShow(json);

export interface OrderShow {
  foodid:  number;
  orderid: number;
  image:   string;
  name:    string;
  price:   number;
  amount:  number;
  total:  number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOrderShow(json: string): OrderShow[] {
      return JSON.parse(json);
  }

  public static orderShowToJson(value: OrderShow[]): string {
      return JSON.stringify(value);
  }
}
