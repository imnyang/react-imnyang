import { useEffect, useState } from 'react';
import './Help.css';
import Draggable from 'react-draggable';

export default function Help() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'F1') {
                event.preventDefault();
                setIsVisible(!isVisible);
                console.log('Help!');
            }
            if (event.key === 'Escape') {
                setIsVisible(false);
                console.log('Help!');
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible]);

    return (
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div className={`Help ${isVisible ? 'visible' : ''}`}>
                <h1>Help</h1>
                <div style={{display: 'flex', flexDirection: 'row', gap: 100}}>
                    <p>
                        <div className='key_container'>
                            <p className='key'>F1</p>
                            <p>Help</p>
                        </div>
                        <div className='key_container'>
                            <p className='key'>l</p>
                            <p>Change nameIndex</p>
                        </div>
                        
                        <div className='key_container'>
                            <p className='key'>furry</p>
                            <p>Show Furry</p>
                        </div>
                    </p>
                    <p>
                        <div className='key_container'>
                            <p className='key'>m</p>
                            <p>Mailto</p>
                        </div>
                        <div className='key_container'>
                            <p className='key'>g</p>
                            <p>Github</p>
                        </div>
                        <div className='key_container'>
                            <p className='key'>b</p>
                            <p>Blog</p>
                        </div>
                    </p>
                </div>
            </div>
        </Draggable>
    );
}