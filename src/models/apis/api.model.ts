import axiosInstance from '../../services/axios-instance';

export type UUID = string;
export type Key = UUID;

export interface Api<T> {
  createOne(data: Omit<T, 'id'>): Promise<Key>;
  findOne(id: Key): Promise<T>;
  findAll(): Promise<T[]>;
  updateById(id: Key, data: Omit<T, 'id'>): Promise<T>;
  updatePartialById(id: Key, data: Partial<Omit<T, 'id'>>): Promise<T>;
  deleteById(id: Key): Promise<void>;
}

export class BaseApi<T> implements Api<T> {
  private readonly baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  async createOne(data: Omit<T, 'id'>): Promise<Key> {
    const response = await axiosInstance.post<Key>(this.baseUrl, data);
    return response.data;
  }

  async findOne(id: Key): Promise<T> {
    const response = await axiosInstance.get(`${this.baseUrl}/${id}`);
    return response.data;
  }

  async findAll(): Promise<T[]> {
    const response = await axiosInstance.get(`${this.baseUrl}/all`);
    return response.data;
  }

  async updateById(id: Key, data: Omit<T, 'id'>): Promise<T> {
    const response = await axiosInstance.put(`${this.baseUrl}/${id}`, data);
    return response.data;
  }

  async updatePartialById(id: Key, data: Partial<Omit<T, 'id'>>): Promise<T> {
    const response = await axiosInstance.patch(`${this.baseUrl}/${id}`, data);
    return response.data;
  }

  async deleteById(id: Key): Promise<void> {
    const response = await axiosInstance.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }
}
