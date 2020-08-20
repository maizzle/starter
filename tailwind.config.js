module.exports = {
  theme: {
    screens: {
      sm: {'max': '600px'},
    },
    extend: {
      colors: {
        inherit: 'inherit',

        gray: {
          '50': '#f9fafb',
          '100': '#f4f5f7',
          '200': '#e5e7eb',
          '300': '#d2d6dc',
          '400': '#9fa6b2',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#252f3f',
          '900': '#161e2e',
        },
        'cool-gray': {
          '50': '#fbfdfe',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cfd8e3',
          '400': '#97a6ba',
          '500': '#64748b',
          '600': '#475569',
          '700': '#364152',
          '800': '#27303f',
          '900': '#1a202e',
        },
        red: {
          '50': '#fdf2f2',
          '100': '#fde8e8',
          '200': '#fbd5d5',
          '300': '#f8b4b4',
          '400': '#f98080',
          '500': '#f05252',
          '600': '#e02424',
          '700': '#c81e1e',
          '800': '#9b1c1c',
          '900': '#771d1d',
        },
        orange: {
          '50': '#fff8f1',
          '100': '#feecdc',
          '200': '#fcd9bd',
          '300': '#fdba8c',
          '400': '#ff8a4c',
          '500': '#ff5a1f',
          '600': '#d03801',
          '700': '#b43403',
          '800': '#8a2c0d',
          '900': '#771d1d',
        },
        yellow: {
          '50': '#fdfdea',
          '100': '#fdf6b2',
          '200': '#fce96a',
          '300': '#faca15',
          '400': '#e3a008',
          '500': '#c27803',
          '600': '#9f580a',
          '700': '#8e4b10',
          '800': '#723b13',
          '900': '#633112',
        },
        green: {
          '50': '#f3faf7',
          '100': '#def7ec',
          '200': '#bcf0da',
          '300': '#84e1bc',
          '400': '#31c48d',
          '500': '#0e9f6e',
          '600': '#057a55',
          '700': '#046c4e',
          '800': '#03543f',
          '900': '#014737',
        },
        teal: {
          '50': '#edfafa',
          '100': '#d5f5f6',
          '200': '#afecef',
          '300': '#7edce2',
          '400': '#16bdca',
          '500': '#0694a2',
          '600': '#047481',
          '700': '#036672',
          '800': '#05505c',
          '900': '#014451',
        },
        blue: {
          '50': '#ebf5ff',
          '100': '#e1effe',
          '200': '#c3ddfd',
          '300': '#a4cafe',
          '400': '#76a9fa',
          '500': '#3f83f8',
          '600': '#1c64f2',
          '700': '#1a56db',
          '800': '#1e429f',
          '900': '#233876',
        },
        indigo: {
          '50': '#f0f5ff',
          '100': '#e5edff',
          '200': '#cddbfe',
          '300': '#b4c6fc',
          '400': '#8da2fb',
          '500': '#6875f5',
          '600': '#5850ec',
          '700': '#5145cd',
          '800': '#42389d',
          '900': '#362f78',
        },
        purple: {
          '50': '#f6f5ff',
          '100': '#edebfe',
          '200': '#dcd7fe',
          '300': '#cabffd',
          '400': '#ac94fa',
          '500': '#9061f9',
          '600': '#7e3af2',
          '700': '#6c2bd9',
          '800': '#5521b5',
          '900': '#4a1d96',
        },
        pink: {
          '50': '#fdf2f8',
          '100': '#fce8f3',
          '200': '#fad1e8',
          '300': '#f8b4d9',
          '400': '#f17eb8',
          '500': '#e74694',
          '600': '#d61f69',
          '700': '#bf125d',
          '800': '#99154b',
          '900': '#751a3d',
        },
      },
      spacing: {
        px: '1px',
        full: '100%',
        screen: '100vw',
        '0': 0,
        '2': '2px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '600': '600px',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      borderRadius: {
        sm: '2px',
        default: '4px',
        lg: '8px',
      },
      fontFamily: {
        sans: ['-apple-system', '"Segoe UI"', 'sans-serif'],
        serif: ['Constantia', 'Georgia', 'serif'],
        mono: ['Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        '0': 0,
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
      },
      letterSpacing: {
        tighter: '-2px',
        tight: '-1px',
        normal: 0,
        wide: '1px',
        wider: '2px',
        widest: '4px',
      },
      lineHeight: theme => ({
        ...theme('spacing'),
      }),
      maxHeight: theme => ({
        ...theme('spacing'),
      }),
      maxWidth: theme => ({
        ...theme('spacing'),
      }),
      minHeight: theme => ({
        ...theme('spacing'),
      }),
      minWidth: theme => ({
        ...theme('spacing'),
      }),
    },
  },
  variants: {},
  corePlugins: {
    animation: false,
    backgroundOpacity: false,
    borderOpacity: false,
    textOpacity: false,
  },
  plugins: [],
}
