/**
 * Created by vladgoran on 30/08/15.
 */
(function (context) {
  "use strict";

  var TheGraph = context.TheGraph;

  TheGraph.NodeHeader = React.createFactory( React.createClass({
    render: function () {
      var indicatorClass = 'indicator ' + (this.props.active ? 'active': '');
      return (
        React.createElement("svg", {width: "100%", height: "32", y: this.props.y, className:'header'},
          React.createElement("g", {transform: "translate(15,16)", className: indicatorClass},
            React.createElement("circle", {r: "4", className: "outer"}),
            React.createElement("circle", {r: "2", className: "inner"})
          ),
          React.createElement("g", {transform: "translate(28, 16)", className: ""},
            React.createElement("text", {textAnchor:"left"}, this.props.text)
          ),
          React.createElement("g", {transform: "translate(" + (this.props.width - 25) + ", 0)", className: "buttons"},
            React.createElement("g", {className: "preview", ref: "preview"},
              React.createElement("rect", {width: "25", height: "16", fill: "blue", rx: "3"})
            ),
            React.createElement("g", {className: "settings", ref: "settings", transform:"translate(0, 16)"},
              React.createElement("rect", {width: "25", height: "16", fill: "red", rx: "3"})
            )
          )
        )
      );
    }
  }));

})(this);