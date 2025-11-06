"use client";

import GroupsPanel from "@/components/Groups/GroupsPanel";
import HomeModal from "@/components/Home/HomeModal";
import { useState } from "react";

export default function HomePage() {
  const [displayModal, setDisplayModal] = useState(true);

  return (
    <div className="">
      <div className="flex flex-row justify-between bg-gray-200">
        <div className="text-lg">SplitMate</div>
        <div className="flex flex-row gap-2">
          <div>icon1</div>
          <div>icon2</div>
        </div>
      </div>
      <div className="text-2xl border-b-1 border-gray-500">Welcome Susan</div>
      <div className="border-b-1 border-gray-500">Recent Transactions</div>
      <div className="h-52 bg-gray-300">...</div>
      <div>Groups</div>

      <div className="h-56 bg-gray-300">
        <GroupsPanel />
      </div>

      {displayModal && <HomeModal setDisplay={setDisplayModal} />}
    </div>
  );
}
