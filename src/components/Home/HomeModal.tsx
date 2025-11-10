interface HomeModalProps {
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomeModal({ setDisplay }: HomeModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg w-[30%] items-center relative">
        <button
          onClick={() => setDisplay(false)}
          className="self-end top-3 right-3 pb-3 hover:cursor-pointer"
        >
          Close X
        </button>

        <div className="flex flex-row items-center justify-center gap-2 md:gap-10 lg:gap-20 p-2 w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 sm:w-18 md:w-24 h-16 sm:h-18 md:h-24 bg-gray-400 rounded-lg"></div>
            <div className="text-md sm:text-xl font-semibold mt-2">Create Group</div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-16 sm:w-18 md:w-24 h-16 sm:h-18 md:h-24 bg-gray-400 rounded-lg"></div>
            <div className="text-md sm:text-xl font-semibold mt-2">Add Friends</div>
          </div>
        </div>

        <button
          onClick={() => setDisplay(false)}
          className="px-4 py-2 bg-white border rounded hover:bg-gray-300 mt-4 hover:cursor-pointer"
        >
          I will do this later
        </button>
      </div>
    </div>
  );
}
