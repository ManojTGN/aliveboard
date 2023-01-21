import { useState } from 'react';

import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

function App() {
    const [tool, setTool] = useState(()=>{return -1});

    return (
        <>
            <Sidebar tool={tool} setTool={setTool} />
            <Canvas tool={tool}/>
        </>
    );
}

export default App;
