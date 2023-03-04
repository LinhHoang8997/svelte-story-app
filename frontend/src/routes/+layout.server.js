import { STRAPI_REST_API_URL } from '$env/static/private';

export async function load({}) {

  return {
    public_api_key: STRAPI_REST_API_URL
  }

}