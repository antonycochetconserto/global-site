import { ReactElement } from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        className="w-8/12 flex flex-row mx-auto h-96 pt-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        onMouseLeave={() => setIsBigMenuShow(false)}
        onMouseEnter={() => setIsBigMenuShow(true)}
      >
        <div className="bg-slate-50 rounded-2xl w-full">
          {bigMenuType(typeMenu)}
        </div>
      </motion.div>
    </>
  );
}
