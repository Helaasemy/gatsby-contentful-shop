import { useStaticQuery, graphql } from 'gatsby';

export const useCategories = () => {
  const data = useStaticQuery(graphql`
  query Category {
    allContentfulCategories {
      nodes {
        title
      }
    }
  }
  `);
  return data.allContentfulCategories.nodes;
};
