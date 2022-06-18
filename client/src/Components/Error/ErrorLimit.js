import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  //set the error value when invoked
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    //checked the error
    if (!!this.state.errorInfo) {
      return (
        <div className="snap">
          <img src={this.state.error.img} alt="Нет картинки" />
          <div className="snap-message">
            {this.state.error && this.state.error.toString()}
            {this.state.errorInfo.componentStack}
            <p>
              {" "}
              <b>Error occured - something's gone wrong.</b>
            </p>
            <p>Anyway we handled error</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
