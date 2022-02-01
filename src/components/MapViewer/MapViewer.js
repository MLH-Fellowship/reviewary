import React from 'react';
import {Viewer} from 'mapillary-js';

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
                accessToken={'MLY|4765176310202108|382fb83fed4193ec7306ab80b6d1dc2a'}
                imageId={'550092599700936'}
                style={{width: '100vw', height: '100vh'}}
            />
            <button className='absolute bottom-0 left-0 bg-slate-900'>Leave a Guide</button>
        </div>
    );
  }