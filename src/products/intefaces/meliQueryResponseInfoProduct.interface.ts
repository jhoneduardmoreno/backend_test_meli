export interface MeliQueryResponseInfoProduct {
    id: string;
    site_id: string;
    title: string;
    seller_id: number;
    category_id: string;
    official_store_id: number;
    price: number;
    base_price: number;
    original_price: null | number;
    currency_id: string;
    initial_quantity: number;
    sale_terms: SaleTerm[];
    buying_mode: string;
    listing_type_id: string;
    condition: string;
    permalink: string;
    thumbnail_id: string;
    thumbnail: string;
    pictures: Picture[];
    video_id: null | string;
    descriptions: any[];
    accepts_mercadopago: boolean;
    non_mercado_pago_payment_methods: any[];
    shipping: Shipping;
    international_delivery_mode: string;
    seller_address: SellerAddress;
    seller_contact: null | any;
    location: {};
    coverage_areas: any[];
    attributes: Attribute[];
    listing_source: string;
    variations: Variation[];
    status: string;
    sub_status: any[];
    tags: string[];
    warranty: string;
    catalog_product_id: null | string;
    domain_id: string;
    parent_item_id: null | string;
    deal_ids: string[];
    automatic_relist: boolean;
    date_created: string;
    last_updated: string;
    health: number;
    catalog_listing: boolean;
}

interface SaleTerm {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct: null | any;
    values: Value[];
    value_type: string;
}

interface Value {
    id: string | null;
    name: string;
    struct: null | any;
}

interface Picture {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
}

interface Shipping {
    mode: string;
    methods: any[];
    tags: string[];
    dimensions: null | any;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}

interface SellerAddress {
    city: City;
    state: State;
    country: Country;
    search_location: SearchLocation;
    id: number;
}

interface City {
    id: string;
    name: string;
}

interface State {
    id: string;
    name: string;
}

interface Country {
    id: string;
    name: string;
}

interface SearchLocation {
    city: City;
    state: State;
}

interface Attribute {
    id: string;
    name: string;
    value_id: string | null;
    value_name: string;
    values: Value[];
    value_type: string;
}

interface Variation {
    id: number;
    price: number;
    attribute_combinations: AttributeCombination[];
    sale_terms: any[];
    picture_ids: string[];
    catalog_product_id: null | string;
}

interface AttributeCombination {
    id: string;
    name: string;
    value_id: string | null;
    value_name: string;
    values: Value[];
    value_type: string;
}