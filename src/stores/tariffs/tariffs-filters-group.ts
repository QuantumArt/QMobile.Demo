export interface ITariffFilterGroup {
  alias: string;
  name: string;
}

export const tariffsFilters: ITariffFilterGroup[] = [
  {
    alias: 'cashback',
    name: 'С кэшбэком 10%',
  },
  {
    alias: 'forall',
    name: 'Для всех',
  },
  {
    alias: 'smartphone',
    name: 'Для смартфона',
  },
  {
    alias: 'smartdevices',
    name: 'Для умных устройств',
  },
  {
    alias: 'devices',
    name: 'Для планшета и компьютера',
  },
  {
    alias: 'forcalls',
    name: 'Для звонков',
  },
];
