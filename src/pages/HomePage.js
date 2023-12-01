import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (n === 0) {

    } else {
      console.log('asdl;k');
    }
  }, [n]);
  return (
    <div>
      <button onClick={() => setN(n + 1)}>change to</button>

    </div>
  )
}

export default HomePage
