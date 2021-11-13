import React from 'react'
import './style.scss'
interface IProps {

}
interface IState {
  height: number
}
export default class animation extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      height: 20
    }
  }
  render() {
    return (
      <div>1</div>
    )
  }
}