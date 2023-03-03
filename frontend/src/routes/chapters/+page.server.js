import { STRAPI_REST_API_URL } from '$env/static/private';

export async function load({fetch}) {
    
    const strapi_all_chapters_api_endpoint = `${STRAPI_REST_API_URL}/chapters`;
    console.log(strapi_all_chapters_api_endpoint);
    
    const res = await fetch(strapi_all_chapters_api_endpoint);
    const { data } = await res.json();
    
    const processed_data = data.map(
        data_item => {
            return {
                id: data_item.id,
                ...data_item.attributes
            }
        }
    );

    return {
        chapters: processed_data
    }

}