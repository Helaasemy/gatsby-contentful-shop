import { useStaticQuery, graphql } from 'gatsby';

export const useFeaturedData = () => {
  const data = useStaticQuery(graphql`
  query Featured {
    allContentfulProducts (filter: {featured: {eq: true}}){
        edges {
          node {
            name
            category
            bestseller
            featured
            price
            currency
            id
            image {
              file {
                url
                fileName
              }
            }
            detail {
              dimmentions {
                height
                width
              }
              size
              recommondation {
                image {
                  file {
                    url
                    fileName
                  }
                }
                image2 {
                  file {
                    url
                    fileName
                  }
                }
                image3 {
                  file {
                    fileName
                    url
                  }
                }
              }
            }
          }
        }
      }
  }
  `);
  return data.allContentfulProducts.edges[0].node;
};
