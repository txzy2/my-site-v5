import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react';

export type Language = 'ru' | 'en';

const ru = {
  'nav.home': 'Главная',
  'nav.projects': 'Проекты',
  'nav.news': 'Новости',

  'hero.greeting': 'Привет! Меня зовут Антон :)',
  'hero.role1': 'Backend-разработчик',
  'hero.role3': 'TypeScript / NestJS',
  'hero.role4': 'Telegram-боты',
  'hero.aboutPrefix': 'Я создаю ',
  'hero.aboutHighlight': 'надежные backend-решения',
  'hero.aboutSuffix':
    ', сочетающие производительность и элегантность кода.',
  'hero.ctaProjects': 'Смотреть проекты',
  'hero.stat1': 'года опыта',
  'hero.stat2': 'проектов',
  'hero.stat3': 'технологий',

  's2.subtitle': 'Технологии и инструменты',
  's2.arsenal': 'Инструменты и технологии',
  's2.lang': 'Языки',
  's2.data': 'Данные и кэш',
  's2.infra': 'Инфраструктура',
  's2.queue': 'Очереди (BullMQ)',
  's2.principles': 'Принципы проектирования:',
  's2.principlesPrefix': 'В работе применяю принципы ',
  's2.principlesMid': ' (Low Coupling, High Cohesion) и',
  's2.principlesSuffix':
    ' для создания масштабируемых и поддерживаемых архитектур.',
  's2.quotePrefix':
    'Люблю решать сложные архитектурные задачи, применять паттерны проектирования и создавать чистый, поддерживаемый код. Особое внимание уделяю принципам',
  's2.quoteMid': ' и ',
  's2.quoteSuffix': ' для построения эффективных систем.',
  's2.quoteTail':
    'Всегда открыт к интересным проектам и коллаборациям!',

  's2.nest.title': 'NestJS (TypeScript)',
  's2.nest.desc':
    'Масштабируемая серверная архитектура: модули, DI, очереди и кэширование.',
  's2.laravel.title': 'Laravel (PHP)',
  's2.laravel.desc':
    'Быстрая разработка веб-приложений с чистым кодом и продуманной архитектурой.',
  's2.next.title': 'Next.js & React',
  's2.next.desc':
    'Современный фронтенд и полный цикл разработки — от интерфейса до API.',
  's2.tg.title': 'Telegram Боты',
  's2.tg.desc':
    'Боты со сложной бизнес-логикой, FSM и интеграцией платёжных систем.',

  's3.subtitle': 'Избранные реализации',
  's3.open': 'Подробнее',
  's3.close': 'Закрыть',
  's3.source': 'Исходный код',
  's3.queue': 'Очереди',
  's3.p1.title': 'Персональный сайт v5',
  's3.p1.desc':
    'Современное портфолио с анимациями и интерактивными элементами.',
  's3.p1.details':
    'Портфолио на React 18 и TypeScript со сборкой Vite. Светлая и тёмная темы через CSS-переменные, локализация RU/EN, анимации на Framer Motion и адаптивная вёрстка на Tailwind — без тяжёлых UI-библиотек.',
  's3.p1.highlight': 'React, Tailwind, Framer Motion',
  's3.p2.title': 'Laravel Logger Service',
  's3.p2.desc':
    'Микросервис для централизованного сбора ошибок с фильтрацией и уведомлениями.',
  's3.p2.details':
    'Сервис централизованного логирования: принимает ошибки из нескольких приложений, фильтрует и группирует их, мгновенно уведомляет в Telegram. Архитектура на принципах SOLID и GRASP, покрыт тестами, разворачивается в Docker.',
  's3.p2.highlight': 'SOLID и GRASP для масштабируемой архитектуры',
  's3.p3.title': 'Stockhub Bot',
  's3.p3.desc':
    'Telegram бот для продажи кроссовок с полноценным e-commerce в мессенджере.',
  's3.p3.details':
    'Telegram-бот для продажи кроссовок с полноценным магазином внутри мессенджера: каталог, корзина, оплата и админ-панель. Клиент — React и Vite (Web App), сервер — NestJS с PostgreSQL.',
  's3.p3.highlight': 'React + Vite (Web App) и NestJS бэкенд',
  's3.p4.title': 'CRM для кальянных',
  's3.p4.desc':
    'Система управления для сети кальянных: заказы, склад табака, смены и лояльность.',
  's3.p4.details':
    'CRM для сети кальянных: заказы гостей, учёт склада табака, смены сотрудников и программа лояльности. Аналитика продаж в реальном времени по филиалам, фоновая обработка задач через Redis и очереди.',
  's3.p4.highlight':
    'Аналитика продаж и контроль филиалов в реальном времени',

  's4.subtitle': 'Опыт и карьера',
  's4.e1.period': '2025 — настоящее время',
  's4.e1.role': 'Fullstack-разработчик (Symfony)',
  's4.e1.company': 'M2Lab',
  's4.e1.desc': 'Fullstack-разработка на Symfony.',
  's4.e2.period': '2023 — 2025',
  's4.e2.role': 'Backend-разработчик (PHP / Laravel)',
  's4.e2.company': '1С Рарус · Тиражные решения',
  's4.e2.desc': 'Разрабатывал тиражные решения на PHP и Laravel.',
  's4.e3.period': '2022 — 2023',
  's4.e3.role': 'Фронтенд-разработчик (Angular)',
  's4.e3.desc': 'Разрабатывал клиентские интерфейсы на Angular.',

  'footer.crafted': 'сделано',
  'notfound.title': 'Извините, страница не найдена :(',
  'notfound.home': 'На главную',

  'theme.light': 'Светлая',
  'theme.dark': 'Тёмная',
  'settings.title': 'Настройки',
  'settings.theme': 'Тема',
  'settings.language': 'Язык'
} as const;

