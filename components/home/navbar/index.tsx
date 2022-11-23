import React, { useState } from 'react';
import Link from 'next/link';
import BigMenu from '../big-menu';

export default function Navbar() {
  const [isBigMenuShow, setIsBigMenuShow] = useState<boolean>(false);

  const menu: {
    className: string;
    items: { title: string; linkTarget: string; showBigMenu: boolean }[];
  } = {
    className:
      'hover:bg-blue-50 duration-300 ease-linear rounded-xl py-2 px-4 hover:text-blue-500 cursor-pointer',
    items: [
      {
        title: 'Commercer',
        linkTarget: '/',
        showBigMenu: false,
      },
      {
        title: 'Sélection',
        linkTarget: '/selection',
        showBigMenu: true,
      },
      {
        title: 'Services',
        linkTarget: '/services',
        showBigMenu: true,
      },
      {
        title: 'Catégories',
        linkTarget: '/categories',
        showBigMenu: true,
      },
      {
        title: 'Notre histoire',
        linkTarget: '/notre-histoire',
        showBigMenu: false,
      },
    ],
  };

  return (
    <>
      <div className="flex flex-row justify-center space-x-8 pt-6">
        <ul
          onMouseLeave={() => setIsBigMenuShow(false)}
          className="flex flex-row space-x-8 font-semibold text-blue-900 text-xl tracking-tight"
        >
          {menu.items.map(({ title, linkTarget, showBigMenu }) => {
            return (
              <li
                onMouseEnter={() => setIsBigMenuShow(showBigMenu)}
                className={menu.className}
              >
                <Link href={linkTarget}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <button className="bg-gradient-to-r from-blue-700 to-fuchsia-700 rounded-xl py-2 px-4 text-xl font-semibold text-white tracking-tight hover:from-blue-600 hover:to-fuchsia-600 hover:ease-linear transition ease-in duration-150">
          Explorer
        </button>
      </div>
      <div onMouseLeave={() => setIsBigMenuShow(false)}>
        {isBigMenuShow && <BigMenu setIsBigMenuShow={setIsBigMenuShow} />}
      </div>
    </>
  );
}