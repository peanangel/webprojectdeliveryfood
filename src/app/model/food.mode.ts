// To parse this data:
//
//   import { Convert } from "./file";
//
//   const food = Convert.toFood(json);

export interface Food {
  foodid:      number;
  type:        string;
  name:        string;
  price:       number;
  image:       string;
  description: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toFood(json: string): Food[] {
      return JSON.parse(json);
  }

  public static foodToJson(value: Food[]): string {
      return JSON.stringify(value);
  }
}
