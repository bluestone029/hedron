import { connect } from 'react-redux'
import SettingsComponent from '../../components/Settings'
import { settingsUpdate } from '../../store/settings/actions'
import uiEventEmitter from '../../utils/uiEventEmitter'
import { reduxForm } from 'redux-form'

const mapStateToProps = (state, ownProps) => ({
  initialValues: state.settings,
  enableReinitialize: true,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (values) => {
    dispatch(settingsUpdate(values))
    uiEventEmitter.emit('repaint')
  },
})

const Settings = reduxForm({
  form: 'settings',
})(SettingsComponent)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
