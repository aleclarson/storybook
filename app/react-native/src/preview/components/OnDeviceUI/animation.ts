import { SpringValue } from '@react-spring/native';
import { NAVIGATOR, PREVIEW, ADDONS } from './navigation/constants';

const PREVIEW_SCALE = 0.8;

const getPanelWidth = (width: number) => width * (1 - PREVIEW_SCALE - 0.008);

export const getNavigatorPanelPosition = (animatedValue: SpringValue, previewWidth: number) => {
  return [
    {
      transform: [
        {
          translateX: animatedValue.to([NAVIGATOR, PREVIEW], [0, -getPanelWidth(previewWidth) - 1]),
        },
      ],
      width: getPanelWidth(previewWidth),
    },
  ];
};

export const getAddonPanelPosition = (animatedValue: SpringValue, previewWidth: number) => {
  return [
    {
      transform: [
        {
          translateX: animatedValue.to(
            [PREVIEW, ADDONS],
            [previewWidth, previewWidth - getPanelWidth(previewWidth)]
          ),
        },
      ],
      width: getPanelWidth(previewWidth),
    },
  ];
};

export const getPreviewPosition = (
  animatedValue: SpringValue,
  previewWidth: number,
  previewHeight: number,
  slideBetweenAnimation: boolean
) => {
  const translateX = previewWidth / 2 - (previewWidth * PREVIEW_SCALE) / 2 - 6;
  const translateY = -(previewHeight / 2 - (previewHeight * PREVIEW_SCALE) / 2 - 12);

  return {
    transform: [
      {
        translateX: animatedValue.to([NAVIGATOR, PREVIEW, ADDONS], [translateX, 0, -translateX]),
      },
      {
        translateY: animatedValue.to(
          [NAVIGATOR, PREVIEW, ADDONS],
          [translateY, slideBetweenAnimation ? translateY : 0, translateY]
        ),
      },
    ],
  };
};

export const getPreviewScale = (animatedValue: SpringValue, slideBetweenAnimation: boolean) => {
  return {
    transform: [
      {
        scale: animatedValue.to(
          [NAVIGATOR, PREVIEW, ADDONS],
          [PREVIEW_SCALE, slideBetweenAnimation ? PREVIEW_SCALE : 1, PREVIEW_SCALE]
        ),
      },
    ],
  };
};
