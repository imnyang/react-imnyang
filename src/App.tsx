import Root from './pages/Root';
import Timeline from './pages/Timeline';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const keySequence: string[] = [];
  const targetSequence = 'furry';

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        // 단일 키 입력 감지
        console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
        console.log(`KeySquare: ${keySequence.join('')}`);
        // 특정 문자열 시퀀스 감지
        keySequence.push(event.key);
        if (keySequence.length > targetSequence.length) {
            keySequence.shift();
        }
        
        
        if (event.key === 'm') {
          console.log('Get mail');
          document.location.href = 'mailto:me@imnyang.xyz';
        }
        if (event.key === 'g') {
          console.log('Get Github');
          document.location.href = 'https://github.com/imnyang';
        }
        if (event.key === 'b') {
          console.log('Get Github');
          document.location.href = 'https://blog.imnyang.xyz';
        }
        if (event.key === 't') {
          console.log('Get Timeline');
          document.location.href = 'https://imnyang.xyz/timeline';
        }
        if (event.key === 'i') {
          console.log('Get isangjeong.today');
          document.location.href = 'https://instagram.com/isangjeong.today';
        }

        if (keySequence.join('') === targetSequence) {
            console.log('Furry sequence detected!');
            document.location.href = 'https://ny64.kr';
        }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
  }, [keySequence]);

  return (
    <>
      <Routes>
        <Route path="/" Component={Root} />
        <Route path="/timeline" Component={Timeline} />
      </Routes>
    </>
  );
}
export default App;