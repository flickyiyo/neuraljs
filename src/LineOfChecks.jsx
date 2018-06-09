import React from 'react';

export default class LineOfChecks extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.line.map((dot, index) => (
            <input type="checkbox" checked={dot===1? true : false} onChange={() => this.props.changeCheck(index)} />
          ))
        }
      </div>
    )
  }
}
