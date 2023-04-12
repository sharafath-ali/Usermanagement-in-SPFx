import * as React from 'react';
import { IClearProps } from './IClearProps';
import App from './App';

export default class Clear extends React.Component<IClearProps, {}> {
  public render(): React.ReactElement<IClearProps> {
    return (
       <App/>
    );
  }
}
