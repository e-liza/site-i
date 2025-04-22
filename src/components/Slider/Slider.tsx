import React from 'react';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel'; // Import correct ref type
import { ResizeObserver } from '@juggle/resize-observer';

import { getPercentage } from '../../helpers/misc';
import vector from '../../assets/vector.svg';

import styles from './Slider.module.scss';

interface ISliderItem {
  text: string;
  image: string;
  company: string;
}

interface ISliderProps {
  items: ISliderItem[];
}

interface IState {
  currentItem: number;
  arrowAction: boolean;
}

class Slider extends React.Component<ISliderProps, IState> {
  private carousel: React.RefObject<CarouselRef | null>;
  private companies: React.RefObject<HTMLDivElement | null>;
  private indicator: React.RefObject<HTMLDivElement | null>;

  private resizeObserver: ResizeObserver;

  constructor(props: ISliderProps) {
    super(props);
    this.carousel = React.createRef<CarouselRef>(); 
    this.companies = React.createRef<HTMLDivElement>(); 
    this.indicator = React.createRef<HTMLDivElement>(); 
    this.state = { currentItem: 0, arrowAction: false };
    this.resizeObserver = new ResizeObserver(this.calcIndicatorMargin);
  }

  next = () => {
    this.carousel.current?.next(); // ✅ Handle possible null
  };

  prev = () => {
    this.carousel.current?.prev(); // ✅ Handle possible null
  };

  calcIndicatorMargin = () => {
    if (!this.companies.current) return;

    const companiesBlockWidth = this.companies.current.offsetWidth;
    const companyItems = this.companies.current.getElementsByTagName('div');

    if (!companyItems.length) return;

    let totalMarginLeft = getPercentage(companyItems[0].offsetWidth / 2, companiesBlockWidth);

    Array.from(companyItems).forEach((menuElement, index) => {
      const elementWithMargin = getPercentage(menuElement.offsetWidth + 30, companiesBlockWidth);
      if (index === this.state.currentItem && this.indicator.current) {
        this.indicator.current.style.marginLeft = `${totalMarginLeft}%`;
      }
      totalMarginLeft += elementWithMargin;
    });
  };

  componentDidUpdate() {
    this.calcIndicatorMargin();
  }

  componentDidMount() {
    if (this.companies.current) {
      this.resizeObserver.observe(this.companies.current);
    }
  }

  render() {
    return (
      <div>
        <div className={styles.sliderContainer}>
          <div onClick={this.prev}>
            <img className={styles.left} src={vector} alt="left" />
          </div>
          <Carousel
            speed={500}
            beforeChange={(_, next) => this.setState({ currentItem: next })}
            dots={false}
            ref={this.carousel}
            className={styles.slider}
          >
            {this.props.items.map((slideItem) => (
              <div className={styles.content} key={slideItem.company}>
                <p>{slideItem.text}</p>
                <p>{slideItem.company}</p>
              </div>
            ))}
          </Carousel>
          <div onClick={this.next}>
            <img className={styles.right} src={vector} alt="right" />
          </div>
        </div>
        <div className={styles.indicatorBlock}>
          <hr className={styles.indicatorLine} />
        </div>
        <div className={styles.companies}>
          <div>
            <div ref={this.indicator} className={styles.indicatorSquare}></div>
            <div ref={this.companies}>
              {this.props.items.map((item) => (
                <div className={styles.companyImgContainer} key={item.company}>
                  <img src={item.image} alt="company" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
