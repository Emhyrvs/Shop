export interface Product {
  id: string; // TypeScript does not have a native Guid type; typically, a GUID is represented as a string
  code: string;
  name: string;
  price: number;

}
