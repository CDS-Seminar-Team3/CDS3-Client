const colors = {
  white: '#FFFFFF',
  gray100: '#F7F7F7',
  gray200: '#E1E1E1',
  gray300: '#B4B4B4',
  gray400: '#8A8A8A',
  gray600: '#3E3E3E',
  gray800: '#1B1B1B',
  gray900: '#0000004D',
  black: '#000000',
  blue: '#0071FE',
  red: '#F40000',
};

function FONT({ weight, size, lineHeight, letterSpacing }) {
  return `
        font-family: noto-sans-cjk-kr, sans-serif;
        font-style: normal;
        font-weight: ${weight};
        font-size: ${size}rem;
        line-height: ${lineHeight}%;
        letter-spacing: -0.0${letterSpacing}rem;
      `;
}

const fonts = {
  head1: FONT({ weight: 700, size: 2.2, lineHeight: 130, letterSpacing: 6 }),
  head2: FONT({ weight: 500, size: 2.0, lineHeight: 130, letterSpacing: 6 }),
  head3: FONT({ weight: 700, size: 1.6, lineHeight: 130, letterSpacing: 6 }),
  head4: FONT({ weight: 400, size: 1.6, lineHeight: 130, letterSpacing: 6 }),
  body1_bold: FONT({ weight: 700, size: 1.4, lineHeight: 150, letterSpacing: 6 }),
  body1: FONT({ weight: 400, size: 1.4, lineHeight: 150, letterSpacing: 6 }),
  body2: FONT({ weight: 400, size: 1.3, lineHeight: 150, letterSpacing: 6 }),
  body2_bold: FONT({ weight: 700, size: 1.3, lineHeight: 150, letterSpacing: 6 }),
  body3_bold: FONT({ weight: 700, size: 1.2, lineHeight: 150, letterSpacing: 6 }),
  body3: FONT({ weight: 400, size: 1.2, lineHeight: 150, letterSpacing: 6 }),
  body4: FONT({ weight: 700, size: 1.2, lineHeight: 150, letterSpacing: 6 }),
  body5: FONT({ weight: 400, size: 1.2, lineHeight: 150, letterSpacing: 6 }),
  caption1: FONT({ weight: 700, size: 1.2, lineHeight: 130, letterSpacing: 3 }),
  caption2: FONT({ weight: 400, size: 1.0, lineHeight: 130, letterSpacing: 3 }),
  footer_copyright_bold: FONT({ weight: 700, size: 1.0, lineHeight: 150, letterSpacing: 6 }),
  footer_copyright: FONT({ weight: 400, size: 1.0, lineHeight: 150, letterSpacing: 6 }),
};

const theme = {
  colors,
  fonts,
};

export default theme;
