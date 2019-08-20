import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import Select from './select';
import './notes.css';

function TicTacChatNotesV1({config, changeNotes, notes}) {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Tic-Tac-Chat release notes v1.0.0</title>
      </Helmet>
      <div className={'tic-tac-notes-mainContainer'}>
        <h1 className={'tic-tac-notes-heading'}>Tic-Tac-Chat v1.0.0</h1>
        <Select changeNotes={changeNotes} config={config} notes={notes}/>
        <div className={'tic-tac-notes-subHeading'}>Release notes. June 22, 2019</div>
        <div className={'tic-tac-notes-heading-2'}>Play Offline</div>
        <ul className={'tic-tac-notes-ul'}>
          <li className={'tic-tac-notes-li'}>Play tic tac toe with a friend on the same device.</li>
          <li className={'tic-tac-notes-li'}>Jump between any previous move in the game by clicking on the select input on the bottom right of the board.</li>
          <li className={'tic-tac-notes-li'}>Restart game at anytime by clicking the restart game button.</li>
          <li className={'tic-tac-notes-li'}>Announces game status including who is next, who won or that the game was a tie.</li>
        </ul>
        <div className={'tic-tac-notes-heading-2'}>Create Game</div>
        <ul className={'tic-tac-notes-ul'}>
          <li className={'tic-tac-notes-li'}>Create a game by entering in a room name, selecting a move and clicking the create game button.</li>
          <li className={'tic-tac-notes-li'}>Person that created the game goes first, then alternates on every rematch.</li>
          <li className={'tic-tac-notes-li'}>There is some input validation, you cant create a game with a empty username, room name or without selecting a move.</li>
        </ul>
        <div className={'tic-tac-notes-heading-2'}>Join Game</div>
        <ul className={'tic-tac-notes-ul'}>
          <li className={'tic-tac-notes-li'}>Join game will show all available games you can join or simply display "No games found.".</li>
          <li className={'tic-tac-notes-li'}>If there is more than one game available to join a search bar will pop up that allows you to filter games by either room name or game id.</li>
          <li className={'tic-tac-notes-li'}>When someone creates a new game, disconnects or leaves an existing game a notification will popup to let you know that games have been updated.
          You can then pull to refresh on mobile devices or click on the refresh button on desktop. The reason for this is so new games don't pop up and make your screen keep jumping around when you are looking for a game.</li>
          <li className={'tic-tac-notes-li'}>If there is enough games to scroll through, when you start scrolling the menu will disappear to give you a better view of the games and when you scroll back up the menu will reappear.</li>
          <li className={'tic-tac-notes-li'}>The pull to refresh feature works different on iphone and android. On iphone when you start pulling down a loader starts appearing on the screen 1/3 at a time until the full loader is visible, when that happens you can let go and it will update the games.
          For android the whole screen gets pulled down and it refreshes the whole page, which is why I added a cookie to keep track of which tab you are currently using so that when the page refreshes it loads back up on the join game tab with the updated games.
          </li>
          <li className={'tic-tac-notes-li'}>If you try to join a game that is full or no longer exists you will see a pop up error.</li>
        </ul>
        <div className={'tic-tac-notes-heading-2'}>Online Game</div>
        <ul className={'tic-tac-notes-ul'}>
          <li className={'tic-tac-notes-li'}>When both players join the same game they can play against each other and chat by clicking on the input thats labeled "Say hi.".</li>
          <li className={'tic-tac-notes-li'}>Notifications appear when user joins, leaves, wants to rematch or disconnects. Notifications also appear when a user sends a message, if the message is more than 30 characters it will show the first 30 characters of the message followed by "...".</li>
          <li className={'tic-tac-notes-li'}>The game status announces who is next, who won or that game was a tie. If you try to make a move when its not your turn, it will notify that its not your turn.</li>
          <li className={'tic-tac-notes-li'}>When a user sends a message, you can click on the message notification to open the chat.</li>
          <li className={'tic-tac-notes-li'}>After the game ends a rematch button will appear, once both players click the rematch button the game will restart.</li>
          <li className={'tic-tac-notes-li'}>If one of the players leave or disconnects the game board and the chat messages will reset. If both players leave or disconnect then the game gets deleted.</li>
          <li className={'tic-tac-notes-li'}>When you open the chat component it scrolls to the bottom of the messages to show the latest messages. Every time you send or receive a new message it scrolls to the bottom again to continue showing the latest messages on the screen.</li>
        </ul>
        <div className={'tic-tac-notes-heading-2'}>General</div>
        <ul className={'tic-tac-notes-ul'}>
          <li className={'tic-tac-notes-li'}>You can change your username by clicking on the randomly generated username on the top of the main menu that starts with @user. This is just a cookie it does not store it in any database, so multiple users can have the same name.</li>
          <li className={'tic-tac-notes-li'}>The websocket timeouts every 30 seconds or so, once that happens it will attempt to reconnect to the websocket using your existing "clientID" which is just an id that differentiates clients of the websocket.
          The reason for this is so you don't need to refresh the page every time the websocket timeouts. If you are in a game and the websocket timeouts you wont be kicked out of the game because it will reconnect with the same clientID and the server will have access to the current game information.
          If it fails to reconnect then you will be removed from a game if you are in one.
          </li>
          <li className={'tic-tac-notes-li'}>There are events in place to check when you click the back button or close the browser. If you do that then it will disconnect you from the game you are in.</li>
        </ul>
        <div className={'tic-tac-notes-heading-2'}>Known bug</div>
        <ul className={'tic-tac-notes-ul'}>
          <li className={'tic-tac-notes-li'}>If you create or join a game and just close your laptop or lock your phone screen then you wont be removed from the game and the game doesn't get deleted.
          Working on a fix soon.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default hot(module)(TicTacChatNotesV1)