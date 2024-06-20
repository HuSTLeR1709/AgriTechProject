import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "My Products",
    path: "/dashboard/my-products",
    type: ACCOUNT_TYPE.SELLER,
    icon: "VscDashboard",
  },

  {
    id: 4,
    name: "Add Product",
    path: "/dashboard/add-product",
    type: ACCOUNT_TYPE.SELLER,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Orders",
    path: "/dashboard/orders",
    type: ACCOUNT_TYPE.USER,
    icon: "VscHistory",
  },
  {
    id: 6,
    
    name: "Cart",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.USER,
    icon: "VscBookmark",
  },
  {
    id: 7,
    name: "All Products",
    path: "/dashboard/all-products",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscHistory",
  },
  {
    id: 8,
    name: "Add Blog",
    path: "/dashboard/add-blog",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
  {
    id: 9,
    name: "All Blogs",
    path: "/dashboard/blogs",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscHistory",
  },
];
