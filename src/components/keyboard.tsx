import * as React from "react";

const keyNames = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeyNames = ["C", "D", "F", "G", "A"];

const allWhiteKeys = ["A0", "B0"];
const allBlackKeys = ["A#0"];
for (let i = 1; i <= 7; i++) {
  keyNames.forEach((note) => {
    allWhiteKeys.push(note + String(i));
  });
  blackKeyNames.forEach((note) => {
    allBlackKeys.push(note + "#" + String(i));
  });
}
allWhiteKeys.push("C8");

type Props = {
  height?: number;
  whiteKeyWidth?: number;
  blackKeyWidth?: number;
  blackKeyHeight?: number;
  keySpacing?: number;
  startNote?: string;
  endNote?: string;
  onKeyPress?: (note: string) => void;
  borderRadius?: number;
  whiteKeyColor?: string;
  blackKeyColor?: string;
  transition?: number;
  whiteKeyStyles?: any;
  blackKeyStyles?: any;
  containerStyles?: any;
};

const Keyboard: React.FC<Props> = ({
  height = 180,
  whiteKeyWidth = 50,
  blackKeyWidth = 20,
  blackKeyHeight = 130,
  keySpacing = 5,
  startNote = "C2",
  endNote = "A4",
  onKeyPress = () => {},
  borderRadius = 15,
  whiteKeyColor = "#fff",
  blackKeyColor = "#000",
  transition = 100,
  whiteKeyStyles = {},
  blackKeyStyles = {},
  containerStyles = {},
}) => {
  if (allBlackKeys.includes(startNote) || allBlackKeys.includes(endNote)) {
    throw new Error("Start and end notes must be white keys");
  }
  if (!allWhiteKeys.includes(startNote)) {
    throw new Error("Invalid start note");
  }
  if (!allWhiteKeys.includes(endNote)) {
    throw new Error("Invalid end note");
  }
  if (allWhiteKeys.indexOf(startNote) > allWhiteKeys.indexOf(endNote)) {
    throw new Error("Start note must be before end note");
  }
  if (keySpacing < 1 || keySpacing > 10) {
    throw new Error("Key spacing must be between 1 and 10");
  }
  if (blackKeyWidth > whiteKeyWidth) {
    throw new Error("Black key width must be less than white key width");
  }
  if (
    [height, whiteKeyWidth, blackKeyWidth, blackKeyHeight].some((n) => n < 1)
  ) {
    throw new Error("All dimensions must be greater than 0");
  }

  // startNote and endNote must be white keys
  const whiteKeys = allWhiteKeys.slice(
    allWhiteKeys.indexOf(startNote),
    allWhiteKeys.indexOf(endNote) + 1
  );

  let blackEndNote = "";
  if (endNote.charAt(0) === "C") {
    blackEndNote = "A#" + (parseInt(endNote.charAt(1)) - 1);
  } else {
    for (let i = keyNames.indexOf(endNote.charAt(0)) - 1; i >= 0; i--) {
      if (blackKeyNames.includes(keyNames[i])) {
        blackEndNote = keyNames[i] + "#" + endNote.slice(1);
        break;
      }
    }
  }

  const blackKeys = allBlackKeys.slice(
    allBlackKeys.indexOf(startNote.charAt(0) + "#" + startNote.charAt(1)),
    allBlackKeys.indexOf(blackEndNote) + 1
  );

  const numberOfKeys =
    whiteKeys.indexOf(endNote) - whiteKeys.indexOf(startNote) + 1;

  return (
    <main
      style={{
        width: whiteKeyWidth * numberOfKeys + keySpacing * (numberOfKeys - 1),
        height: height,
        background: "transparent",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        borderRadius: borderRadius + "px",
        ...containerStyles,
      }}
    >
      <div
        style={{
          width: "100%",
          height: blackKeyHeight,
          background: "transparent",
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          paddingLeft: whiteKeyWidth + keySpacing / 2 - blackKeyWidth / 2,
        }}
      >
        {blackKeys.map((key, index) => (
          <button
            style={{
              width: blackKeyWidth,
              height: blackKeyHeight,
              background: blackKeyColor,
              marginRight:
                ["D", "A"].includes(key.charAt(0)) &&
                index !== blackKeys.length - 1
                  ? whiteKeyWidth * 2 - blackKeyWidth + keySpacing * 2
                  : whiteKeyWidth - blackKeyWidth + keySpacing,
              borderRadius: `0px 0px ${borderRadius}px ${borderRadius}px`,
              zIndex: 10,
              transition: `all ${transition}ms ease-in-out`,
              ...blackKeyStyles,
            }}
            key={key}
            className="key"
            onClick={() => onKeyPress(key)}
          />
        ))}
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          position: "absolute",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {whiteKeys.map((key, index) => (
          <button
            style={{
              width: whiteKeyWidth,
              height: height,
              background: whiteKeyColor,
              marginRight:
                index === whiteKeys.length - 1 ? 0 : `${keySpacing}px`,
              borderRadius:
                index === 0
                  ? `${borderRadius}px 0px 0px ${borderRadius}px`
                  : index === whiteKeys.length - 1
                  ? `0px ${borderRadius}px ${borderRadius}px 0px`
                  : "0px",
              transition: `all ${transition}ms ease-in-out`,
              ...whiteKeyStyles,
            }}
            className="key"
            key={key}
            onClick={() => onKeyPress(key)}
          />
        ))}
      </div>
    </main>
  );
};

export default Keyboard;
