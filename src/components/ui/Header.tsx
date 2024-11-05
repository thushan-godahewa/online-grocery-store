"use client";

import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import { getCategories } from "@/lib/GlobalApi";

function Header() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    getCategories().then(res => {
      console.log("Category List: ", res);
      setCategoryList(res);
    });
  };

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo2.png" alt="Logo" width={100} height={100} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="h-5 w-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
              <DropdownMenuItem key={index} className="flex gap-2 items-center cursor-pointer">
                <Image
                  src={process.env.GROCERY_ADMIN_BASE_URL + category?.icon[0]?.url}
                  unoptimized={true}
                  alt="Category Icon"
                  width={25}
                  height={25}
                />
                <h2>{category.name}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
