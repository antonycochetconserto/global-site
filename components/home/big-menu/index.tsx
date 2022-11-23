import Link from 'next/link';

interface BigMenu {
  setIsBigMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BigMenu({ setIsBigMenuShow }: BigMenu) {
  return (
    <>
      <div
        onMouseLeave={() => setIsBigMenuShow(false)}
        onMouseEnter={() => setIsBigMenuShow(true)}
        className="w-8/12 flex flex-row mx-auto h-96 pt-6"
      >
        <div className="bg-slate-50 w-full rounded-2xl"></div>
      </div>
    </>
  );
}
