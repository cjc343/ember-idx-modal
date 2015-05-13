import Em from 'ember';
import IdxConfig from 'ember-idx-utils/config'

export default {
  name: 'ember-idx-modal',
  initialize: function() {
    var Config = Em.IdxConfig = Em.IdxConfig ? Em.IdxConfig : IdxConfig.create();

    var defaultConfig = Em.Config.getConfig('bs');
    if (!defaultConfig) {
        Em.Config.addConfig('bs');
        defaultConfig = Em.Config.getConfig('bs');
    }

    defaultConfig['modal'] = {
        classes: ['em-modal', 'modal', 'fade'],
        bodyClasses: ['modal-body'],
        titleClasses: ['modal-header'],
        footerClasses: ['modal-footer']
    }
  }
};
