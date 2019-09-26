import { City } from './city.model';

export class CityResponse {
    content: City[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
}
