import React, { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');

  if(value.length > 15) {
    setValue(value.slice(0, 15));
  }

  return (
    <div className="h-screen w-full flex bg-[#E0E5EC] justify-center items-center">
      <div className="bodyCal p-10 rounded-md bg-[#E0E5EC] shadow-neumorph">
        <div className=" headerBody">
          <div className="h-[80px] flex items-center rounded-md p-4 w-full valueCom shadow-inner-neumorph">
            <p className="text-end w-full digital-7 font-semiboldbold text-[35pt] text-gray-800">{value ? value : '0'}</p>
          </div>
        </div>

        <form action="" className="mt-4 w-full grid grid-cols-4 gap-4 row-span-3">
          <input type="button" value="AC" className="tombol shadow-neumorph" onClick={() => setValue('')} />
          <input type="button" value="DE" className="tombol text-[#FB7575] font-semibold shadow-neumorph" onClick={() => setValue(value.slice(0, -1))} />
          <input type="button" value="." className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="/" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="7" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="8" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="9" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="*" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="4" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="5" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="6" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="-" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="1" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="2" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="3" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="+" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="0" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="00" className="tombol shadow-neumorph" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value="=" className="tombol col-span-2 shadow-neumorph shadow-neumorph-active " onClick={e => setValue(eval(value).toString())} />
        </form>
      </div>
    </div>
  );
}
