import React from 'react';

class Picture extends React.Component {
    constructor(props) {
      super(props);

      this.renderImage = this.renderImage.bind(this)

      const arnaultImg = require('../../public/images/Arnault.png');
      const bezosImg = require('../../public/images/bezos.png');
      const buffettImg = require('../../public/images/buffett.png');
      const gatesImg = require('../../public/images/gates.png');
      const zuckerbergImg = require('../../public/images/zuckerberg.png');

      this.state = {
          imgList: [arnaultImg, bezosImg, buffettImg, gatesImg, zuckerbergImg]
      }

    //   this.renderImage() {
    //       this.setState({

    //       })
    //   }

    }
}


export default Picture;