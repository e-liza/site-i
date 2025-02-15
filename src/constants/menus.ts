import { Routes } from './routes';

export interface ISubMenuItem {
  name: string;
  path: string;
  description: string;
}

export interface IMenuItem {
  name: string;
  path: string;
  description?: string;
  subMenuItems?: ISubMenuItem[];
}

export const mainMenu: IMenuItem[] = [
  {
    name: 'layout.menu.dropdown.solutions.name',
    description: 'layout.menu.dropdown.solutions.description',
    path: Routes.Solutions.Overview,
    subMenuItems: [
      {
        name: 'layout.menu.dropdown.solutions.items.employee.name',
        description: 'layout.menu.dropdown.solutions.items.employee.description',
        path: Routes.Solutions.Employee,
      },
      {
        name: 'layout.menu.dropdown.solutions.items.payroll.name',
        description: 'layout.menu.dropdown.solutions.items.payroll.description',
        path: Routes.Solutions.Payroll,
      },
      {
        name: 'layout.menu.dropdown.solutions.items.company.name',
        description: 'layout.menu.dropdown.solutions.items.company.description',
        path: Routes.Solutions.Company,
      },
      {
        name: 'layout.menu.dropdown.solutions.items.business.name',
        description: 'layout.menu.dropdown.solutions.items.business.description',
        path: Routes.Solutions.Business,
      },
      {
        name: 'layout.menu.dropdown.solutions.items.mobile.name',
        description: 'layout.menu.dropdown.solutions.items.mobile.description',
        path: Routes.Solutions.Mobile,
      },
      {
        name: 'layout.menu.dropdown.solutions.items.ivySupport.name',
        description: 'layout.menu.dropdown.solutions.items.ivySupport.description',
        path: Routes.Solutions.IvySupport,
      },
    ],
  },
  {
    name: 'layout.menu.prices',
    path: Routes.Plans,
    subMenuItems: [
      {
        name: 'layout.menu.plans',
        description: 'layout.menu.plansDescription',
        path: Routes.Plans,
      },
      {
        name: 'layout.menu.partnerProgram',
        description: 'layout.menu.partnerProgramDescription',
        path: Routes.PartnerProgram,
      },
    ],
  },
  {
    name: 'layout.menu.dropdown.company.name',
    description: 'layout.menu.dropdown.company.description',
    subMenuItems: [
      {
        name: 'layout.menu.dropdown.company.items.aboutUs.name',
        description: 'layout.menu.dropdown.company.items.aboutUs.description',
        path: Routes.AboutUs,
      },
      {
        name: 'layout.menu.dropdown.company.items.careers.name',
        description: 'layout.menu.dropdown.company.items.careers.description',
        path: Routes.Careers,
      },
    ],
    path: Routes.AboutUs,
  },
  { name: 'layout.menu.insights', path: Routes.Insights },
];

export interface IFooterMenuItem {
  name: string;
  type?: 'mail';
  path: string;
}

export interface IFooterMenu {
  name: string;
  menuItems: IFooterMenuItem[];
}

export const footerMenu: IFooterMenu[] = [
  {
    name: 'layout.footerMenus.resources.title',
    menuItems: [
      {
        name: 'layout.footerMenus.resources.items.insights',
        path: Routes.Insights,
      },
      {
        name: 'layout.footerMenus.resources.items.dataSecurity',
        path: Routes.Security,
      },
      {
        name: 'layout.footerMenus.resources.items.termCond',
        path: Routes.Security,
      },
      {
        name: 'layout.footerMenus.resources.items.privPol',
        path: Routes.Security,
      },
    ],
  },
  {
    name: 'layout.footerMenus.solutions.title',
    menuItems: [
      {
        name: 'layout.footerMenus.solutions.items.overview',
        path: Routes.Solutions.Overview,
      },
      {
        name: 'layout.footerMenus.solutions.items.employee',
        path: Routes.Solutions.Employee,
      },
      {
        name: 'layout.footerMenus.solutions.items.company',
        path: Routes.Solutions.Company,
      },
      {
        name: 'layout.footerMenus.solutions.items.payroll',
        path: Routes.Solutions.Payroll,
      },
      {
        name: 'layout.footerMenus.solutions.items.business',
        path: Routes.Solutions.Business,
      },
      {
        name: 'layout.footerMenus.solutions.items.mobile',
        path: Routes.Solutions.Mobile,
      },
      {
        name: 'layout.footerMenus.solutions.items.ivySupport',
        path: Routes.Solutions.IvySupport,
      },
    ],
  },
  {
    name: 'layout.footerMenus.contact.title',
    menuItems: [
      {
        name: 'layout.footerMenus.contact.items.getInTouch',
        path: Routes.GetInTouch,
      },
      {
        name: 'layout.footerMenus.contact.items.reqService',
        path: Routes.ServiceRequest,
      },
      {
        name: 'layout.footerMenus.contact.items.reqDemo',
        path: Routes.DemoRequest,
      },
      {
        name: 'mail@ivys.io',
        path: 'mail@ivys.io',
        type: 'mail',
      },
      {
        name: 'support@ivys.io',
        path: 'support@ivys.io',
        type: 'mail',
      },
    ],
  },
  {
    name: 'layout.footerMenus.company.title',
    menuItems: [
      {
        name: 'layout.footerMenus.company.items.aboutUs',
        path: Routes.AboutUs,
      },
      {
        name: 'layout.footerMenus.company.items.careers',
        path: Routes.Careers,
      },
    ],
  },
];
