module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Store': './src/store',
          '@Components': './src/components',
          '@Utility': './src/utility',
          '@Context': './src/context',
          '@Service': './src/services',
          '@Navigator': './src/navigators',
          '@Validation': './src/validationSchema',
          '@Constants': './src/constants',
          '@Theme': './src/themes',
          '@Api': './src/apiServices',
          '@ReusableFunctions': './src/reusableFunctions',
          '@Screens': './src/screens',
          '@Asset': './src/assets',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
