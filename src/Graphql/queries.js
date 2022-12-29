import { gql } from "@apollo/client";

export const LOAD_LAUNCHES = gql`
  query LaunchList($limit: Int!, $offset: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        flickr_images
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
      }
      details
      id
    }
  }
`;
