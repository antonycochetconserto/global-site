import Link from 'next/link';

export default function BigMenuTypeCategories() {
  const menuCategories: {
    className: string;
    items: {
      title: string;
      linkTarget: string;
      className: string;
    }[];
  } = {
    className: 'space-y-3 text-gray-500 text-lg font-semibold',
    items: [
      {
        title: 'Cuisine & Maison',
        linkTarget: 'categories/cuisine-maison',
        className: 'hover:text-gray-800 transition duration-200',
      },
      {
        title: 'Beauté et Santé',
        linkTarget: 'categories/beaute-sante',
        className: 'hover:text-gray-800 transition duration-200',
      },
      {
        title: 'Sports et Loisirs',
        linkTarget: 'categories/sports-loisirs',
        className: 'hover:text-gray-800 transition duration-200',
      },
      {
        title: 'Chaussures',
        linkTarget: 'categories/chaussures',
        className: 'hover:text-gray-800 transition duration-200',
      },
    ],
  };

  return (
    <>
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-6/12 space-y-3">
          <h3 className="text-xl font-bold tracking-tight">
            Les catégories préférées
          </h3>
          <div className="flex flex-row space-x-4">
            <div className="opacity-95 hover:opacity-100 w-32 h-40 bg-gradient-to-r from-indigo-700 to-blue-600 rounded-2xl cursor-pointer transition ease-in-out duration-300"></div>
            <div className="opacity-95 hover:opacity-100 w-32 h-40 bg-gradient-to-r from-purple-700 to-violet-600 rounded-2xl cursor-pointer transition ease-in-out duration-300"></div>
            <div className="opacity-95 hover:opacity-100 w-32 h-40 bg-gradient-to-r from-slate-700 to-gray-600 rounded-2xl cursor-pointer transition ease-in-out duration-300"></div>
          </div>
        </div>
        <div className="flex flex-col w-6/12 space-y-3">
          <h3 className="text-xl font-bold tracking-tight">Les catégories</h3>
          <div className="flex flex-row space-x-24">
            <ul className={menuCategories.className}>
              {menuCategories.items.map(({ title, linkTarget, className }) => {
                return (
                  <li className={className}>
                    <Link href={linkTarget}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <ul className="space-y-3 text-gray-500 text-lg font-semibold">
              <li className="hover:text-gray-800 transition duration-200">
                <Link href="categories/vetements">Vêtements</Link>
              </li>
              <li className="hover:text-gray-800 transition duration-200">
                <Link href="categories/handmade">Handmade</Link>
              </li>
              <li className="hover:text-gray-800 transition duration-200">
                <Link href="categories/bricolage">Bricolage et Jardin</Link>
              </li>
              <li className="text-gray-900 hover:text-gray-500 transition duration-200">
                <Link href="categories/all">Tout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
