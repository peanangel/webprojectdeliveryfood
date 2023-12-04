// To parse this data:
//
//   import { Convert } from "./file";
//
//   const listOrder = Convert.toListOrder(json);

export interface ListOrder {
  id:       number;
  cusid:    number;
  username: string;
  date:     string;
  total:    number;
  status:   string;
  name:     string;
  address:  string;
  phone:    string;
  email:    string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toListOrder(json: string): ListOrder[] {
      return JSON.parse(json);
  }

  public static listOrderToJson(value: ListOrder[]): string {
      return JSON.stringify(value);
  }
}
