import React from 'react'
import PropTypes from 'prop-types'
import SketchParam from '../../containers/SketchParam'
import Shot from '../../containers/Shot'
import Row from '../Row'
import Button from '../Button'
import ViewHeader from '../ViewHeader'
import ViewSubheader from '../ViewSubheader'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

const Params = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.25rem;
  position: relative;
`

const Item = styled.div`
  flex: 0 0 33.33%;
  width: 33.33%;
  padding: 0.25rem;
`

const Bottom = styled.div`
  margin-top: auto;
  padding-top: 3rem;
  text-align: right;
`

const Shots = styled(Row)`
  flex-wrap: wrap;
`

const Sketch = ({ title, params, shots, onDeleteClick, sketchId }) => (
  <Wrapper>
    <ViewHeader>{title}</ViewHeader>

    {params.length > 0 &&
      <div>
        <ViewSubheader>Params</ViewSubheader>
        <Params>
          {params.map((id, index) => (
            <Item key={id}>
              <SketchParam nodeId={id} index={index} sketchId={sketchId} />
            </Item>
          ))}
        </Params>
      </div>
    }

    {shots.length > 0 &&
      <div>
        <ViewSubheader>Shots</ViewSubheader>
        <Shots>
          {shots.map((id) => (
            <Shot nodeId={id} key={id} />
          ))}
        </Shots>
      </div>
    }

    <Bottom>
      <Button onClick={onDeleteClick}>Delete Sketch</Button>
    </Bottom>
  </Wrapper>
)

Sketch.propTypes = {
  title: PropTypes.string.isRequired,
  sketchId: PropTypes.string.isRequired,
  params: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  shots: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired

}

export default Sketch
