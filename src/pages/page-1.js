import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

class Page extends React.Component{
  state = {
    answer: ''
  };

  add = () => {
    this.setState(current => ({ answer: current.answer + this.props.value }));

  };

  render() {
    return (
      <div>
          <Layout>
            <SEO title="Page one" />
            <Card text="오랜만에 약속 없는 주말,
              하루를 어떻게 보낼까요?" choice1="드라마 정주행" choice2="친구들과 힙스터 카페 가기"/>
          </Layout>
        </div>
    )
  }

};
Page.defaultProps = {
    text: 'Default text',
    value:'Default value',
};


export default Page;
