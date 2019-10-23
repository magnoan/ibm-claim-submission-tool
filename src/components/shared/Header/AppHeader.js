import React, { Component } from 'react';
import {
  Header,
  HeaderName,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header aria-label="IBM ">
          <SkipToContent />
          <HeaderName prefix="IBM">[Claim Submission Tool]</HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="User Avatar">
              <UserAvatar20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </>
    );
  }
}
export default AppHeader;
