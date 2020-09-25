import React, {useEffect} from 'react';
import { App } from 'mediazact';
import 'mediazact/dist/assets/main.css';
import './mediazact.css';

export default function MediaZact() {
  useEffect(() => {
    document.body.classList.add('mediazact-body')
    return () => {
      document.body.classList.remove('mediazact-body')
    }
  }, [])
  return (
    <div className={'mediazact-container'}>
      <App />
    </div>
  );
}; 