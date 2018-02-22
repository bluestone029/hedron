import { connect } from 'react-redux'
import Param from '../../components/Param'
import getNode from '../../selectors/getNode'
import { sketchNodeOpenedToggle } from '../../store/sketches/actions'
import getIsSketchNodeOpened from '../../selectors/getIsSketchNodeOpened'
import getInputLink from '../../selectors/getInputLink'
import { nodeShotFired } from '../../store/nodes/actions'

const mapStateToProps = (state, ownProps) => {
  const node = getNode(state, ownProps.nodeId)
  const inputLinkIds = node.inputLinkIds
  const param = state.nodes[ownProps.nodeId]
  const type = ownProps.type || 'param'

  const activeInputLinkId = node.activeInputLinkId
  const activeInputLink = activeInputLinkId && getInputLink(state, activeInputLinkId)

  return {
    type,
    numInputs: inputLinkIds.length,
    numMacros: node.connectedMacroIds.length,
    title: param.title,
    isOpen: getIsSketchNodeOpened(state, ownProps.sketchId, ownProps.nodeId, type),
    inputLinkTitle: activeInputLink && activeInputLink.title
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const type = ownProps.type || 'param'

  return {
    onOpenClick: () => {
      dispatch(sketchNodeOpenedToggle(ownProps.sketchId, ownProps.nodeId, type))
    },
    onParamBarClick: type === 'shot'
    ? () => {
      dispatch(nodeShotFired(ownProps.nodeId, ownProps.sketchId, ownProps.shotMethod))
    } : undefined
  }
}

const ParamContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Param)

export default ParamContainer
