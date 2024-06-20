import { Input } from "@/components/ui/input";
import { LayoutGrid, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="shadow-md py-2">
        <div className="container flex items-center gap-8">
          <div>
            <Image src="/logo.svg" alt="logo" width={150} height={100} />
          </div>
          <h2 className="flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200">
            <LayoutGrid className="h-5 w-5" /> Category
          </h2>
          <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
            <Search />
            <Input type="email" placeholder="Email" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
