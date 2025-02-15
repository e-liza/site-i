import { PAGE_SIZE, CATEGORIES } from '../constants/insights';

import axios from './axios';

export interface IInsights {
  insights: IInsight[];
  totalInsights: number;
  totalPages: number;
  page: number;
  pageSize: number;
}

export interface IInsight {
  id: number;
  mainImage: IImage;
  previewImage: IImage;
  creationDate: string;
  categories: Category[];
  readingTime: number;
  title: string;
  url: string;
  description: string;
}

export interface IInsightDetailed extends IInsight {
  content: string;
  relatedInsights: IInsight[];
}

export interface IImage {
  id: number;
  originalName: string;
  url: string;
}

export type Category = keyof typeof CATEGORIES;

export const insightsApi = {
  getInsights(pageNumber: number, pageSize: number = PAGE_SIZE, categories: Category[] = []) {
    return axios.get<IInsights>(
      `/cms/insights?pageNumber=${pageNumber}&pageSize=${pageSize}&categories=${categories.join(
        '&categories=',
      )}`,
    );
  },

  getInsightById(id: string) {
    return axios.get<IInsightDetailed>(`/cms/insights/${id}`);
  },

  getInsightByTitle(title: string) {
    return axios.get<IInsightDetailed>(`/cms/insights/by-url/${title}`);
  },
};
