import {Ingredient} from '@prisma/client';
import {axiosInstance} from '@/services/axiosInstance';
import {ApiRoutes} from './constants';

export const getAll = async (): Promise<Ingredient[]> => {
    return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
}
