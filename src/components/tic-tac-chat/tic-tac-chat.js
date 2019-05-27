import React from 'react';
import { Game } from 'tic-tac-chat';
import { FaCloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'tic-tac-chat/dist/main.css';
import './tictac.css';

export default function TicTacChat({config}) {
  let { isMobile } = config; 
  return (
    <div className={isMobile ? 'tic-tac-mainContainer-mobile' : 'tic-tac-mainContainer'}>
      <Helmet>
        <title>Tic-Tac-Chat : Chat and play tic tac toe online with friends.</title>
      </Helmet>
      <div className={isMobile ? 'tic-tac-subContainer-mobile' : 'tic-tac-subContainer'}>
        <Game config={config} />
        <div className='contact-logo-container tic-tac-marginTop'>
          <Link to='/' className='contact-logo'>
            <FaCloud className='contact-cloudIcon' />
            <div className='contact-mellocloud'>mello cloud</div>
          </Link>
        </div>
      </div>
    </div>
  )
};