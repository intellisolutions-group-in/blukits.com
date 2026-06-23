import {
  Globe,
  Smartphone,
  Monitor,
  Code2,
  Zap,
  Layers,
  Building2,
  Laptop,
  RefreshCw,
  Wrench,
  Palette,
  Database,
  Plug,
  TestTube2,
  Cloud,
  ShoppingCart,
  FileText,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "windows-application-development": Monitor,
  "custom-software-development": Code2,
  "progressive-web-apps": Zap,
  "cross-platform-development": Layers,
  "enterprise-applications": Building2,
  "desktop-applications": Laptop,
  "software-modernization": RefreshCw,
  "maintenance-support": Wrench,
  "ui-ux-design": Palette,
  "database-development": Database,
  "api-development": Plug,
  "software-testing": TestTube2,
  "cloud-applications": Cloud,
  "ecommerce-development": ShoppingCart,
  "cms-development": FileText,
  "software-consulting": Lightbulb,
};

export function getServiceIcon(slug: string): LucideIcon {
  return serviceIconMap[slug] ?? Code2;
}
