"use client";

interface CreateGroupModalProps {
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CreateGroupModal({ setDisplay }: CreateGroupModalProps) {
  const handleCreateGroup = () => {
    console.log("handleCreateGroup clicked");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg w-[30%] relative">
        {/* Close Button */}
        <button
          onClick={() => setDisplay(false)}
          className="absolute top-3 right-3 hover:cursor-pointer text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center mb-6">Create New Group</h2>

        <div className="w-full flex items-center justify-center p-2 pb-4">
          <div className="self-center w-28 h-28 rounded-full bg-gray-200"></div>
        </div>

        <form onSubmit={handleCreateGroup} className="flex flex-col gap-6 w-full pt-2">
          {/* Row — Name */}
          <div className="flex items-center justify-between">
            <label className="text-md font-semibold text-gray-900 w-1/4">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-3/4 border-b border-gray-400 focus:outline-none focus:border-black py-1"
              placeholder="Group name"
            />
          </div>

          {/* Row — Currency, This can be replaced with map() */}
          <div className="flex items-center justify-between">
            <label className="text-md font-semibold text-gray-900 w-1/4">Currency</label>
            <select
              name="currency"
              required
              className="w-3/4 border-b border-gray-400 focus:outline-none focus:border-black py-1 bg-transparent"
            >
              <option value="">Select</option>
              <option value="CAD">CAD</option>
              <option value="USD">USD</option>
              <option value="KRW">KRW</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          {/* Row — Description */}
          <div className="flex items-center justify-between">
            <label className="text-md font-semibold text-gray-900 w-1/4">Description</label>
            <input
              type="text"
              name="description"
              className="w-3/4 border-b border-gray-400 focus:outline-none focus:border-black py-1"
              placeholder="Optional"
            />
          </div>

          {/* Create Button */}
          <button
            type="submit"
            className="self-center w-1/2 px-4 py-2 bg-gray-400 text-white rounded-4xl
            hover:bg-gray-600 hover:cursor-pointer mt-6"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
}
