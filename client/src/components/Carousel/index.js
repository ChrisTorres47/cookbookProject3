import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const items = [
  {
    src: "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/67907416_2886700568023233_7456491348196065280_o.jpg?_nc_cat=101&_nc_oc=AQmdjsUATDroBn6sLnZX03NszxVsZIP2mn2Y-gRgibdcO9ZGdTFxNyYQOK-jO_Yrjno&_nc_ht=scontent-den4-1.xx&oh=9981aa453299556f370c2b6a1b420713&oe=5DE26276",
    altText: '',
    caption: ''
  },
  {
    src: "https://images.unsplash.com/photo-1489450278009-822e9be04dff?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
    altText: '',
    caption: 'Easily share recipes with family and friends!'
  },
  {
    src: "https://images.unsplash.com/photo-1516824711718-9c1e683412ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    altText: '',
    caption: 'Search thousands of online recipes!'
  }
];
class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={{ maxWidth: 650, maxHeight: "auto" }} />
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default MyCarousel;
