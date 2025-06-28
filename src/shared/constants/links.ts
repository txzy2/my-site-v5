export interface IHeaderLinks {
  title: string;
  link: string;
}

export const list: IHeaderLinks[] = [
  { title: 'Главная', link: '/' },
  { title: 'Проекты', link: '#about' },
  { title: 'Новости', link: '/news' }
];
