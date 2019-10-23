import React, { Component } from "react";
import { Content } from "carbon-components-react/lib/components/UIShell";
import { Route, Switch } from "react-router-dom";

import AppHeader from "./components/shared/Header";
import SideNavigation from "./components/shared/SideNav";
import Faqs from "./components/shared/Faqs";
import Footer from "./components/shared/Footer";

import CreateRequest from "./components/user/CreateRequest";
import MyRequests from "./components/user/MyRequests";

import ForApproval from "./components/approver/ForApproval";

import AllRequests from "./components/admin/AllRequests";
import BCRRequests from "./components/admin/BCRRequests";
import CFORequests from "./components/admin/CFORequests";
import Reporting from "./components/admin/Reporting";


import "./app.scss";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <AppHeader />
            <SideNavigation />
            <Content>
              <Switch>
                <Route exact path="/create-request" component={CreateRequest} />
                <Route exact path="/my-requests" component={MyRequests} />
                <Route exact path="/faqs" component={Faqs} />
                <Route exact path="/footer" component={Footer} />
                <Route exact path="/for-approval" component={ForApproval} />
                <Route exact path="/all-requests" component={AllRequests} />
                <Route exact path="/bcr-requests" component={BCRRequests} />
                <Route exact path="/cfo-requests" component={CFORequests} />
                <Route exact path="/reporting" component={Reporting} />
              </Switch>
            </Content>
        </div>
      </>
    );
  }
}
export default App;
