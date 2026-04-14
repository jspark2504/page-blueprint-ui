export type NavItem = {
  label: string;
  href: string;
  matchPath?: string;
};

export type SiteConfig = {
  siteName: string;
  siteDescription: string;
  /** Canonical site URL (no trailing slash), used for metadata & sitemap */
  url: string;
  locale: string;
  /** Default Open Graph / Twitter image path (under /public or absolute URL) */
  ogImage: string;
  nav: NavItem[];
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  eventCards: Array<{
    id: string;
    title: string;
    date: string;
    image: string;
    href?: string;
  }>;
  organizationJsonLd: {
    name: string;
    description?: string;
    sameAs?: string[];
  };
};

const siteConfig: SiteConfig = {
  siteName: "Nature Reserve",
  siteDescription:
    "도심 속에서 만나는 푸르른 생태공간. 자연과 함께하는 특별한 여정을 경험해보세요.",
  url: "https://example.com",
  locale: "ko_KR",
  ogImage: "/og-default.svg",
  nav: [
    { label: "홈", href: "/" },
    { label: "소개", href: "/#about-overview", matchPath: "/" },
    { label: "특징", href: "/#features", matchPath: "/" },
    { label: "방문안내", href: "/#visit-guide", matchPath: "/" },
  ],
  contact: {
    email: "hello@example.com",
    phone: "+82-2-0000-0000",
    address: "서울특별시",
  },
  eventCards: [
    {
      id: "e1",
      title: "봄 시즌 포토 스팟 운영",
      date: "2026.04.12 - 2026.05.31",
      image: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "e2",
      title: "가든 나이트 프로그램",
      date: "2026.05.03 - 2026.05.24",
      image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "e3",
      title: "주말 도슨트 투어",
      date: "매주 토/일 14:00",
      image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "e4",
      title: "패밀리 데이 특별 이벤트",
      date: "2026.06.06",
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80",
    },
  ],
  organizationJsonLd: {
    name: "Nature Reserve",
    description: "도심 속 자연 생태 체험 공간",
    sameAs: ["https://github.com"],
  },
};

export default siteConfig;
