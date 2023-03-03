import { STRAPI_GRAPHQL_API_URL } from '$env/static/private';

export async function load({params}) {
    
    console.log(STRAPI_GRAPHQL_API_URL);
    
    
    // URQL 


    //


  
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



// ```
// # SAVING THIS QUERY FOR USE LATER
// query {
//   chapters(filters: { slug: { eq: "a-fake-chat-gpt-story-about-kal-tsit" }}) {
//     data {
//       id
//       attributes {
//         title
//         content
//         slug
//         chapter_header_media {
//           id,
//           hero_image {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// ```