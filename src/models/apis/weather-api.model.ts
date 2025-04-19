import axiosInstance from '../../services/axios-instance';
import Weather, { Location } from '../weather';

export class WeatherApi {
  private readonly baseUrl: string = 'weather';

  async findByLocation(location: Location): Promise<Weather[]> {
    const response = await axiosInstance.get(`${this.baseUrl}`, { params: location });
    return response.data;
  }
}
