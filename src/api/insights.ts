// import { PAGE_SIZE, CATEGORIES } from '../constants/insights';

// import axios from './axios';

// export interface IInsights {
//   insights: IInsight[];
//   totalInsights: number;
//   totalPages: number;
//   page: number;
//   pageSize: number;
// }

// export interface IInsight {
//   id: number;
//   mainImage: IImage;
//   previewImage: IImage;
//   creationDate: string;
//   categories: Category[];
//   readingTime: number;
//   title: string;
//   url: string;
//   description: string;
// }

// export interface IInsightDetailed extends IInsight {
//   content: string;
//   relatedInsights: IInsight[];
// }

// export interface IImage {
//   id: number;
//   originalName: string;
//   url: string;
// }

// export type Category = keyof typeof CATEGORIES;

// export const insightsApi = {
//   getInsights(pageNumber: number, pageSize: number = PAGE_SIZE, categories: Category[] = []) {
//     return axios.get<IInsights>(
//       `/cms/insights?pageNumber=${pageNumber}&pageSize=${pageSize}&categories=${categories.join(
//         '&categories=',
//       )}`,
//     );
//   },

//   getInsightById(id: string) {
//     return axios.get<IInsightDetailed>(`/cms/insights/${id}`);
//   },

//   getInsightByTitle(title: string) {
//     return axios.get<IInsightDetailed>(`/cms/insights/by-url/${title}`);
//   },
// };
import { PAGE_SIZE, CATEGORIES } from '../constants/insights';

export interface IInsights {
  insights: IInsight[];
  totalInsights: number;
  totalPages: number;
  page: number;
  pageSize: number;
}

export interface IImage {
  url: string;
}

export interface IInsight {
  id: number;
  title: string;
  url: string;
  description: string;
  categories: Category[];
  readingTime: number;
  creationDate: string;
  content?: string;
  mainImage?: IImage; // ✅ Added optional main image
  previewImage?: IImage; // ✅ Added optional preview image
  relatedInsights?: IInsight[]; // ✅ Added related insights
}

export type Category = keyof typeof CATEGORIES;

const MOCK_ARTICLES_PATH = '/mock_data/insights/';

async function loadMockArticles(): Promise<IInsight[]> {
  const articleSlugs = [
    'ai-workplaces',
    'automating-hr',
    'remote-work',
    'tips-for-managing',
    'WFH',
    'saas-slack',
    'AI-HR',
  ];

  const articles = await Promise.all(
    articleSlugs.map(async (slug) => {
      const response = await fetch(`${MOCK_ARTICLES_PATH}${slug}/article.json`);
      return response.json();
    }),
  );

  return articles;
}

export const insightsApi = {
  async getInsights(
    pageNumber: number,
    pageSize: number = PAGE_SIZE,
    categories: Category[] = [],
  ): Promise<IInsights> {
    const allInsights = await loadMockArticles();

    let filteredInsights = categories.length
      ? allInsights.filter((insight) => insight.categories.some((cat) => categories.includes(cat)))
      : allInsights;

    const totalInsights = filteredInsights.length;
    const totalPages = Math.ceil(totalInsights / pageSize);
    const startIndex = (pageNumber - 1) * pageSize;
    const insights = filteredInsights.slice(startIndex, startIndex + pageSize);

    return { insights, totalInsights, totalPages, page: pageNumber, pageSize };
  },

  async getInsightById(id: number): Promise<IInsight> {
    const allInsights = await loadMockArticles();
    const insight = allInsights.find((insight) => insight.id === id);

    if (!insight) throw new Error('Insight not found');

    const relatedInsights = allInsights.filter(
      (article) =>
        article.id !== id && article.categories.some((cat) => insight.categories.includes(cat)),
    );

    return { ...insight, relatedInsights };
  },

  async getInsightByTitle(title: string): Promise<IInsight> {
    const allInsights = await loadMockArticles();
    const insight = allInsights.find(
      (insight) => insight.title.toLowerCase() === title.toLowerCase(),
    );

    if (!insight) throw new Error('Insight not found');

    const relatedInsights = allInsights.filter(
      (article) =>
        article.id !== insight.id &&
        article.categories.some((cat) => insight.categories.includes(cat)),
    );

    return { ...insight, relatedInsights };
  },
};
