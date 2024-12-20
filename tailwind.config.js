const plugin = require("tailwindcss/plugin");
// console.log(defaultTheme);
module.exports = {
  content: [
    "./src/dist/**/*.{html,js}",
    "./src/pages/**/*.{html,pug}",
    "./src/components/**/*.{html,pug,sass,js}",
  ],
  theme: {
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "1024px",
      // => @media (min-width: 1440px) { ... }

      xl: "1200px",
      // => @media (min-width: 1440px) { ... }
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "calc(2/1920*100rem)",
      3: "calc(3/1920*100rem)",
      4: "calc(4/1920*100rem)",
      8: "calc(8/1920*100rem)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        md: "30px",
        xl: "calc(30/1920*100rem)",
      },
      screens: {
        xs: "100vw",
        sm: "100vw",
        md: "768px",
        lg: "1024px",
        xl: "calc(1460/1920*100rem)",
      },
    },
    fontFamily: {
      oswald: "Oswald",
      "inter-tight": "Inter Tight",
      exo: "Exo",
      manrope: "Manrope",
      "font-awesome-6-brands": "Font Awesome 6 Brands",
      "font-awesome-6-pro": "Font Awesome 6 Pro",
    },
    fontSize: {
      0: ["0", { lineHeight: "0" }],
      xs: ["clamp(10px,calc(12/1920*100rem),calc(12/1920*100rem))", , { lineHeight: "1.2" }],
      sm: ["clamp(14px,calc(14/1920*100rem),calc(14/1920*100rem))", , { lineHeight: "1.2" }],
      base: ["clamp(14px,calc(16/1920*100rem),calc(16/1920*100rem))", , { lineHeight: "1.2" }],
      "15px": ["clamp(15px,calc(15/1920*100rem),calc(15/1920*100rem))", , { lineHeight: "1.2" }],
      lg: ["calc(18/1920*100rem)", , { lineHeight: "1.2" }],
      xl: ["calc(20/1920*100rem)", , { lineHeight: "1.2" }],
      "2xl": ["clamp(18px,calc(24/1920*100rem),calc(24/1920*100rem))"],
      "3xl": ["calc(30/1920*100rem)"],
      "4xl": ["calc(36/1920*100rem)"],
      "5xl": ["calc(40/1920*100rem)"],
      "6xl": ["calc(48/1920*100rem)"],
      "7xl": ["calc(72/1920*100rem)", { lineHeight: "1" }],
      "8xl": ["calc(84/1920*100rem)", { lineHeight: "1" }],
      "9xl": ["calc(96/1920*100rem)", { lineHeight: "1" }],
      28: ["calc(28/1920*100rem)", { lineHeight: 1.5 }],
      30: ["calc(30/1920*100rem)", { lineHeight: "calc(38/1920*100rem)" }],
      38: ["calc(38/1920*100rem)", { lineHeight: "calc(46/1920*100rem)" }],
      32: ["calc(32/1920*100rem)"],
      40: ["calc(40/1920*100rem)"],
      42: ["calc(42/1920*100rem)"],
      64: ["calc(64/1920*100rem)"],
    },
    spacing: {
      0: "0px",
      0.25: "calc(1/1920*100rem) /* 1px */",
      0.5: "calc(2/1920*100rem) /* 2px */",
      0.75: "calc(3/1920*100rem) /* 3px */",
      1: "calc(4/1920*100rem) /* 4px */",
      1.25: "calc(5/1920*100rem) /* 5px */",
      1.5: "calc(6/1920*100rem) /* 6px */",
      1.75: "calc(7/1920*100rem) /* 7px */",
      2: "calc(8/1920*100rem) /* 8px */",
      2.25: "calc(9/1920*100rem) /* 9px */",
      2.5: "calc(10/1920*100rem) /* 10px */",
      2.75: "calc(11/1920*100rem) /* 11px */",
      3: "calc(12/1920*100rem) /* 12px */",
      3.25: "calc(13/1920*100rem) /* 13px */",
      3.5: "calc(14/1920*100rem) /* 14px */",
      3.75: "calc(15/1920*100rem) /* 15px */",
      4: "calc(16/1920*100rem) /* 16px */",
      4.25: "calc(17/1920*100rem) /* 17px */",
      4.5: "calc(18/1920*100rem) /* 18px */",
      4.75: "calc(19/1920*100rem) /* 19px */",
      5: "calc(20/1920*100rem) /* 20px */",
      5.5: "calc(22/1920*100rem) /* 22px */",
      6: "calc(24/1920*100rem) /* 24px */",
      6.5: "calc(26/1920*100rem) /* 26px */",
      7: "calc(28/1920*100rem) /* 28px */",
      7.5: "calc(30/1920*100rem) /* 30px */",
      8: "calc(32/1920*100rem) /* 32px */",
      8.5: "calc(34/1920*100rem) /* 34px */",
      8.75: "calc(35/1920*100rem) /* 35px */",
      9: "calc(36/1920*100rem) /* 36px */",
      9.5: "calc(38/1920*100rem) /* 38px */",
      10: "calc(40/1920*100rem) /* 40px */",
      11: "calc(44/1920*100rem) /* 44px */",
      12: "calc(48/1920*100rem) /* 48px */",
      12.5: "calc(50/1920*100rem) /* 50px */",
      13: "calc(52/1920*100rem) /* 52px */",
      14: "calc(56/1920*100rem) /* 56px */",
      15: "calc(60/1920*100rem) /* 60px */",
      16: "calc(64/1920*100rem) /* 64px */",
      17: "calc(68/1920*100rem) /* 68px */",
      17.5: "calc(70/1920*100rem) /* 70px */",
      18: "calc(72/1920*100rem) /* 72px */",
      19: "calc(76/1920*100rem) /* 76px */",
      20: "calc(80/1920*100rem) /* 80px */",
      22.5: "calc(90/1920*100rem) /* 90px */",
      23: "calc(94/1920*100rem) /* 94px */",
      24: "calc(96/1920*100rem) /* 96px */",
      25: "calc(100/1920*100rem) /* 100px */",
      27.5: "calc(110/1920*100rem) /* 110px */",
      28: "calc(112/1920*100rem) /* 112px */",
      30: "calc(120/1920*100rem) /* 120px */",
      32: "calc(128/1920*100rem) /* 128px */",
      36: "calc(144/1920*100rem) /* 144px */",
      40: "calc(160/1920*100rem) /* 160px */",
      42: "calc(160/1920*100rem) /* 168px */",
      44: "calc(176/1920*100rem) /* 176px */",
      48: "calc(192/1920*100rem) /* 192px */",
      48: "calc(192/1920*100rem) /* 192px */",
      50: "calc(200/1920*100rem) /* 200px */",
      56: "calc(224/1920*100rem) /* 224px */",
      60: "calc(240/1920*100rem) /* 240px */",
      full: "100%",
      screen: "100vw",
      "2full": "200%",
    },
    scale: {
      0: "0",
      50: ".5",
      70: ".70",
      75: ".75",
      80: ".8",
      85: ".85",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      115: "1.15",
      120: "1.2",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    opacity: {
      0: "0",
      10: "0.1",
      15: "0.15",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      35: "0.35",
      40: "0.4",
      45: "0.45",
      50: "0.5",
      55: "0.55",
      60: "0.6",
      65: "0.65",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      85: "0.85",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "calc(2/1920*100rem)",
      3: "calc(3/1920*100rem)",
      4: "calc(4/1920*100rem)",
      5: "calc(5/1920*100rem)",
      8: "calc(8/1920*100rem)",
    },
    extend: {
      colors: {
        "Neutral/White": "#ffffff",
        "Neutral/50": "#f6f6f6",
        "Neutral/100": "#efefef",
        "Neutral/200": "#dcdcdc",
        "Neutral/300": "#bdbdbd",
        "Neutral/400": "#989898",
        "Neutral/500 main": "#818181",
        "Neutral/600": "#656565",
        "Neutral/700": "#525252",
        "Neutral/800": "#464646",
        "Neutral/900": "#3d3d3d",
        "Neutral/950": "#292929",
        "Neutral/Black": "#000000",
        "Primary/Blue": "#233f95",
        "Primary/Red": "#ec1b24",
        "Second/50": "#eff6ff",
        "Second/100": "#dceafd",
        "Second/200": "#c0dafd",
        "Second/300": "#95c4fb",
        "Second/400": "#63a3f7",
        "Second/500": "#3e81f3",
        "Second/600": "#2961e7",
        "Second/700": "#204ed5",
        "Second/800": "#213fac",
        "Second/900": "#233f95",
        "Second/950": "#061340",
      },
      animation: {
        "spin-circle": "rotateCircle 20s linear infinite",
        "fade-in": "fadeIn 2s linear infinite",
        spin: "spin 2s linear infinite",
      },
      backgroundImage: ({ theme }) => ({
        "linear-1": `linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.80) 100%)`,
        "linear-2": `linear-gradient(180deg, #D7D7D7 -0.93%, #F3F3F3 15.85%, #FFF 37.21%, #EAEAEA 100.93%)`,
        "linear-3": `linear-gradient(236deg, #85363D 13.61%, #FFECEC 50.12%, #76222A 85.9%)`,
        "linear-4": `linear-gradient(90deg, #471116 0%, rgba(173, 41, 54, 0.00) 100%)`,
        "linear-5": `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%)`,
        "linear-6": `linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.80) 100%)`,
        "linear-7": `linear-gradient(90deg, #061340 0%, rgba(6, 19, 64, 0.38) 74%, rgba(6, 19, 64, 0.00) 100%)`,
      }),
      backgroundPosition: {
        "pos-100-0": "100% 0%",
      },
      backgroundSize: {
        "0-100": "0 100%",
        "100-100": "100% 100%",
        "200-100": "200% 100%",
      },
      blur: {
        DEFAULT: "12.5px",
      },
      borderRadius: {
        "rounded-0": "0rem",
        "rounded-1": "0.125rem",
        "rounded-2": "0.25rem",
        "rounded-3": "0.3125rem",
        "rounded-4": "0.5rem",
        "rounded-5": "0.75rem",
        "rounded-6": "0.8541666865348816rem",
        "rounded-7": "1rem",
        "rounded-8": "1.25rem",
        "rounded-9": "2rem",
        "rounded-10": "3.75rem",
        "rounded-11": "5.933333396911621rem",
      },
      boxShadow: {
        DropshadowLight: "4px 4px 32px 16px rgba(0,0,0,0.08)",
        "Dropshadow Medium": "4px 4px 8px 4px rgba(0,0,0,0.24)",
        "Dropshadow Hard": "8px 8px 16px 8px rgba(0,0,0,0.4)",
        "Background Blur": "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
      },
      lineClamp: {
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      lineHeight: {
        1.125: "1.125",
        1.3: "1.3",
        1.33: "1.33",
        1.4: "1.4",
        1.44: "1.44",
      },
      keyframes: {
        bgGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        rotateCircle: {
          "0%": { transform: "translate(-50%, -50%) rotate(0)" },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg)",
          },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      zIndex: {
        1: "1",
        2: "2",
        11: "11",
        12: "12",
        100: "100",
        999: "999",
        1000: "1000",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  variants: {
    aspectRatio: ["responsive", "hover"],
    lineClamp: ["responsive", "hover"],
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addVariant, matchUtilities, addUtilities, theme }) {
      addBase({});
      addComponents({
        ".transition-300": {
          transition: "all .3s ease",
        },
        ".transition-500": {
          transition: "all .5s ease",
        },
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".overflow-overlay": {
          overflowY: "overlay",
        },
        ".absolute-full": {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        },
        ".filter-white": {
          filter: "brightness(0) invert(1)",
          transition: "all .3s ease",
        },
      });
      matchUtilities(
        {
          sq: (value) => ({
            height: value,
            width: value,
          }),
        },
        { values: theme("spacing") }
      );
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
      addVariant("optional", "&:optional");
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("supports-grid", "@supports (display: grid)");
    }),
    plugin(({ addVariant, e }) => {
      addVariant("rem", ({ container, separator }) => {
        const rootFontSize = 19.2; // This is your HTML root font-size
        container.walkRules((rule) => {
          rule.selector = `.${e(`rem${separator}`)}${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            if (decl.value.includes("px")) {
              // Convert the pixel number to rem
              const value = decl.value.replace(
                /(\d+)px/g,
                (match, p1) => `${p1 / rootFontSize}rem`
              );
              decl.value = value;
            }
          });
        });
      });
    }),
    plugin(({ addVariant, e }) => {
      addVariant("ratio", ({ container, separator }) => {
        container.walkRules((rule) => {
          rule.selector = `.${e(`ratio${separator}`)}${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            const ratioValues = decl.value.split(" ");
            if (ratioValues.length === 2) {
              const num1 = parseInt(ratioValues[0]);
              const num2 = parseInt(ratioValues[1]);
              if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
                const percentage = `${(num1 / num2) * 100}%`;
                decl.value = `${percentage}`;
              }
            }
          });
        });
      });
    }),
    require("@tailwindcss/typography"),
  ],
};
