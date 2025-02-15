import { PAGE_SIZE } from '../constants/positions';

import axios from './axios';

export interface IPositions {
  positions: IPosition[];
  totalPositions: number;
  totalPages: number;
  page: number;
  pageSize: number;
}

export interface IPosition {
  id: number;
  country: string;
  city: string;
  title: string;
  employmentType: string;
  description: string;
}

export interface IPositionDetailed extends IPosition {
  content: string;
}

export const getPositions = (pageNumber: number, pageSize: number = PAGE_SIZE) => {
  return axios.get<IPositions>(`/cms/positions?pageNumber=${pageNumber}&pageSize=${pageSize}`);
};

export const getPositionById = (id: number) => {
  return axios.get<IPositionDetailed>(`/cms/positions/${id}`);
};
