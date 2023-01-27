import { Routes,Route } from 'react-router-dom';

import CreateBoard from './Components/Board/CreateBoard';
import Sidebar from './Components/Sidebar/Sidebar';
import Board from './Components/Board/Board';
import PageNotFound from './Components/_404/_404';
import { useState } from 'react';

export default function App() {
    const [tool,setTool] = useState(-1);
    const [prop,setProp]= useState(
        {
            'brush':{
                'size':'5.5',
                'color':'#33F07B',
                'brush':0,
                'border':false,
                'border-color':'#000000',
                'border-width':'0'
            },
            'eraser':{
                'size':'5.5'
            }
        }
    );

    return (
    <Routes>
        <Route path='/' element={<CreateBoard/>}></Route>
        <Route path='/board/:id' element={<><Sidebar tool={tool} setTool={setTool} prop={prop} setProp={setProp}/><Board tool={tool} prop={prop}/></>}></Route>
        <Route path='/404' element={<PageNotFound/>}></Route>
    </Routes>
    );
}