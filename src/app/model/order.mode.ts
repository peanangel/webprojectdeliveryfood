// To parse this data:
//
//   import { Convert } from "./file";
//
//   const order = Convert.toOrder(json);

export interface Order {
  id:      number;
  cusid:   number;
  date:    string;
  note:    string;
  address: string;
  status:  number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOrder(json: string): Order[] {
      return JSON.parse(json);
  }

  public static orderToJson(value: Order[]): string {
      return JSON.stringify(value);
  }
}