export type TranslationKey = keyof typeof ru;

const en: Record<TranslationKey, string> = {
  'nav.home': 'Home',
  'nav.projects': 'Projects',
  'nav.news': 'News',

  'hero.greeting': 'Hi! My name is Anton :)',
  'hero.role1': 'Backend Developer',
  'hero.role3': 'TypeScript / NestJS',
  'hero.role4': 'Telegram Bots',
  'hero.aboutPrefix': 'I build ',
  'hero.aboutHighlight': 'reliable backend solutions',
  'hero.aboutSuffix':
    ' that combine performance with elegant code.',
  'hero.ctaProjects': 'View projects',
  'hero.stat1': 'years of experience',
  'hero.stat2': 'projects',
  'hero.stat3': 'technologies',

  's2.subtitle': 'Technologies and tools',
  's2.arsenal': 'Tools & technologies',
  's2.lang': 'Languages',
  's2.data': 'Data & cache',
  's2.infra': 'Infrastructure',
  's2.queue': 'Queues (BullMQ)',
  's2.principles': 'Design principles:',
  's2.principlesPrefix': 'I apply ',
  's2.principlesMid': ' (Low Coupling, High Cohesion) and',
  's2.principlesSuffix':
    ' to build scalable and maintainable architectures.',
  's2.quotePrefix':
    'I enjoy solving complex architectural problems, applying design patterns and writing clean, maintainable code. I pay special attention to',
  's2.quoteMid': ' and ',
  's2.quoteSuffix': ' principles to build efficient systems.',
  's2.quoteTail':
    'Always open to interesting projects and collaborations!',

  's2.nest.title': 'NestJS (TypeScript)',
  's2.nest.desc':
    'Scalable server architecture: modules, DI, queues and caching.',
  's2.laravel.title': 'Laravel (PHP)',
  's2.laravel.desc':
    'Fast web application development with clean code and thoughtful architecture.',
  's2.next.title': 'Next.js & React',
  's2.next.desc':
    'Modern frontend and the full development cycle — from interface to API.',
  's2.tg.title': 'Telegram Bots',
  's2.tg.desc':
    'Bots with complex business logic, FSM and payment system integration.',

  's3.subtitle': 'Featured work',
  's3.open': 'Details',
  's3.close': 'Close',
  's3.source': 'Source code',
  's3.queue': 'Queues',
  's3.p1.title': 'Personal site v5',
  's3.p1.desc':
    'Modern portfolio with animations and interactive elements.',
  's3.p1.details':
    'Portfolio built with React 18 and TypeScript on top of Vite. Light/dark themes via CSS variables, RU/EN localization, Framer Motion animations and a responsive Tailwind layout — without heavy UI libraries.',
  's3.p1.highlight': 'React, Tailwind, Framer Motion',
  's3.p2.title': 'Laravel Logger Service',
  's3.p2.desc':
    'Microservice for centralized error collection with filtering and notifications.',
  's3.p2.details':
    'Centralized logging service: ingests errors from multiple applications, filters and groups them, and sends instant Telegram notifications. Built on SOLID and GRASP principles, covered with tests and deployed with Docker.',
  's3.p2.highlight': 'SOLID and GRASP for a scalable architecture',
  's3.p3.title': 'Stockhub Bot',
  's3.p3.desc':
    'Telegram bot for selling sneakers with full e-commerce inside the messenger.',
  's3.p3.details':
    'Telegram bot for selling sneakers with a full store inside the messenger: catalog, cart, payments and an admin panel. Client — React and Vite (Web App), server — NestJS with PostgreSQL.',
  's3.p3.highlight': 'React + Vite (Web App) and NestJS backend',
  's3.p4.title': 'Hookah Lounge CRM',
  's3.p4.desc':
    'Management system for a hookah lounge chain: orders, tobacco stock, shifts and loyalty.',
  's3.p4.details':
    'CRM for a hookah lounge chain: guest orders, tobacco stock, staff shifts and a loyalty program. Real-time sales analytics per branch, with background job processing via Redis and queues.',
  's3.p4.highlight':
    'Real-time sales analytics and branch control',

  's4.subtitle': 'Experience & career',
  's4.e1.period': '2025 — present',
  's4.e1.role': 'Fullstack Developer (Symfony)',
  's4.e1.company': 'M2Lab',
  's4.e1.desc': 'Fullstack development on Symfony.',
  's4.e2.period': '2023 — 2025',
  's4.e2.role': 'Backend Developer (PHP / Laravel)',
  's4.e2.company': '1C Rarus · Turnkey solutions',
  's4.e2.desc': 'Developed turnkey solutions with PHP and Laravel.',
  's4.e3.period': '2022 — 2023',
  's4.e3.role': 'Frontend Developer (Angular)',
  's4.e3.desc': 'Built client interfaces with Angular.',

  'footer.crafted': 'crafted by',
  'notfound.title': 'Sorry, but page is not found :(',
  'notfound.home': 'Home',

  'theme.light': 'Light',
  'theme.dark': 'Dark',
  'settings.title': 'Settings',
  'settings.theme': 'Theme',
  'settings.language': 'Language'
};

const translations: Record<Language, Record<TranslationKey, string>> = {
  ru,
  en
};

interface I18nContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const stored =
      typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    return stored === 'en' ? 'en' : 'ru';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang(prev => (prev === 'ru' ? 'en' : 'ru'));

  const t = (key: TranslationKey) => translations[lang][key] ?? translations.ru[key];

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within LanguageProvider');
  }
  return context;
};
