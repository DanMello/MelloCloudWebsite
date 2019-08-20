import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import Select from './select';
import './notes.css';

function TicTacChatNotesV2({config, changeNotes, notes}) {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Tic-Tac-Chat release notes v1.1.1</title>
      </Helmet>
      <div className={'tic-tac-notes-mainContainer'}>
        <h1 className={'tic-tac-notes-heading'}>Tic-Tac-Chat v1.1.1</h1>
        <Select changeNotes={changeNotes} config={config} notes={notes}/>
        <div className={'tic-tac-notes-subHeading'}>Release notes. August 18, 2019</div>
        <div className={'tic-tac-notes-heading-2'}>Bug Fixes</div>
        <ul className={'tic-tac-notes-ul'}>
          <li className={'tic-tac-notes-li'}>Fixed issue where if a user created a game and closed laptop or locked their phone screen the game would never be deleted and would be stuck on the list of games even if no one was in there. 
            The solution for this was to create a TTL index (Time To Live) in mongodb that deletes any game after 10 mins of inactivity. 
            Every time you make a move or send a message or any other interaction that makes a server call, the time of the index will be updated. The game will only get deleted if you do nothing for 10 minutes.
          </li>
        </ul>
        <div className={'tic-tac-notes-heading-2'}>New Features</div>
        <ul className={'tic-tac-notes-ul'}>
          <li className={'tic-tac-notes-li'}>
            There is a new option available in game after you create or a join a game called "More options" which allows you to.
            <ul className={'tic-tac-notes-ul'}>
              <li className={'tic-tac-notes-li'}>If you are the host you can kick the other player by clicking the "Kick Player" button under the players name in the "Players" section.</li>
              <li className={'tic-tac-notes-li'}>If you are the host can you invite another player if the game is not full via sms or email by entering in their info under "Invite Players" section and clicking the send invite button. Numbers cannot contain parenthesis or dashes and must be a 10 digit number from one of the 4 major providers ATT, Verizon, Sprint or T-mobile.</li>
              <li className={'tic-tac-notes-li'}>If you are the host you can make the game private by clicking on the checkbox next to "Private Game" under "More Settings". Private games will not show up on the list of games and players can only join via invite.</li>
              <li className={'tic-tac-notes-li'}>If you are not the host and you go to "More options" you will be able to see the list of players in the game.</li>
            </ul>
          </li>
        </ul>
        <div className={'tic-tac-notes-heading-2'}>Implementations</div>
        <ul className={'tic-tac-notes-ul'}>
          <li className={'tic-tac-notes-li'}>
            Text messages are sent from nodemailer with the email mellocloudsoftware@gmail.com. I store the 4 main SMS gateway domains in a array: ATT, Verizon, T-mobile and Sprint. 
            Then loop through them sending the message to each one, which ever provider contains the number will deliver the message. Then the implementation goes as follows.
          </li>
          <ol className={'tic-tac-notes-ul'}>
            <li className={'tic-tac-notes-li'}>The text message contains a link to a sub domain (game.mellocloud.com) which handles all api calls for tic-tac-chat. 
            The link contains a query string with a gameId and a one time token along with a message saying you have been invited to play tic-tac-chat.
            </li>
              <li className={'tic-tac-notes-li'}>
                Once the link is clicked the backend will check if the game is still available, that it is not full and that the link has not been used yet. If any of these are true you will be redirected to the tic-tac-chat page with an error in the query string that gets displayed on the screen. 
                After that the backend removes the token from the database and generates a random username, clientID and another token. The backend then stores the new username, clientID and token in the document with the gameId from the link along with some other info like the move (X or O) based on the other user in the document. 
                After that the backend redirects the user to the front-end with the new username, clientID, token, and current gameId in the query string.
              </li>
              <li className={'tic-tac-notes-li'}>
                Once you reach the front-end with all that new information in the query string you will be connected to the WebSocket with that new clientID that was made for you.
                The clientID is just used to differentiate users in the WebSocket. Then the front-end will check if you already had a username stored in a cookie from before and if so it will use that instead of the random username created earlier.
                A message gets sent to the WebSocket called 'joinFromInvite' and it passes all this new info clientID, username from server and username from your browser cookie, token and gameId.
                The WebSocket then checks if the game still exist and not full and if this token has been used yet which like before will redirect with error if so. 
                Then it removes the token from the document so it cant be used again and checks if a username was passed from the front-end (the one from the cookie) if so it updates the game changing
                the old username that was generated to the one you already had from before. After that the WebSocket puts you in the game and lets the other user know you joined and thats pretty much it.
              </li>
              <li className={'tic-tac-notes-li'}>
                The email message works the same way, I just wanted to talk a little about this implementation because I thought it was cool and its the most complicated thing about the new update!
              </li>
          </ol>
        </ul>
      </div>
    </div>
  );
};

export default hot(module)(TicTacChatNotesV2)