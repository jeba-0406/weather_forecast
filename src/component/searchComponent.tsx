"use client" 
import {Input} from "@heroui/react";
import Search from "@/atoms/search";
type Props = {
  onSearch: (city: string) => void;
};
export default function SearchComponent({onSearch}:Props) {
  
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center">
      <Input
        className="bg-white rounded-3xl text-black h-8 w-[300px]"
        placeholder="Enter city"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const target = e.target as HTMLInputElement;
            onSearch(target.value.trim());
          }
        }}
        classNames={{
          base: "w-[300px] h-11", // total wrapper
          inputWrapper: "rounded-3xl bg-white ", // outer border
          innerWrapper: "rounded-3xl focus:outline-none focus:ring-0 focus:border-transparent",
          input: "text-black pl-4 placeholder:pl-1 pt-1 outline-none focus:outline-none focus:ring-0 focus:border-none rounded-3xl",
        }}
      />
      
    </div>
  );
}
