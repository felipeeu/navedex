import React from "react";

const Navers = ({ navers }) => (
  <>
    {navers && navers.map((naver, idx) => <div key={idx}> {naver.name}</div>)}
  </>
);

export default Navers;
