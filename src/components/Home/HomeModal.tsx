interface HomeModalProps {
   setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomeModal({ setDisplay }: HomeModalProps) {
   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
         <div className="relative flex w-[30%] flex-col items-center rounded-lg bg-white p-6 shadow-lg">
            <button onClick={() => setDisplay(false)} className="top-3 right-3 self-end pb-3 hover:cursor-pointer">
               Close X
            </button>

            <div className="flex w-full flex-row items-center justify-center gap-2 p-2 md:gap-10 lg:gap-20">
               <div className="flex flex-col items-center justify-center">
                  <div className="h-16 w-16 rounded-lg bg-gray-400 sm:h-18 sm:w-18 md:h-24 md:w-24"></div>
                  <div className="text-md mt-2 font-semibold sm:text-xl">Create Group</div>
               </div>

               <div className="flex flex-col items-center justify-center">
                  <div className="h-16 w-16 rounded-lg bg-gray-400 sm:h-18 sm:w-18 md:h-24 md:w-24"></div>
                  <div className="text-md mt-2 font-semibold sm:text-xl">Add Friends</div>
               </div>
            </div>

            <button
               onClick={() => setDisplay(false)}
               className="mt-4 rounded border bg-white px-4 py-2 hover:cursor-pointer hover:bg-gray-300">
               I will do this later
            </button>
         </div>
      </div>
   );
}
