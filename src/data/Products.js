import { useStaticQuery, graphql } from 'gatsby';

export const useProductsData = () => {
  const data = useStaticQuery(graphql`
  query Products {
    allContentfulProducts(filter: {featured: {eq: false}}){
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
          }
        }
      }
  }
  `);
  return data.allContentfulProducts.edges;
};
