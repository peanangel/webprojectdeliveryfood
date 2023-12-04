// To parse this data:
//
//   import { Convert } from "./file";
//
//   const typefood = Convert.toTypefood(json);

export interface Typefood {
  typeid: number;
  type:   string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toTypefood(json: string): Typefood[] {
      return JSON.parse(json);
  }

  public static typefoodToJson(value: Typefood[]): string {
      return JSON.stringify(value);
  }
}



