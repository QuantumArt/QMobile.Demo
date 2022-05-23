import { useObserver } from 'mobx-react-lite';
import React, { CSSProperties } from 'react';

import Slider, { IProps as ISliderProps } from '../../components/slider';
import CurrentPathInfo, {
  Props as ICurrentPathProps,
} from '../../components/current-path-info';

type Props = {
  pageContentElem: JSX.Element;
  sliderProps?: ISliderProps;
  currentPathProps?: ICurrentPathProps;
  styles?: CSSProperties;
};

const PageWithSlider = ({
  pageContentElem,
  sliderProps,
  currentPathProps,
}: Props): JSX.Element => {
  const { description, title, modificatorStyles, styles } =
    sliderProps ?? Slider.defaultProps;

  const pathProps = currentPathProps ?? CurrentPathInfo.defaultProps;
  return useObserver(() => (
    <>
      <Slider
        description={description}
        title={title}
        modificatorStyles={modificatorStyles}
        styles={styles}
      />
      <CurrentPathInfo elementName={pathProps.elementName} />
      {pageContentElem}
    </>
  ));
};

export default PageWithSlider;
