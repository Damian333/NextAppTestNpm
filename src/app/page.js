'use client'
import React, { useState, useEffect } from 'react';
import { AddNewParticipantToFirstStage, CreateParticipantForm, CreateSingleEliminationTournament, TorunamentBracket, RankTournamentTable } from '@playoxygen/react-bravatars-web';

export default function Home() {
  // CSS properties for the layout and large components
  console.log("Home component rendering...");
  useEffect(() => {
    console.log("useEffect is running...");
  
    const intervalId = setInterval(() => {
      // Generate random colors or fetch colors from an API
      const newColors = {
        // ...color properties
      };
      setColors(newColors);
    }, 2000);
  
    return () => {
      console.log("Cleaning up useEffect...");
      clearInterval(intervalId);
    };
  }, []);
  
  const layoutStyles = {
    position: 'relative',
  };

  const largeComponentStyles = {
    // position: 'absolute',
    width: '200px',
    height: '2000px',
    backgroundColor: 'lightgray',
    opacity: 0.1,
  };

  const topStyles = {
    ...largeComponentStyles,
    top: -300,
  };

  const leftStyles = {
    ...largeComponentStyles,
    left: -300,
  };

  const rightStyles = {
    ...largeComponentStyles,
    right: 0,
  };

  const bottomStyles = {
    ...largeComponentStyles,
    bottom: 0,
  };

  const [colors, setColors] = useState({
    gradientLeftColor: 'red',
    gradientRightColor: 'green',
    fontPlayerColor: 'blue',
    tournamentBackgroundColor: 'yellow', // Initial value for tournamentBackgroundColor
    stageHeaderContainerBackgroundColor: 'pink', // Initial value for stageContainerBackgroundColor
    fontStageHeaderContainerColor: 'grey',
    matchBoxColor: 'grey',
    stageHeaderContainerBorderColor: 'white',
    fontMatchHeaderColor: 'grey',
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate random colors or fetch colors from an API
      const newColors = {
        gradientLeftColor: getRandomColor(),
        gradientRightColor: getRandomColor(),
        fontPlayerColor: getRandomColor(),
        tournamentBackgroundColor: getRandomColor(), // Randomize tournamentBackgroundColor
        stageHeaderContainerBackgroundColor: getRandomColor(), // Randomize stageContainerBackgroundColor
        fontStageHeaderContainerColor: getRandomColor(),
        matchBoxColor: getRandomColor(),
        stageHeaderContainerBorderColor: getRandomColor(),
        fontMatchHeaderColor: getRandomColor(),
      };
      setColors(newColors);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      {/* <div style={topStyles}></div>
      <div style={{flexDirection: 'column', display: 'flex'}}>
        <div style={leftStyles}></div>
        <button>
          CLICK ME
        </button> */}
        {/* <ExampleComponent apiUrl='http://localhost:4000/api'/> */}
        <div style={{ padding: '100px', display: 'flex' }}>
            <TorunamentBracket apiUrl='https://klic-brkt-staging.fly.dev/api/' />
        </div>
        <CreateParticipantForm apiUrl='https://klic-brkt-staging.fly.dev/api/' />
        <CreateSingleEliminationTournament
          apiUrl="https://klic-brkt-staging.fly.dev/api/"
          onSuccess={(tournament) => {
            // Your callback logic here
            console.log("Tournament created:", tournament);
            console.log("Tournament created:", tournament.id);
            // You can use this data as needed
          }}
        />
        <AddNewParticipantToFirstStage apiUrl='https://klic-brkt-staging.fly.dev/api/' />
        <RankTournamentTable apiUrl='https://klic-brkt-staging.fly.dev/api/' /> 
        {/* <button>
          CLICK ME
        </button>
        <div style={rightStyles}></div>
      </div>
      */}
      {/* <div style={bottomStyles}></div> */}
    </div>
  );
};