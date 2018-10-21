import React  from 'react';

export function ProgressBar(props) {
    return (
      <div>
        <progress  value={props.value} max="100"></progress>
      </div>
    )
}
