import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import BigMenu from '../big-menu';

export default function Navbar() {
  const [isBigMenuShow, setIsBigMenuShow] = useState<boolean>(false);
  const [typeMenu, setTypeMenu] = useState<string>('');

  const menu: {
    className: string;
    items: {
      title: string;
      linkTarget: string;
      showBigMenu: boolean;
      type: string;
    }[];
  } = {
    className:
      'hover:bg-blue-50 duration-300 ease-linear rounded-xl py-2 px-4 hover:text-blue-500 cursor-pointer',
    items: [
      {
        title: 'Commercer',
        linkTarget: '/',
        showBigMenu: false,
        type: 'none',
      },
      {
        title: 'Sélection',
        linkTarget: '/selection',
        showBigMenu: true,
        type: 'selection',
      },
      {
        title: 'Services',
        linkTarget: '/services',
        showBigMenu: true,
        type: 'services',
      },
      {
        title: 'Catégories',
        linkTarget: '/categories',
        showBigMenu: true,
        type: 'categories',
      },
      {
        title: 'Notre histoire',
        linkTarget: '/notre-histoire',
        showBigMenu: false,
        type: 'none',
      },
    ],
  };

  return (
    <>
      <div className="flex flex-row justify-center space-x-8 pt-6">
        <ul
          onMouseLeave={() => setIsBigMenuShow(false)}
          className="flex flex-row space-x-8 font-semibold text-white text-xl tracking-tight"
        >
          {menu.items.map(({ title, linkTarget, showBigMenu, type }) => {
            return (
              <li
                onMouseEnter={() => {
                  setIsBigMenuShow(showBigMenu), setTypeMenu(type);
                }}
                className={menu.className}
              >
                <Link href={linkTarget}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <button className="bg-white rounded-xl py-2 px-4 text-xl font-semibold text-gray-700 tracking-tight hover:from-blue-600 hover:to-fuchsia-600 hover:ease-linear transition ease-in duration-150">
          Explorer
        </button>
      </div>
      <div onMouseLeave={() => setIsBigMenuShow(false)}>
        {isBigMenuShow && (
          <BigMenu setIsBigMenuShow={setIsBigMenuShow} typeMenu={typeMenu} />
        )}
      </div>
    </>
  );
}
