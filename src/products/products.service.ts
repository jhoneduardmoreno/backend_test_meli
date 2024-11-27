import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OptionsDto } from './dto/options.dto';
import axios from 'axios';
import { MeliQueryResponse } from './intefaces/meliQueryResponse.interface';
import { mapProducts } from './mappers/products.mappers';
import { MeliQueryResponseInfoProduct } from './intefaces/meliQueryResponseInfoProduct.interface';
import { MeliQueryResponseDescriptionProduct } from './intefaces/meliQueryResponseDescriptionProduct.interface';

@Injectable()
export class ProductsService {
    private readonly baseUrl = 'https://api.mercadolibre.com'

    async getProducts(options: OptionsDto) {
        const { query, limit, offset } = options;

        const encodedQuery = encodeURIComponent(query);
        const url = `${this.baseUrl}/sites/MLA/search?q=${encodedQuery}&limit=${limit}&offset=${offset}`;
        
        try {
            const response = await axios.get(url);
            const meliResponse: MeliQueryResponse = response.data;
            
            if (meliResponse.results.length === 0) {
                throw new HttpException('Lo sentimos, no encontramos productos que coincidan con tu búsqueda', HttpStatus.NOT_FOUND);
            }

            return mapProducts(meliResponse);
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            console.error('Error en la solicitud:', error.response?.data || error.message);
            throw error;
        }
    }

    async getProductById(id: string) {
        const urlItem = `${this.baseUrl}/items/${id}`
        const urlItemDescription = `${urlItem}/description`

        try {
            const [item, description] = await Promise.all([
                axios.get(urlItem),
                axios.get(urlItemDescription)
            ])

            const itemData: MeliQueryResponseInfoProduct = item.data;
            const descriptionData: MeliQueryResponseDescriptionProduct = description.data;

            return {
                title: itemData.title,
                price: itemData.price,
                picture: itemData.pictures[0].secure_url,
                condition: itemData.condition,
                quantity: itemData.initial_quantity,
                free_shipping: itemData.shipping.free_shipping,
                description: descriptionData.plain_text || 'No hay descripción disponible'
            }
        } catch (error) {
            if (error.response?.status === 404) {
                throw new HttpException('Lo sentimos, no pudimos encontrar el producto que estás buscando', HttpStatus.NOT_FOUND);
            }
            console.error('Error al obtener el producto:', error.response?.data || error.message);
            throw error;
        }
    }
}
