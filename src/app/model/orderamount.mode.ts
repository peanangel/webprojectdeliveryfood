// To parse this data:
//
//   import { Convert } from "./file";
//
//   const orderamount = Convert.toOrderamount(json);

export interface Orderamount {
  orderid: number;
  foodid:  number;
  amount:  number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOrderamount(json: string): Orderamount[] {
      return JSON.parse(json);
  }

  public static orderamountToJson(value: Orderamount[]): string {
      return JSON.stringify(value);
  }
}
