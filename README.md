# react-music-keyboard

## A simple easy-to-use and customizable React component emulating a musical keyboard.

Check out a live demo here: [Demo!](https://react-music-keyboard-demo.vercel.app/)
Package repository: [react-music-keyboard](https://github.com/ryan-zhu-music/react-music-keyboard)
---

## Props:

| **Props**           | **Type**                | **Default** | **Description**                                                                             |
| ------------------- | ----------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| **Height**          | number                  | 180         | The height of the keyboard in pixels.                                                       |
| **whiteKeyWidth**   | number                  | 50          | The width of each white key in pixels.                                                      |
| **blackKeyWidth**   | number                  | 20          | The width of each black key in pixels. Must not be greater than the width of a white key.   |
| **keySpacing**      | number                  | 5           | The space between each white key in pixels.                                                 |
| **startNote**       | string                  | "C2"        | The starting note: name + octave. Note that black keys use sharps, e.g. F#4 instead of Gb6. |
| **endNote**         | string                  | "A4         | The ending note. Same format as the starting note. Must be higher than the starting note.   |
| **onKeyPress**      | function                | (key) => {} | Function to execute when key is pressed. The key name is passed as the argument.            |
| **borderRadius**    | number                  | 15          | Border radius of the keys                                                                   |
| **whiteKeyColor**   | string (HEX color code) | "#fff"      | Fill color of the white keys.                                                               |
| **blackKeyColor**   | string (HEX color code) | "#000"      | Fill color of the black keys.                                                               |
| **transition**      | number                  | 100         | Transition speed between hover animation in milliseconds.                                   |
| **whiteKeyStyles**  | object                  | {}          | Additional styles applied to white keys.                                                    |
| **blackKeyStyles**  | object                  | {}          | Additional styles applied to black keys.                                                    |
| **containerStyles** | object                  | {}          | Additional styles applied to the keyboard container.                                        |

## Additional restrictions

- **All number props must be greater than 0.**
- **Start and end notes must be white keys.**
- **keySpacing must be between 1 and 10.**
