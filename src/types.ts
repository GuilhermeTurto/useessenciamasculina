export type ProductCategory = "Azul" | "Preto" | "Cinza" | "Bege" | "Premium";

export interface Product {
  nome: string;
  preco: string;
  codigo: string;
  imagem: string;
  categoria: ProductCategory;
  destaque?: string;
}
