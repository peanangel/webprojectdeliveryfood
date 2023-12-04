// To parse this data:
//
//   import { Convert } from "./file";
//
//   const invoiceInfo = Convert.toInvoiceInfo(json);

export interface InvoiceInfo {
  id:       number;
  cusid:    number;
  username: string;
  date:     string;
  total:    number;
  status:   string;
  name:     string;
  phone:    string;
  address:  string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toInvoiceInfo(json: string): InvoiceInfo[] {
      return JSON.parse(json);
  }

  public static invoiceInfoToJson(value: InvoiceInfo[]): string {
      return JSON.stringify(value);
  }
}
