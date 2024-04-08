import type { Request, Response } from "express";


const RoutesGuide = (req: Request, res: Response) => {
  const routeGuide = {
    get: {
      get_searchAll: "/product",
      get_byID: "/product?id={id}",
      get_perPage: "/product?page={#page}",
      get_searchByTitle: "/product?title={word}",
      get_searchByPriceOrder: "/product?order={asc or desc}",
      get_searchByPriceLimit: "/product?price?{price}",
    },
    post: {
      post_product: "/product",
    },
    put: {
      put_product: "/product",
    },
    delete: {
      delete_id: "/product/:id",
    },
  };

  return res.status(200).json(routeGuide);
};


export default RoutesGuide