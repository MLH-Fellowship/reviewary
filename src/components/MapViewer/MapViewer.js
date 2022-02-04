import React from 'react';
import {Viewer} from 'mapillary-js';
import ReviewButton from '../ReviewButton/ReviewButton';
import BackButton from '../BackButton/BackButton';

export default function MapViewer(props) {
    class ViewerComponent extends React.Component {
      constructor(props) {
        super(props);
        this.containerRef = React.createRef();
      }

      componentDidMount() {
        this.viewer = new Viewer({
          accessToken: this.props.accessToken,
          container: this.containerRef.current,
          imageId: this.props.imageId,
        });
      }
  
      componentWillUnmount() {
        if (this.viewer) {
          this.viewer.remove();
        }
      }
  
      render() {
        return <div ref={this.containerRef} style={this.props.style} />;
      }
    }
  
    return (
        <div>
            <ViewerComponent
                accessToken={process.env.REACT_APP_MAPILLARY}
                imageId={'550092599700936'}
                style={{width: '100vw', height: '100vh'}}
            />
            <ReviewButton/>
            <BackButton/>
        </div>
    );
  }