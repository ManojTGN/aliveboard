import { useState } from 'react';

import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

function App() {
    const [tool, setTool] = useState(()=>{return -1});
    const [prop,setProp] = useState(()=>{return {
        'offset':{
            'x':0,
            'y':0
        },
        'brush':{
            'size':'5.5',
            'gap':0,
            'color':'#33F07B',
            'brush':0,
            'border':false,
            'border-color':'#000000',
            'border-width':'0'
        }
    }});

    return (
        <>
            <Sidebar prop={prop} setProp={setProp} tool={tool} setTool={setTool} />
            <Canvas tool={tool} prop={prop}/>
        </>
    );
}

export default App;
