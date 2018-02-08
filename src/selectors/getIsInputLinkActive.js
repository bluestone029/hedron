export default (state, id) => {
  const link = state.inputLinks[id]
  if (link.input.type === 'midi') return true
  const node = state.nodes[link.nodeId]
  return node.activeInputLinkId === id
}
