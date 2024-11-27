import { MeliQueryResponse } from "../intefaces/meliQueryResponse.interface";

export const mapProducts = (meliResponse: MeliQueryResponse) => {
    const categories: string[] = []
    if(meliResponse.filters.length > 0 && meliResponse.filters[0].values) {
      meliResponse.filters[0].values[0].path_from_root.forEach(path_root => {
        categories.push(path_root.name)
      })
    }

    const items = meliResponse.results.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        original_price: item.original_price,
        currency_id: item.currency_id,
        thumbnail: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        location: item.address.state_name
    }))

    const total = meliResponse.paging.total;
    const limit = meliResponse.paging.limit;
    const offset = meliResponse.paging.offset;
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = limit + offset <= 1000;

    return {
        categories,
        items,
        totalPages,
        hasNextPage
    }
}