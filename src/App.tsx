import React, { useState } from "react";
import logo from "./logo.svg";
import { BsGithub } from "react-icons/bs";
import { Keyboard } from "react-music-keyboard";

function App() {
  const [selectedKey, setSelectedKey] = useState("");

  return (
    <main
      className="w-screen h-screen flex flex-col justify-center items-center p-9"
      style={{
        background:
          "linear-gradient(117.92deg, #353776 4.93%, #5899C8 51.25%, #181A47 92.37%)",
        boxShadow: "inset 0px 0px 250px rgba(0, 0, 0, 0.6)",
      }}
    >
      <header className="">
        <div className="w-full h-1/4 flex items-center justify-center p-2">
          <img src={logo} className="App-logo h-full" alt="logo" />
        </div>
        <div className="w-full h-1/4 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center text-slate-200 font-black p-5">
            react-music-keyboard
          </h1>
          <p className="text-2xl text-slate-200 font-medium">
            Selected key: {selectedKey}
          </p>
        </div>
        <div className="w-full h-1/4 flex justify-center items-center ">
          <Keyboard
            whiteKeyColor="#d1e0ff"
            blackKeyColor="#23365c"
            borderRadius={15}
            height={100}
            whiteKeyWidth={35}
            blackKeyWidth={35}
            blackKeyHeight={75}
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
            blackKeyClass="black-key"
            whiteKeyClass="white-key"
            containerClass="keyboard"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-transparent py-1">
          <a
            className="text-md text-slate-200 flex flex-col items-center justify-center hover:text-slate-300 duration-100 mb-2"
            href="https://github.com/ryan-zhu-music/react-music-keyboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="mb-2">A simple React Component by Ryan Zhu</p>
            <BsGithub color="#e2e8f0" size={30} />
          </a>
          <a
            className="text-md font-bold uppercase bg-slate-200/40 rounded-full py-1 px-6 hover:scale-105 duration-300 ease-out text-slate-200"
            href="https://www.npmjs.com/package/react-music-keyboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install!
          </a>
        </div>
      </header>
    </main>
  );
}

export default App;
