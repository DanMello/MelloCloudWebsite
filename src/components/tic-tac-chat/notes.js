import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import TicTacChatNotesV1 from './notesv1'
import TicTacChatNotesV2 from './notesv2'
import ContentWrapper from '../contentwrapper/ContentWrapper';
import './notes.css';

function TicTacChatNotes({config}) {

  const [notes, setNotes] = useState('');

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  function changeNotes(e) {
    setNotes(e.target.value);
  };

  let component;
  switch(notes) {
    case 'notesv1.0.0': 
      component = <TicTacChatNotesV1 changeNotes={changeNotes} config={config} notes={notes}/>
      break;
    case 'notesv1.1.1': 
      component = <TicTacChatNotesV2 changeNotes={changeNotes} config={config} notes={notes}/>
      break;
    default: 
      component = <TicTacChatNotesV2 changeNotes={changeNotes} config={config} notes={notes} />
      break;
  };

  return (
    <ContentWrapper config={config}>
      {component}
    </ContentWrapper>
  );
};

export default hot(module)(TicTacChatNotes)