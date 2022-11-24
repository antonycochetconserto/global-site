import { ReactComponentElement, ReactElement } from 'react';
import BigMenuTypeSelection from './type/selection';
import BigMenuTypeServices from './type/services';
import BigMenuTypeCategories from './type/categories';

interface BigMenu {
  setIsBigMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
  typeMenu: string;
}

export default function BigMenu({ setIsBigMenuShow, typeMenu }: BigMenu) {
  const bigMenuType = (typeMenu: string): ReactElement | boolean => {
    switch (typeMenu) {
      case 'selection':
        return <BigMenuTypeSelection />;
      case 'services':
        return <BigMenuTypeServices />;
      case 'categories':
        return <BigMenuTypeCategories />;
      default:
        return false;
    }
  };

  return (
    <>
      <div
        onMouseLeave={() => setIsBigMenuShow(false)}
        onMouseEnter={() => setIsBigMenuShow(true)}
        className="w-8/12 flex flex-row mx-auto h-96 pt-6"
      >
        <div className="bg-slate-50 w-full rounded-2xl">
          {bigMenuType(typeMenu)}
        </div>
      </div>
    </>
  );
}
