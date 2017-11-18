import * as React from 'react';
import About from '../About';
import * as s from './Game.css';

export default class Game extends React.Component<{},{}> {
  constructor() {
    super({});
    this.state = {};
  }
  render() {
    return (
      <div className={s.game}>
        <About />
      </div>
    );
  }
}
