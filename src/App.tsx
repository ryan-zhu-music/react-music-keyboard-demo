import React, { useState } from "react";
import logo from "./logo.svg";
import { BsGithub } from "react-icons/bs";
import Keyboard from "./components/keyboard";

function App() {
  const [selectedKey, setSelectedKey] = useState("");

  return (
    <main
      className="w-screen h-screen flex flex-col justify-center items-center p-10"
      style={{
        background:
          "linear-gradient(117.92deg, #353776 4.93%, #5899C8 51.25%, #181A47 92.37%)",
        boxShadow: "inset 0px 0px 250px rgba(0, 0, 0, 0.6)",
      }}
    >
      <header className="">
        <div className="w-full h-1/3 flex items-center justify-center">
          <img src={logo} className="App-logo h-full" alt="logo" />
        </div>
        <div className="w-full h-1/6 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center text-slate-200 font-black p-5">
            react-music-keyboard
          </h1>
          <p className="text-2xl text-slate-200 font-medium">
            Selected key: {selectedKey}
          </p>
        </div>
        <div className="w-full h-1/3 flex justify-center items-center ">
          <Keyboard
            whiteKeyColor="#d1e0ff"
            blackKeyColor="#23365c"
            borderRadius={15}
            height={150}
            whiteKeyWidth={40}
            blackKeyWidth={40}
            blackKeyHeight={110}
            keySpacing={5}
            startNote="C3"
            endNote="C4"
            onKeyPress={(note) => {
              setSelectedKey(note);
            }}
            transition={100}
            containerStyles={{
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>
        <div className="w-full h-1/6 flex items-center justify-center">
          <a
            className="text-md text-slate-200 flex flex-col items-center justify-center"
            href="https://github.com/ryan-zhu-music/react-music-keyboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="mb-2">A simple React Component by Ryan Zhu</p>
            <BsGithub color="#e2e8f0" size={30} />
          </a>
        </div>
      </header>
    </main>
  );
}

export default App;
