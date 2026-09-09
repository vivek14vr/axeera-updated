"use client";

import { 
  Code, Box, PenTool, Smartphone, RefreshCw, Cloud, Brain, ShoppingCart, MessageSquare, Wrench,
  HeartPulse, CreditCard, ShoppingBag, Building2, Globe, GraduationCap, Home, Truck, Film,
  Target, Users, Lightbulb, CheckCircle, Award, TrendingUp, Heart, Zap, Shield, BookOpen,
  Calendar, Clock, ArrowRight, ExternalLink, Share2, Mail, Tag, User, ArrowLeft,
  Menu, X, ChevronDown, Star, Quote, Loader2, AlertCircle, MapPin, Phone, MessageSquare as MessageSquareIcon,
  Layers, GitBranch
} from "lucide-react";
import { TwitterIcon as TwitterIconCustom, LinkedinIcon as LinkedinIconCustom, GithubIcon as GithubIconCustom } from "@/components/shared/social-icons";

const serviceIcons = {
  "web-development": Code,
  "product-development": Box,
  "ui-ux-design": PenTool,
  "mobile-development": Smartphone,
  "digital-transformation": RefreshCw,
  "cloud-solutions": Cloud,
  "ai-solutions": Brain,
  "ecommerce": ShoppingCart,
  "software-consulting": MessageSquare,
  "maintenance-support": Wrench,
} as const;

const industryIcons = {
  "healthcare": HeartPulse,
  "financial-services": CreditCard,
  "retail-ecommerce": ShoppingBag,
  "insurance": Building2,
  "marketplace-platforms": Globe,
  "saas-technology": Code,
  "education": GraduationCap,
  "real-estate": Home,
  "logistics": Truck,
  "media-entertainment": Film,
} as const;

const valueIcons = {
  Target, Users, Lightbulb, Globe, CheckCircle, Award, TrendingUp, Heart, Code, Zap, Shield, BookOpen,
} as const;

export function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = serviceIcons[slug as keyof typeof serviceIcons];
  return Icon ? <Icon className={className} aria-hidden="true" /> : null;
}

export function IndustryIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = industryIcons[slug as keyof typeof industryIcons];
  return Icon ? <Icon className={className} aria-hidden="true" /> : null;
}

export function ValueIcon({ name, className }: { name: keyof typeof valueIcons; className?: string }) {
  const Icon = valueIcons[name];
  return Icon ? <Icon className={className} aria-hidden="true" /> : null;
}

export function TwitterIcon({ className }: { className?: string }) {
  return <TwitterIconCustom className={className} aria-hidden="true" />;
}

export function LinkedinIcon({ className }: { className?: string }) {
  return <LinkedinIconCustom className={className} aria-hidden="true" />;
}

export function GithubIcon({ className }: { className?: string }) {
  return <GithubIconCustom className={className} aria-hidden="true" />;
}