import { useState } from 'react';
import './App.css';

function App() {
    const [count] = useState(0);

    return (
        <div className='h-screen w-screen flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-3xl'>React-TailwindCSS-Typescript-Vite-shadcn/ui</h1>
            <h1 className='text-5xl font-bold'>{count}</h1>
            <div className='flex flex-row gap-5'></div>
        </div>
    );
}

export default App;
