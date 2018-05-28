import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Panel } from 'react-bootstrap'

class RootComponent extends React.Component {
  render() {
    return <Panel>
      <Panel.Heading>
        <Panel.Title toggle> 
          <div style={{ display: "flex" }}>
            <div className='squaredFour'>
              <input 
                type="checkbox" 
                value="None" 
                id='squaredFour'
                name="check" 
                defaultChecked={false}
                //disabled={disabled}
                onClick={this.badCheckboxSwitched}
              />
              <label forHtml='squaredFour'>Bad checkbox</label>
            </div>
            <div className='squaredFour'>
              <input 
                type="checkbox" 
                value="None" 
                id='squaredFour'
                name="check" 
                defaultChecked={false}
                //disabled={disabled}
                onClick={this.goodCheckboxSwitched}
              />
              <label forHtml='squaredFour'>Good checkbox</label>
            </div>
            <span style={{ flexGrow: 1, textAlign: "right" }}>
              >
            </span>
          </div>
        </Panel.Title>
      </Panel.Heading>
      <Panel.Collapse>
        <Panel.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid. Nihil anim keffiyeh
          helvetica, craft beer labore wes anderson cred nesciunt sapiente
          ea proident.
        </Panel.Body>
      </Panel.Collapse>
    </Panel>
  }

  goodCheckboxSwitched = (event) => {
    console.log("Switching good one!")
    event.stopPropagation()
  }
  badCheckboxSwitched = (event) => {
    console.log("Switching bad one!")
  }
}
                               
ReactDOM.render(
  <RootComponent />,
  document.querySelector("#root")
) 