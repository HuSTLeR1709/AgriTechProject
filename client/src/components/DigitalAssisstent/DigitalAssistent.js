// import React from 'react'

// const DigitalAssistent = () => {
//   return (
//     <div className='mt-14 ml-14'>
//         <iframe height="430" width="350" src="https://console.dialogflow.com/api-client/demo/embedded/45e887b5-8d23-492a-886c-1d1993dd6c96"></iframe>

//     </div>
//   )
// }

// export default DigitalAssistent

import React, { useState } from 'react';

const DigitalAssistent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='mt-14 ml-14'>
      <button className='bg-black text-white text-4xl mt-24' onClick={handleToggleExpand}>
        Click me to Chat
      </button>
        <df-messenger
          intent="WELCOME"
          chat-title="LeafDoctor"
          agent-id="45e887b5-8d23-492a-886c-1d1993dd6c96"
          expand = {expanded}
          language-code="en"
        ></df-messenger>
    </div>
  );
};

export default DigitalAssistent;
