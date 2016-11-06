import React, {Component} from 'react';

class SiteHeader extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="">{this.props.siteTitle}</a>
              </div>
            </div>
          </nav>
          
        </div>
      </div>
    );
  }
}

export default SiteHeader;