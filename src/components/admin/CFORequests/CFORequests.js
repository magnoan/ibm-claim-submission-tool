import React, { Component } from 'react';
import { Button } from 'carbon-components-react';

import CFORequestTable from './CFORequestTable';
import CFORequestInfoTable from './CFORequestInfoTable';

const headers = [
  {
    key: 'serial',
    header: 'Serial Number',
  },
  {
    key: 'country',
    header: 'Country',
  },
  {
    key: 'company',
    header: 'Company',
  },
  {
    key: 'weekending',
    header: 'Week Ending',
  },
  {
    key: 'parttime',
    header: 'Part Time',
  },
  {
    key: 'cats',
    header: 'Cats',
  },
  {
    key: 'sitelocation',
    header: 'Site Location',
  },
];

const rows = [
  {
    serial: 'P00542',
    country: '818',
    company: 'IBM',
    weekending: 'Date',
    parttime: 'no',
    cats: 'no',
    sitelocation: 'ceb',
    links: 'Links',
  },
];

const weekinfoheaders = [
  {
    key: 'acountid',
    header: 'Account ID',
  },
  {
    key: 'workitem',
    header: 'Work Item',
  },
  {
    key: 'groupid',
    header: 'Company',
  },
  {
    key: 'activity',
    header: 'Week Ending',
  },
  {
    key: 'activitydescription',
    header: 'Activity Description',
  },
  {
    key: 'billcode',
    header: 'Bill Code',
  },
  {
    key: 'labortype',
    header: 'Labor Type',
  },
  {
    key: 'ot',
    header: 'OT',
  },
  {
    key: 'ssb',
    header: 'S/SB',
  },
  {
    key: 'sat',
    header: 'Sat',
  },
  {
    key: 'sun',
    header: 'Sun',
  },
  {
    key: 'mon',
    header: 'Mon',
  },
  {
    key: 'tue',
    header: 'Tue',
  },
  {
    key: 'wed',
    header: 'Wed',
  },
  {
    key: 'thu',
    header: 'Thu',
  },
  {
    key: 'fri',
    header: 'Fri',
  },
  {
    key: 'total',
    header: 'Total',
  },
  {
    key: 'adjreason',
    header: 'Adj. Reason',
  },
];

const weekinforows = [
  {
    acountid:'BH3F',
    workitem:'ASBCGSUP',
    groupid:'',
    activity:'AM4231',
    activitydescription:'ONGOING SUPPORT',
    billcode:'',
    labortype:'',
    ot:'False',
    ssb:'3',
    sat:'0',
    sun:'0',
    mon:'9',
    tue:'9',
    wed:'9',
    thu:'9',
    fri:'9',
    total:'45',
    adjreason:'',
  },
];

export class CFORequests extends Component {
  render() {
    return (
      <div>
        <h1>CFO Requests</h1>
        <h2>Welcome to Claim Submission Tool.</h2>
        <br/>
        <br/>
        <div>
        </div>    
        <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
          <div className="bx--row">
            <div className="bx--col-lg-16">
            <CFORequestTable  headers={headers} rows={rows}/>
            </div>
          </div>
        </div>
        <br/>
        <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
          <div className="bx--row">
            <div className="bx--col-lg-16">
            <CFORequestInfoTable  headers={weekinfoheaders} rows={weekinforows}/>
            </div>
          </div>
        </div>
        <br/>
        <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
          <div className="bx--row">
          <div className="bx--col-md-8 bx--col-lg-1">
              <Button>ADD WEEK</Button>
            </div>
            <div className="bx--col-md-8 bx--col-lg-1">
              <Button>DELETE WEEk</Button>
            </div>
          </div>
        </div>
        <br/>
        <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
          <div className="bx--row">
          <div className="bx--col-lg-16">
            <p>Select the approving authority</p>
          </div>
          </div>
          </div>
          <br/>
          <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
          <div className="bx--row">
          <div className="bx--col-lg-16">
            <p>If People Manager option is selected, approval of PEMs of all employees in this request would be required.</p>
            <p>If BMS Account ID Manager is selected, aprroval would be required from PMs (PM of Project DB or IDA record where Account IDs are first registered) of all BMS Account IDs in this request.</p>
          </div>
          </div>
          </div>
          <br/>
        <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
          <div className="bx--row">
          <div className="bx--col-md-8 bx--col-lg-1">
              <Button>NEXT</Button>
            </div>
            <div className="bx--col-md-8 bx--col-lg-1">
              <Button>CANCEL</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CFORequests;
