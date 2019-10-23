import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react/lib/components/UIShell';

import {
  DocumentAdd16,
  FolderDetails16,
  UserAdmin16,
  Help16,
} from '@carbon/icons-react';
import { Tile } from 'carbon-components-react/lib/components/Tile';
import mainLogo from '../../assets/ibm_logo.png';
import './SideNavigation.css';

class SideNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <SideNav aria-label="Side navigation" expanded="false">
          <Tile>
            <img src={mainLogo} width="100%" />
            <h4>Claim Submission Tool</h4>
          </Tile>
          <SideNavItems>
            <SideNavLink
              renderIcon={DocumentAdd16}
              href="javascript:void(0)"
              element={Link}
              to="/create-request">
              Create Request
            </SideNavLink>
            <SideNavLink
              renderIcon={FolderDetails16}
              href="javascript:void(0)"
              element={Link}
              to="/my-requests">
              My Requests
            </SideNavLink>
            <SideNavLink
              renderIcon={UserAdmin16}
              href="javascript:void(0)"
              element={Link}
              to="/for-approval">
              For Approval
            </SideNavLink>
            <SideNavLink
              renderIcon={Help16}
              href="javascript:void(0)"
              element={Link}
              to="/faqs">
              FAQs
            </SideNavLink>
            <SideNavMenu title="Admin Page" renderIcon={UserAdmin16}>
              <SideNavMenuItem element={Link} to="/all-requests">
                All Request
              </SideNavMenuItem>
              <SideNavMenuItem element={Link} to="/cfo-requests">
                CFO Request
              </SideNavMenuItem>
              <SideNavMenuItem element={Link} to="/bcr-requests">
                BCR Request
              </SideNavMenuItem>
              <SideNavMenuItem element={Link} to="/reporting">
                Reporting
              </SideNavMenuItem>
            </SideNavMenu>
          </SideNavItems>
          <Tile>
            <h5>Contacts</h5>
            <h6>IBS - GPS ILC Support</h6>
            <h6>ISD - PH GDC ILC Support</h6>
          </Tile>
        </SideNav>
      </>
    );
  }
}

export default SideNavigation;
