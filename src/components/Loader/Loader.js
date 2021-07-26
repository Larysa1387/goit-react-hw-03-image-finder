import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

class LoaderEffect extends Component {
  state = {  }
  render() {
    return (
			<Loader className={s.Loader}
				type="TailSpin"
				color="#00BFFF"
				height={150}
				width={150}
				timeout={5000}
			/>
		);
  }
}

export default LoaderEffect;
