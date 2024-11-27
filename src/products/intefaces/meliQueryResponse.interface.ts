export interface MeliQueryResponse {
    site_id:                   string;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   ItemResult[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   Filter[];
    available_filters:         AvailableFilter[];
    pdp_tracking:              PDPTracking;
}
  
export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   Type;
    values: AvailableFilterValue[];
}
  
export enum Type {
    Boolean = "boolean",
    List = "list",
    Number = "number",
    Range = "range",
    String = "STRING",
    Text = "text",
}
  
export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}
  
export interface Sort {
    id:   string;
    name: string;
}
  
export interface Filter {
    id:     string;
    name:   string;
    type:   Type;
    values?: FilterValue[];
}
  
export interface FilterValue {
    id:             string;
    name:           string;
    path_from_root: Sort[];
}
  
export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}
  
export interface PDPTracking {
    group:        boolean;
    product_info: ProductInfo[];
}
  
export interface ProductInfo {
    id:     string;
    score:  number;
    status: string;
}
  
export interface ItemResult {
    id:                    string;
    title:                 string;
    condition:             string;
    thumbnail_id:          string;
    catalog_product_id:    string;
    listing_type_id:       string;
    permalink:             string;
    buying_mode:           string;
    site_id:               string;
    category_id:           string;
    domain_id:             string;
    thumbnail:             string;
    currency_id:           string;
    order_backend:         number;
    price:                 number;
    original_price:        number;
    sale_price:            null;
    available_quantity:    number;
    official_store_id:     number | null;
    use_thumbnail_id:      boolean;
    accepts_mercadopago:   boolean;
    shipping:              Shipping;
    stop_time:             string;
    seller:                Seller;
    attributes:            Attribute[];
    installments:          Installments;
    winner_item_id:        null;
    catalog_listing:       boolean;
    discounts:             null;
    promotions:            any[];
    inventory_id:          null | string;
    official_store_name?:  string;
    differential_pricing?: DifferentialPricing;
    address: Address;
}

export interface Address {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
}
  
export interface Attribute {
    id:                   string;
    name:                 string;
    value_id:             null | string;
    value_name:           string;
    attribute_group_id:   AttributeGroupID;
    attribute_group_name: AttributeGroupName;
    value_struct:         Struct | null;
    values:               AttributeValue[];
    source:               number;
    value_type:           ValueType;
}
  
export enum AttributeGroupID {
    Others = "OTHERS",
}
  
export enum AttributeGroupName {
    Otros = "Otros",
}
  
export interface Struct {
    number: number;
    unit:   Unit;
}
  
export enum Unit {
    CM = "cm",
    G = "g",
}
  
export enum ValueType {
    List = "list",
    NumberUnit = "number_unit",
    String = "string",
}
  
export interface AttributeValue {
    id:     null | string;
    name:   string;
    struct: Struct | null;
    source: number;
}
  
export interface DifferentialPricing {
    id: number;
}
  
export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: string;
}
  
export interface Seller {
    id:       number;
    nickname: string;
}
  
export interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode:          string;
    tags:          string[];
    benefits:      null;
    promise:       null;
}