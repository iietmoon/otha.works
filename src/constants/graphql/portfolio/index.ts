export const portfolioQuery = (offset:number, size:number, filter = null) => {
  const filterClause = filter ? `portfolioCategory: "${filter}"` : '';
  return `
    query Portfolio {
      portfolio(
        where: {
          orderby: { field: DATE, order: DESC },
          offsetPagination: { offset: ${offset}, size: ${size} },
          ${filterClause}
        }
      ) {
        edges {
          node {
            id
            title
            excerpt
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            terms {
              nodes {
                id
                count
                name
              }
            }
          }
        }
        pageInfo {
          offsetPagination {
            total
          }
        }
      }
    }
  `;
};
