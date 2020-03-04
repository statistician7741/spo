import React from 'react'
import { connect } from 'react-redux';
import BasicLayout from "../layouts/BasicLayout";

import dynamic from 'next/dynamic';

const Upload = dynamic(() => import("../component/Upload.component"));

class Index extends React.Component {
  static async getInitialProps({ req, res }) {
    return {}
  }

  render() {
    return (
      <BasicLayout>
        <Upload {...this.props} />
      </BasicLayout>
    )
  }
}

function mapStateToProps(state) {
  const { socket } = state.socket
  return { socket }
}

export default connect(mapStateToProps)(Index)