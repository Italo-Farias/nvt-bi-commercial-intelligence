export type MonthKey = "ago/26" | "set/26" | "out/26";

export const monthData: Record<MonthKey, {
  revenue: number;
  pending: number;
  customers: number;
  overdue: number;
}> = {
  "ago/26": { revenue: 162480.35, pending: 11840.50, customers: 286, overdue: 14720.40 },
  "set/26": { revenue: 184250.75, pending: 9320.80, customers: 314, overdue: 12890.25 },
  "out/26": { revenue: 197840.20, pending: 12450.90, customers: 327, overdue: 9450.30 },
};

export const evolution = [
  { month: "Mai", value: 138420 },
  { month: "Jun", value: 146880 },
  { month: "Jul", value: 153240 },
  { month: "Ago", value: 162480 },
  { month: "Set", value: 184251 },
  { month: "Out", value: 197840 },
];

export const families = [
  { name: "Família Alfa", value: 54280.45, color: "#162b74" },
  { name: "Família Beta", value: 38140.20, color: "#2f55b8" },
  { name: "Família Gama", value: 30220.10, color: "#f29b23" },
  { name: "Família Delta", value: 26780.85, color: "#f7bf4b" },
  { name: "Família Épsilon", value: 19840.30, color: "#16a36a" },
  { name: "Outras", value: 28578.30, color: "#8b95ad" },
];

export const products = [
  { rank: 1, product: "Shampoo Profissional Neutro 5L", family: "Família Alfa", brand: "Marca Azul", quantity: 286, revenue: 21450.80 },
  { rank: 2, product: "Suplemento Premium 30 ml", family: "Família Beta", brand: "Marca Viva", quantity: 241, revenue: 18920.40 },
  { rank: 3, product: "Condicionador Profissional 5L", family: "Família Alfa", brand: "Marca Azul", quantity: 198, revenue: 16480.20 },
  { rank: 4, product: "Antipulgas Demonstrativo", family: "Família Gama", brand: "Marca Forte", quantity: 174, revenue: 14320.75 },
  { rank: 5, product: "Hidratante de Pelagem 1L", family: "Família Delta", brand: "Marca Pet", quantity: 153, revenue: 11980.60 },
  { rank: 6, product: "Complexo Vitamínico 60 ml", family: "Família Beta", brand: "Marca Viva", quantity: 147, revenue: 10450.30 },
  { rank: 7, product: "Sabonete Líquido Glicerinado", family: "Família Épsilon", brand: "Marca Leve", quantity: 132, revenue: 8920.90 },
  { rank: 8, product: "Spray Higienizador 500 ml", family: "Família Delta", brand: "Marca Pet", quantity: 119, revenue: 7840.50 },
];

export const sellers = [
  {
    name: "Consultor A",
    revenue: 42580.75,
    goal: 50000,
    customers: 68,
    commission: 1842.60,
    families: [
      { name: "Família Alfa", sold: 15120.30, goal: 17000 },
      { name: "Família Beta", sold: 9240.40, goal: 9000 },
      { name: "Família Gama", sold: 7140.05, goal: 8000 },
      { name: "Família Delta", sold: 6380.00, goal: 8000 },
      { name: "Família Épsilon", sold: 4700.00, goal: 8000 },
    ],
  },
  {
    name: "Consultor B",
    revenue: 38920.20,
    goal: 40000,
    customers: 61,
    commission: 1634.65,
    families: [
      { name: "Família Alfa", sold: 12840.20, goal: 14000 },
      { name: "Família Beta", sold: 8180.00, goal: 8000 },
      { name: "Família Gama", sold: 6980.00, goal: 7000 },
      { name: "Família Delta", sold: 5700.00, goal: 6000 },
      { name: "Família Épsilon", sold: 5220.00, goal: 5000 },
    ],
  },
  {
    name: "Consultor C",
    revenue: 36740.50,
    goal: 42000,
    customers: 57,
    commission: 1472.80,
    families: [
      { name: "Família Alfa", sold: 11820.50, goal: 15000 },
      { name: "Família Beta", sold: 7920.00, goal: 8000 },
      { name: "Família Gama", sold: 6640.00, goal: 7000 },
      { name: "Família Delta", sold: 5580.00, goal: 6000 },
      { name: "Família Épsilon", sold: 4780.00, goal: 6000 },
    ],
  },
  {
    name: "Consultor D",
    revenue: 29860.40,
    goal: 35000,
    customers: 49,
    commission: 1194.42,
    families: [
      { name: "Família Alfa", sold: 10220.40, goal: 12000 },
      { name: "Família Beta", sold: 6380.00, goal: 7000 },
      { name: "Família Gama", sold: 5280.00, goal: 6000 },
      { name: "Família Delta", sold: 4210.00, goal: 5000 },
      { name: "Família Épsilon", sold: 3770.00, goal: 5000 },
    ],
  },
  {
    name: "Consultor E",
    revenue: 22480.25,
    goal: 30000,
    customers: 43,
    commission: 899.21,
    families: [
      { name: "Família Alfa", sold: 8180.25, goal: 11000 },
      { name: "Família Beta", sold: 4820.00, goal: 6000 },
      { name: "Família Gama", sold: 3880.00, goal: 5000 },
      { name: "Família Delta", sold: 3120.00, goal: 4000 },
      { name: "Família Épsilon", sold: 2480.00, goal: 4000 },
    ],
  },
];

export const stock = [
  { family: "Família Alfa", items: 48, quantity: 1380, cost: 86420.30, sale: 141680.50 },
  { family: "Família Beta", items: 36, quantity: 926, cost: 64280.40, sale: 103520.80 },
  { family: "Família Gama", items: 31, quantity: 714, cost: 48750.20, sale: 79840.60 },
  { family: "Família Delta", items: 27, quantity: 608, cost: 39240.80, sale: 65480.30 },
  { family: "Família Épsilon", items: 22, quantity: 485, cost: 29180.50, sale: 48120.90 },
];

export const finance = {
  payableOverdue: 18450.25,
  payableFuture: 126840.70,
  receivableOverdue: 27820.40,
  receivableFuture: 214580.90,
};

export const assistantExamples = [
  "Quais são os cinco produtos mais vendidos?",
  "Qual consultor está mais próximo da meta?",
  "Qual o valor total do estoque a preço de venda?",
];

export function assistantAnswer(question: string) {
  const normalized = question.toLowerCase();
  if (normalized.includes("produto")) {
    return "Os produtos líderes são Shampoo Profissional Neutro 5L (R$ 21.450,80), Suplemento Premium 30 ml (R$ 18.920,40) e Condicionador Profissional 5L (R$ 16.480,20). Todos os valores são demonstrativos.";
  }
  if (normalized.includes("meta") || normalized.includes("consultor")) {
    return "O Consultor B está mais próximo da meta: faturou R$ 38.920,20 de uma meta de R$ 40.000,00, alcançando 97,30% de cobertura.";
  }
  if (normalized.includes("estoque")) {
    return "O estoque demonstrativo soma R$ 267.872,20 a preço de custo e R$ 438.643,10 a preço de venda, considerando 3.113 unidades.";
  }
  if (normalized.includes("faturamento") || normalized.includes("venda")) {
    return "O faturamento demonstrativo de outubro é R$ 197.840,20, crescimento de 7,38% sobre setembro. Foram positivados 327 clientes.";
  }
  return "Nesta demonstração posso responder sobre faturamento, produtos, metas, consultores e estoque. Os dados exibidos são fictícios e não possuem conexão com o ERP de produção.";
}
