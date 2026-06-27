import { Inter } from "next/font/google";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import company from "@/data/company.json";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${company.brandName} | IT and Software Development Company in India`,
    template: `%s | ${company.brandName}`,
  },
  description: company.description,
  metadataBase: new URL(company.url),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = organizationSchema();
  const siteSchema = websiteSchema();

  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
