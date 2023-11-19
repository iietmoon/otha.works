export const portfolioCategoriesQuery = () =>{
    return `query PortfolioCategory {
        portfolioCategories {
            nodes {
              id
              name
              slug
            }
        }
      }`
}