import React, {ErrorInfo, ReactNode} from 'react';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

setJSExceptionHandler((error, isFatal) => {
  console.log('js error------------->', error, isFatal);
});

setNativeExceptionHandler(exceptionString => {
  console.log('native error------------->', exceptionString);
}, false);

type ErrorBoundaryPropType = {
  children: ReactNode;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryPropType> {
  constructor(props: ErrorBoundaryPropType) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      error,
      hasError: true,
    };
  }

  componentDidCatch(_: Error, errorInfo: ErrorInfo) {
    if (errorInfo.componentStack) {
      this.setState({
        error: errorInfo.componentStack,
      });
    }
  }

  render() {
    return this.props.children;
  }
}
