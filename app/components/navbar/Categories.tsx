'use client';

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { IoDiamond } from 'react-icons/io5';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
   {
      label: 'Beach',
      icon: TbBeach,
      description: 'The property that is located near the beach.',
   },
   {
      label: 'Windmills',
      icon: GiWindmill,
      description: 'The property that has windmills.',
   },
   {
      label: 'Modern',
      icon: MdOutlineVilla,
      description: 'The property that is modern.'
   },
   {
      label: 'Countryside',
      icon: TbMountain,
      description: 'The property that is located in the countryside.'
   },
   {
      label: 'Pools',
      icon: TbPool,
      description: 'The property that has pools.'
   },
   {
      label: 'Islands',
      icon: GiIsland,
      description: 'The property that is located in an island.'
   },
   {
      label: 'Lake',
      icon: GiBoatFishing,
      description: 'The property that is located near a lake.'
   },
   {
      label: 'Skiing',
      icon: FaSkiing,
      description: 'The property that is modern.'
   },
   {
      label: 'Castels',
      icon: GiCastle,
      description: 'The property that is located near a castel.'
   },
   {
      label: 'Camping',
      icon: GiForestCamp,
      description: 'The property that is located near a camping.'
   },
   {
      label: 'Arctic',
      icon: BsSnow,
      description: 'The property that is located in the arctic.'
   },
   {
      label: 'Caves',
      icon: GiCaveEntrance,
      description: 'The property that is located in a cave.'
   },
   {
      label: 'Desert',
      icon: GiCactus,
      description: 'The property that is located in the desert.'
   },
   {
      label: 'Barns',
      icon: GiBarn,
      description: 'The property that is located near a barn.'
   },
   {
      label: 'Lux',
      icon: IoDiamond,
      description: 'The property that is luxurious.'
   }
];

const Categories = () => {
   const params = useSearchParams();
   const category = params?.get('category');
   const pathname = usePathname();

   const isHome = pathname === '/';

   if (!isHome) {
      return null;
   }

   return ( 
      <Container>
         <div
            className="
               flex
               pt-4
               flex-row
               items-center
               justify-between
               overflow-x-auto
            "
         >
            {categories.map((item) => (
               <CategoryBox
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  selected={category === item.label}
               />
            ))}
         </div>
      </Container>
    );
}
 
export default Categories;