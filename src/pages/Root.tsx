import { useEffect, useState } from 'react';  
import { useLocation } from 'react-router-dom';
import './Root.css';

function Root() {
  const location = useLocation();
  const [imageSrc, setImageSrc] = useState('https://f.imnyang.xyz/profile/imnyang.webp');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.has('kawaii')) {
      setImageSrc('https://f.imnyang.xyz/profile/magic_imnyang.webp');
    } else {
      setImageSrc('https://f.imnyang.xyz/profile/imnyang.webp');
    }
  }, [location.search]);

  return (
    <div className='App'>
      <div className='container'>
        <div className='left'>
          <img src={imageSrc} width={256} className='profile' />
          <h1 style={{color: '#241f22', fontSize: 60, margin: 0}}>
            imnyang
          </h1>

          <div>
            <p style={{textAlign: 'left'}}>
              🖥️ Software Engineer
              <br/>
              🎨 UI / UX Designer in <a href='https://sqlare.com'>Sqlare</a>
              <br/><br/>
              📚 Middle School Student in South Korea
            </p>
          </div>
        </div>


        <div className='right'>
          <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
            <a href="mailto:me@imnyang.xyz">📬 Mail</a>
            <a href='https://github.com/imnyang'>🐈‍⬛ Github</a>
            <a href='https://blog.imnyang.xyz'>📝 Blog</a>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
            <a href="/timeline">🌈 Timeline</a>
            <a href='https://instagram.com/isangjeong.today'>🥕 isangjeong.today</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;