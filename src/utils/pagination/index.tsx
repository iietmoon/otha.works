export default function pagination(totalObjects: number, itemsPerPage: number): number[] {
    const totalPages: number = Math.ceil(totalObjects / itemsPerPage);
    const pagesArray: number[] = Array.from({ length: totalPages }, (_, index) => index + 1);
    return pagesArray;
  }