import React from 'react';
import Article from './components/Article';
import Links from './components/Links';
import Title from './components/Title';

export default function App()
{
  return (
    <React.Fragment>
      <div className="App">
        <Title />
        <div className="separator" />
        <Article id="code" title='Code' image='/images/Code.png'>
          <p>Code Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id euismod lectus. Praesent finibus urna tortor, sed sodales ipsum pharetra quis. Aliquam pellentesque nec quam vel sollicitudin. Nulla condimentum metus vehicula ex varius, et congue metus gravida. Mauris dictum, massa in egestas porta, justo nunc eleifend justo, vel pharetra sapien sapien et orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In quis rhoncus odio. Vivamus malesuada arcu vitae consequat posuere. Curabitur sollicitudin, nisl vitae vestibulum aliquet, dui mauris auctor erat, imperdiet dapibus nibh nunc eget neque. Aenean porta imperdiet risus.</p>
        </Article>
        <div className="separator" />
        <Article id="art" title="Art" image='/images/Coffee.png' right>
          <p>Art Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id euismod lectus. Praesent finibus urna tortor, sed sodales ipsum pharetra quis. Aliquam pellentesque nec quam vel sollicitudin. Nulla condimentum metus vehicula ex varius, et congue metus gravida. Mauris dictum, massa in egestas porta, justo nunc eleifend justo, vel pharetra sapien sapien et orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In quis rhoncus odio. Vivamus malesuada arcu vitae consequat posuere. Curabitur sollicitudin, nisl vitae vestibulum aliquet, dui mauris auctor erat, imperdiet dapibus nibh nunc eget neque. Aenean porta imperdiet risus.</p>
        </Article>
        <div className="separator" />
        <Article id="3d" title="3D" image='/images/3D.png'>
          <p>3D Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id euismod lectus. Praesent finibus urna tortor, sed sodales ipsum pharetra quis. Aliquam pellentesque nec quam vel sollicitudin. Nulla condimentum metus vehicula ex varius, et congue metus gravida. Mauris dictum, massa in egestas porta, justo nunc eleifend justo, vel pharetra sapien sapien et orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In quis rhoncus odio. Vivamus malesuada arcu vitae consequat posuere. Curabitur sollicitudin, nisl vitae vestibulum aliquet, dui mauris auctor erat, imperdiet dapibus nibh nunc eget neque. Aenean porta imperdiet risus.</p>
        </Article>

        <div className="separator" />
        <div className="separator" />
        <Links />
        <Article id="about" title="About" image='/images/Seperator.png'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in convallis ligula. In risus arcu, interdum in vulputate nec, pretium in libero. Quisque feugiat quam in justo ultrices tempus. Duis a ex suscipit, tristique sem vel, pretium turpis. Pellentesque non hendrerit risus. Cras dignissim dolor enim, at consectetur augue dictum vel. Vivamus venenatis, turpis eu lobortis aliquet, quam velit imperdiet sem, ut ornare felis augue et arcu. Donec vitae bibendum turpis. Aenean eleifend mauris vel mi finibus, vel finibus metus maximus. In hac habitasse platea dictumst. Vestibulum tincidunt volutpat quam vitae porta. Fusce volutpat sodales vehicula. Nulla efficitur, enim fermentum feugiat sollicitudin, orci quam ultrices velit, quis pulvinar purus libero vel felis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in convallis ligula. In risus arcu, interdum in vulputate nec, pretium in libero. Quisque feugiat quam in justo ultrices tempus. Duis a ex suscipit, tristique sem vel, pretium turpis. Pellentesque non hendrerit risus. Cras dignissim dolor enim, at consectetur augue dictum vel. Vivamus venenatis, turpis eu lobortis aliquet, quam velit imperdiet sem, ut ornare felis augue et arcu. Donec vitae bibendum turpis. Aenean eleifend mauris vel mi finibus, vel finibus metus maximus. In hac habitasse platea dictumst. Vestibulum tincidunt volutpat quam vitae porta. Fusce volutpat sodales vehicula. Nulla efficitur, enim fermentum feugiat sollicitudin, orci quam ultrices velit, quis pulvinar purus libero vel felis.</p>
        </Article>

        <footer>
          <p className="footer-text">© Unskilled Wolf</p>
        </footer>
      </div>
    </React.Fragment>
  );
}