import { useEffect, useState, useMemo } from 'react';  
import './Root.css';
import Help from '../component/help';

function Root() {

  const name: string[] = useMemo(() => ['imnyang', '아임냥', '암냥', '임냥', '@not.furry_', '@imnyang', '@mahiro_me'], []);
  const [nameIndex, setNameIndex] = useState(0);
  useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
          // 단일 키 입력 감지
          console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
          if (event.key === 'l') {
            console.log('Change My Name');
            setNameIndex((prevIndex) => (prevIndex + 1) % name.length);
          }
      };
          
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
          document.removeEventListener('keydown', handleKeyDown);
      };
    }, [name.length, name]);
  return (
    <div className='App'>
      <h1 style={{color: '#fadfee', fontSize: 60, margin: 0}}>
        {name[nameIndex]}
      </h1>
      <div className='key_container'>
        <p>Press </p>
        <p style={{fontWeight: 800}}>F1</p>
        <p> and Check Help</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
        <a href="mailto:me@imnyang.xyz">📬 Mail</a>
        <a href='https://github.com/imnyang'>🐈‍⬛ Github</a>
        <a href='https://blog.imnyang.xyz'>📝 Blog</a>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
        <a href="/timeline">🌈 Timeline</a>
        <a href='https://instagram.com/isangjeong.today'>🥕 isangjeong.today</a>
      </div>
      <Help />
    </div>
  )
}

export default Root;