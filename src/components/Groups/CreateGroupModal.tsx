'use client';

interface CreateGroupModalProps {
   setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CreateGroupModal({ setDisplay }: CreateGroupModalProps) {
   const handleCreateGroup = () => {
      console.log('handleCreateGroup clicked');
   };
   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
         <div className="relative flex w-[30%] flex-col rounded-lg bg-white p-6 shadow-lg">
            {/* Close Button */}
            <button
               onClick={() => setDisplay(false)}
               className="absolute top-3 right-3 text-gray-600 hover:cursor-pointer">
               ✕
            </button>

            <h2 className="mb-6 text-center text-xl font-semibold">Create New Group</h2>

            <div className="flex w-full items-center justify-center p-2 pb-4">
               <div className="h-28 w-28 self-center rounded-full bg-gray-200"></div>
            </div>

            <form onSubmit={handleCreateGroup} className="flex w-full flex-col gap-6 pt-2">
               {/* Row — Name */}
               <div className="flex items-center justify-between">
                  <label className="text-md w-1/4 font-semibold text-gray-900">Name</label>
                  <input
                     type="text"
                     name="name"
                     required
                     className="w-3/4 border-b border-gray-400 py-1 focus:border-black focus:outline-none"
                     placeholder="Group name"
                  />
               </div>

               {/* Row — Currency, This can be replaced with map() */}
               <div className="flex items-center justify-between">
                  <label className="text-md w-1/4 font-semibold text-gray-900">Currency</label>
                  <select
                     name="currency"
                     required
                     className="w-3/4 border-b border-gray-400 bg-transparent py-1 focus:border-black focus:outline-none">
                     <option value="">Select</option>
                     <option value="CAD">CAD</option>
                     <option value="USD">USD</option>
                     <option value="KRW">KRW</option>
                     <option value="EUR">EUR</option>
                  </select>
               </div>

               {/* Row — Description */}
               <div className="flex items-center justify-between">
                  <label className="text-md w-1/4 font-semibold text-gray-900">Description</label>
                  <input
                     type="text"
                     name="description"
                     className="w-3/4 border-b border-gray-400 py-1 focus:border-black focus:outline-none"
                     placeholder="Optional"
                  />
               </div>

               {/* Create Button */}
               <button
                  type="submit"
                  className="mt-6 w-1/2 self-center rounded-4xl bg-gray-400 px-4 py-2 text-white hover:cursor-pointer hover:bg-gray-600">
                  Create Group
               </button>
            </form>
         </div>
      </div>
   );
}
