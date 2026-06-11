export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface APIResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  image?: string;
}
