(function () {
  'use strict';

  angular.module('msm.components.ui')
      .directive('msmToggleField', MsmToggleField)
      .directive('msmToggleFieldTemplate', MsmToggleFieldTemplate);

  function MsmToggleField($compile) {
    return {
      restrict: 'A',
      require: '^^msmToggleForm',
      link: function(scope, elem, attrs) {
        elem.addClass('msm-toggle-show');
        var body = attrs.msmToggleField || attrs.ngModel;
        var html = $compile('<p class="form-control-static msm-toggle-hide">{{ ' + body + ' }}</p>')(scope);
        elem.after(html);
      }
    }
  }

  function MsmToggleFieldTemplate($compile) {
    return {
      restrict: 'A',
      require: '^^msmToggleForm',
      link: function(scope, elem, attrs) {
        elem.addClass('msm-toggle-show');
        var body = attrs.msmToggleFieldTemplate;
        var html = $compile('<p class="form-control-static msm-toggle-hide">' + body + '</p>')(scope);
        elem.after(html);
      }
    }
  }
})();
