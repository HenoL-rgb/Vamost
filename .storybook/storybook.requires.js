/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src/shared/ui",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/shared\\/ui(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/shared/ui/action/action.stories.tsx": require("../src/shared/ui/action/action.stories.tsx"),
    "./src/shared/ui/birthdayInput/birthdayInput.stories.tsx": require("../src/shared/ui/birthdayInput/birthdayInput.stories.tsx"),
    "./src/shared/ui/bottomSheet/bottomSheet.stories.tsx": require("../src/shared/ui/bottomSheet/bottomSheet.stories.tsx"),
    "./src/shared/ui/button/button.stories.tsx": require("../src/shared/ui/button/button.stories.tsx"),
    "./src/shared/ui/checkBox/checkBox.stories.tsx": require("../src/shared/ui/checkBox/checkBox.stories.tsx"),
    "./src/shared/ui/codeInput/codeInput.stories.tsx": require("../src/shared/ui/codeInput/codeInput.stories.tsx"),
    "./src/shared/ui/counter/counter.stories.tsx": require("../src/shared/ui/counter/counter.stories.tsx"),
    "./src/shared/ui/divider/divider.stories.tsx": require("../src/shared/ui/divider/divider.stories.tsx"),
    "./src/shared/ui/hostingLabel/hostingLabel.stories.tsx": require("../src/shared/ui/hostingLabel/hostingLabel.stories.tsx"),
    "./src/shared/ui/input/input.stories.tsx": require("../src/shared/ui/input/input.stories.tsx"),
    "./src/shared/ui/outlinedBtn/outlinedBtn.stories.tsx": require("../src/shared/ui/outlinedBtn/outlinedBtn.stories.tsx"),
    "./src/shared/ui/packageCard/packageCard.stories.tsx": require("../src/shared/ui/packageCard/packageCard.stories.tsx"),
    "./src/shared/ui/packagePage/packagePage.stories.tsx": require("../src/shared/ui/packagePage/packagePage.stories.tsx"),
    "./src/shared/ui/phoneInput/phoneInput.stories.tsx": require("../src/shared/ui/phoneInput/phoneInput.stories.tsx"),
    "./src/shared/ui/photoInput/photoInput.stories.tsx": require("../src/shared/ui/photoInput/photoInput.stories.tsx"),
    "./src/shared/ui/postCard/postCard.stories.tsx": require("../src/shared/ui/postCard/postCard.stories.tsx"),
    "./src/shared/ui/postCreate/postCreate.stories.tsx": require("../src/shared/ui/postCreate/postCreate.stories.tsx"),
    "./src/shared/ui/postDateAndTime/postDateAndTime.stories.tsx": require("../src/shared/ui/postDateAndTime/postDateAndTime.stories.tsx"),
    "./src/shared/ui/request/request.stories.tsx": require("../src/shared/ui/request/request.stories.tsx"),
    "./src/shared/ui/selectList/selectList.stories.tsx": require("../src/shared/ui/selectList/selectList.stories.tsx"),
    "./src/shared/ui/tagList/tagList.stories.tsx": require("../src/shared/ui/tagList/tagList.stories.tsx"),
    "./src/shared/ui/text/text.stories.tsx": require("../src/shared/ui/text/text.stories.tsx"),
    "./src/shared/ui/userpicGallery/userPicGallery.stories.tsx": require("../src/shared/ui/userpicGallery/userPicGallery.stories.tsx"),
  };
};

configure(getStories, module, false);
