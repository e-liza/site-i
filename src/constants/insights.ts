export const PAGE_SIZE = 7;

export const CATEGORIES = {
  QUICK_TIPS: 'quick tips',
  WORLD: 'world',
  BUSINESS: 'business',
  TECHNOLOGY: 'technology',
  COMPANY_CULTURE: 'company culture',
  WORK_AND_LIFE: 'work and life',
  LEADERSHIP: 'leadership',
  LEARNING: 'learning',
  HR: 'hr',
  TEAM_MANAGEMENT: 'team management',
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CATEGORIES_COLOR_MAP: { [key in keyof typeof CATEGORIES]: string } = {
  QUICK_TIPS: '#C83A39',
  WORLD: '',
  BUSINESS: '',
  TECHNOLOGY: '#C42026',
  COMPANY_CULTURE: '',
  WORK_AND_LIFE: '#174D4D',
  LEADERSHIP: '#C83A39',
  LEARNING: '',
  HR: '#174D4D',
  TEAM_MANAGEMENT: '#C83A39',
};
