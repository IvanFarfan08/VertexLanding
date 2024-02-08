import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // Light
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
  }
  // Light Italic
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-LightItalic.otf') format('opentype');
    font-weight: 300;
    font-style: italic;
  }
  // Regular
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }
  // Regular Italic
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-RegularItalic.otf') format('opentype');
    font-weight: 400;
    font-style: italic;
  }
  // Medium
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
  }
  // Medium Italic
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-MediumItalic.otf') format('opentype');
    font-weight: 500;
    font-style: italic;
  }
  // Semibold
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-Semibold.otf') format('opentype');
    font-weight: 600;
    font-style: normal;
  }
  // Semibold Italic
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-SemiboldItalic.otf') format('opentype');
    font-weight: 600;
    font-style: italic;
  }
  // Bold
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }
  // Bold Italic
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-BoldItalic.otf') format('opentype');
    font-weight: 700;
    font-style: italic;
  }
  // Repeat the pattern for the rest of the font variants

  body {
    margin: 0;
    padding: 0;
    font-family: 'SF Pro Display', sans-serif;
  }
`;
