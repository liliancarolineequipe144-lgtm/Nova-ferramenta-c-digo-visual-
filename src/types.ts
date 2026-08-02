export type Tab = 'narratives' | 'prompts' | 'products' | 'favorites';

export interface PromptItem {
  id: string;
  title: string;
  content: string;
  type: 'educational' | 'sales' | 'lifestyle' | 'universal';
  category?: string;
  videoUrl?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  price: string;
  status?: string;
  image: string;
  video?: string;
  link: string;
  category: string;
  description?: string;
  stats?: {
    orders: number;
    ctr: string;
    creators: number;
    cart: number;
  };
  commission?: string;
  ticket?: string;
  style?: string;
  hooks?: string[];
  hashtags?: string[];
}

export interface NarrativeItem {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  category: 'gancho' | 'contexto' | 'solucao' | 'cta';
}
