__d(function(e,t,s,o){"use strict";var i=t(68),r=t(70),n=t(208),a=t(223),l=t(235),p=t(275),h=t(267),c=t(274),u=t(207),d=t(224),y=t(349),P=t(276),f=t(345),b=t(227),T={activeOpacity:.85,underlayColor:"black"},S={top:20,left:20,right:20,bottom:30},m=n.createClass({displayName:"TouchableHighlight",propTypes:babelHelpers.extends({},c.propTypes,{activeOpacity:n.PropTypes.number,underlayColor:i,style:d.style,onShowUnderlay:n.PropTypes.func,onHideUnderlay:n.PropTypes.func,hasTVPreferredFocus:n.PropTypes.bool,tvParallaxProperties:n.PropTypes.object}),mixins:[r,p,h.Mixin],getDefaultProps:function(){return T},_computeSyntheticState:function(e){return{activeProps:{style:{opacity:e.activeOpacity}},activeUnderlayProps:{style:{backgroundColor:e.underlayColor}},underlayStyle:[_.style,e.style],hasTVPreferredFocus:e.hasTVPreferredFocus}},getInitialState:function(){return b(this.touchableGetInitialState(),this._computeSyntheticState(this.props))},componentDidMount:function(){P(this.props),y(this.refs[v])},componentDidUpdate:function(){y(this.refs[v])},componentWillReceiveProps:function(e){P(e),e.activeOpacity===this.props.activeOpacity&&e.underlayColor===this.props.underlayColor&&e.style===this.props.style||this.setState(this._computeSyntheticState(e))},viewConfig:{uiViewClassName:"RCTView",validAttributes:a.RCTView},touchableHandleActivePressIn:function(e){this.clearTimeout(this._hideTimeout),this._hideTimeout=null,this._showUnderlay(),this.props.onPressIn&&this.props.onPressIn(e)},touchableHandleActivePressOut:function(e){this._hideTimeout||this._hideUnderlay(),this.props.onPressOut&&this.props.onPressOut(e)},touchableHandlePress:function(e){this.clearTimeout(this._hideTimeout),this._showUnderlay(),this._hideTimeout=this.setTimeout(this._hideUnderlay,this.props.delayPressOut||100),this.props.onPress&&this.props.onPress(e)},touchableHandleLongPress:function(e){this.props.onLongPress&&this.props.onLongPress(e)},touchableGetPressRectOffset:function(){return this.props.pressRetentionOffset||S},touchableGetHitSlop:function(){return this.props.hitSlop},touchableGetHighlightDelayMS:function(){return this.props.delayPressIn},touchableGetLongPressDelayMS:function(){return this.props.delayLongPress},touchableGetPressOutDelayMS:function(){return this.props.delayPressOut},_showUnderlay:function(){this.isMounted()&&this._hasPressHandler()&&(this.refs[R].setNativeProps(this.state.activeUnderlayProps),this.refs[v].setNativeProps(this.state.activeProps),this.props.onShowUnderlay&&this.props.onShowUnderlay())},_hideUnderlay:function(){this.clearTimeout(this._hideTimeout),this._hideTimeout=null,this._hasPressHandler()&&this.refs[R]&&(this.refs[v].setNativeProps(H),this.refs[R].setNativeProps(babelHelpers.extends({},_,{style:this.state.underlayStyle})),this.props.onHideUnderlay&&this.props.onHideUnderlay())},_hasPressHandler:function(){return!!(this.props.onPress||this.props.onPressIn||this.props.onPressOut||this.props.onLongPress)},render:function(){return n.createElement(u,{accessible:this.props.accessible!==!1,accessibilityLabel:this.props.accessibilityLabel,accessibilityComponentType:this.props.accessibilityComponentType,accessibilityTraits:this.props.accessibilityTraits,ref:R,style:this.state.underlayStyle,onLayout:this.props.onLayout,hitSlop:this.props.hitSlop,isTVSelectable:!0,tvParallaxProperties:this.props.tvParallaxProperties,hasTVPreferredFocus:this.state.hasTVPreferredFocus,onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,onResponderGrant:this.touchableHandleResponderGrant,onResponderMove:this.touchableHandleResponderMove,onResponderRelease:this.touchableHandleResponderRelease,onResponderTerminate:this.touchableHandleResponderTerminate,testID:this.props.testID},n.cloneElement(n.Children.only(this.props.children),{ref:v}),h.renderDebugView({color:"green",hitSlop:this.props.hitSlop}))}}),v=f({childRef:null}),R=f({underlayRef:null}),H={style:l.create({x:{opacity:1}}).x},_={style:l.create({x:{backgroundColor:"transparent"}}).x};s.exports=m},348);