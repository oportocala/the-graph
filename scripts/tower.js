/**
 * Created by vladgoran on 24/08/15.
 */


window.Tower = (function () {
  "use strict";
  var extractEdgeInformation = function (edgeName) {
    var fromId = edgeName.split("(", 1);
    var toId = edgeName.split(" ").pop().split("(",1)[0];
    var fromPort = edgeName.split(" ")[1];
    var toPort = edgeName.split(" ")[3];

    return {
      name: edgeName,
      from: {
        id: fromId,
        port: fromPort
      },
      trgt: {
        id: toId,
        port: toPort
      }
    };
  };

  var exports = {
    packetReceived: new signals.Signal(),
    dataReceived: new signals.Signal()
  };

  exports.packetReceived.add(function (packet) {
    if (packet.type === 'data') {
      var edgeInformation = extractEdgeInformation (packet.edge);
      return exports.dataReceived.dispatch(packet.data, edgeInformation);
    }
  });

  return exports;
})();