'use client';

import { useState } from 'react';
import CreateGroupModal from './CreateGroupModal';

export default function GroupsPanel() {
   const [displayModal, setDisplayModal] = useState(false);
   return (
      <div>
         <div className="flex flex-row items-center justify-between p-2">
            <div className="flex flex-row gap-2">
               <div>Sort By</div>
               <div>select box</div>
            </div>
            <button onClick={() => setDisplayModal(true)}>Create Group</button>
         </div>

         {displayModal && <CreateGroupModal setDisplay={setDisplayModal} />}
      </div>
   );
}
