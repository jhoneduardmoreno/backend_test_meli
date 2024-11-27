export interface MeliQueryResponseDescriptionProduct {
    text: string;
    plain_text: string;
    last_updated: string;  // formato ISO 8601
    date_created: string;  // formato ISO 8601
    snapshot: {
        url: string;
        width: number;
        height: number;
        status: string;
    }
}