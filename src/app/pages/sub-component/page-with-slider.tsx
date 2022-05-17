import { useObserver } from 'mobx-react-lite';
import React from 'react';

import Slider, { IProps as ISliderProps } from '../../components/slider';
import CurrentPathInfo, {
  Props as ICurrentPathProps,
} from '../../components/current-path-info';

type Props = {
  pageContentElem: JSX.Element;
  sliderProps?: ISliderProps;
  currentPathProps?: ICurrentPathProps;
};

const PageWithSlider = ({
  pageContentElem,
  sliderProps,
  currentPathProps,
}: Props): JSX.Element => {
  const { description, title, modificatorStyles } =
    sliderProps ?? Slider.defaultProps;

  const pathProps = currentPathProps ?? CurrentPathInfo.defaultProps;
  return useObserver(() => (
    <>
      <Slider
        description={description}
        title={title}
        modificatorStyles={modificatorStyles}
      />
      <CurrentPathInfo elementName={pathProps.elementName} />
      {pageContentElem}
    </>
  ));
};

export default PageWithSlider;
