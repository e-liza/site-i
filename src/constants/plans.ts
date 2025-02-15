export interface IPlan {
  id: number;
  name: string;
  type: string;
  pricePerMonth: number;
  currency: string;
  description: string;
}

export const plans: IPlan[] = [
  {
    id: 1,
    name: 'layout.plans.items.plan1.name',
    type: 'layout.plans.items.plan1.type',
    description: 'layout.plans.items.plan1.description',
    pricePerMonth: 9,
    currency: '€',
  },
  {
    id: 2,
    name: 'layout.plans.items.plan2.name',
    type: 'layout.plans.items.plan2.type',
    description: 'layout.plans.items.plan2.description',
    pricePerMonth: 20,
    currency: '€',
  },
  {
    id: 3,
    name: 'layout.plans.items.plan3.name',
    type: 'layout.plans.items.plan3.type',
    description: 'layout.plans.items.plan3.description',
    pricePerMonth: 500,
    currency: '€',
  },
];

export enum ActiveValue {
  Active,
  Inactive,
  AddOn,
}

export interface IRow {
  id: number;
  title: string;
  description: string;
  cells: ActiveValue[];
}

export interface ITable {
  id: number;
  title: string;
  rows: IRow[];
}

export const tables: ITable[] = [
  {
    id: 1,
    title: 'layout.comparisonTable.tables.table1.title',
    rows: [
      {
        id: 11,
        title: 'layout.comparisonTable.tables.table1.items.item1.title',
        description: 'layout.comparisonTable.tables.table1.items.item1.description',
        cells: [ActiveValue.Inactive, ActiveValue.Active],
      },
      {
        id: 12,
        title: 'layout.comparisonTable.tables.table1.items.item2.title',
        description: 'layout.comparisonTable.tables.table1.items.item2.description',
        cells: [ActiveValue.Inactive, ActiveValue.Active],
      },
    ],
  },
  {
    id: 2,
    title: 'layout.comparisonTable.tables.table2.title',
    rows: [
      {
        id: 1,
        title: 'layout.comparisonTable.tables.table2.items.item1.title',
        description: 'layout.comparisonTable.tables.table2.items.item1.description',
        cells: [ActiveValue.Active, ActiveValue.Active],
      },
      {
        id: 2,
        title: 'layout.comparisonTable.tables.table2.items.item2.title',
        description: 'layout.comparisonTable.tables.table2.items.item2.description',
        cells: [ActiveValue.Active, ActiveValue.Active],
      },
    ],
  },
  {
    id: 3,
    title: 'layout.comparisonTable.tables.table3.title',
    rows: [
      {
        id: 1,
        title: 'layout.comparisonTable.tables.table3.items.item1.title',
        description: 'layout.comparisonTable.tables.table3.items.item1.description',
        cells: [ActiveValue.Active, ActiveValue.Active],
      },
      {
        id: 2,
        title: 'layout.comparisonTable.tables.table3.items.item2.title',
        description: 'layout.comparisonTable.tables.table3.items.item2.description',
        cells: [ActiveValue.Active, ActiveValue.Active],
      },
      {
        id: 3,
        title: 'layout.comparisonTable.tables.table3.items.item3.title',
        description: 'layout.comparisonTable.tables.table3.items.item3.description',
        cells: [ActiveValue.Active, ActiveValue.Active],
      },
    ],
  },
  {
    id: 4,
    title: 'layout.comparisonTable.tables.table4.title',
    rows: [
      {
        id: 1,
        title: 'layout.comparisonTable.tables.table4.items.item1.title',
        description: 'layout.comparisonTable.tables.table4.items.item1.description',
        cells: [ActiveValue.Active, ActiveValue.Active],
      },
      {
        id: 2,
        title: 'layout.comparisonTable.tables.table4.items.item2.title',
        description: 'layout.comparisonTable.tables.table4.items.item2.description',
        cells: [ActiveValue.Active, ActiveValue.Active],
      },
      {
        id: 3,
        title: 'layout.comparisonTable.tables.table4.items.item3.title',
        description: 'layout.comparisonTable.tables.table4.items.item3.description',
        cells: [ActiveValue.AddOn, ActiveValue.Active],
      },
      {
        id: 4,
        title: 'layout.comparisonTable.tables.table4.items.item4.title',
        description: 'layout.comparisonTable.tables.table4.items.item4.description',
        cells: [ActiveValue.AddOn, ActiveValue.AddOn],
      },
    ],
  },
];
