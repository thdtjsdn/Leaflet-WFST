/**
 * Created by PRadostev on 05.06.2015.
 */

L.GML.PosParser = L.GML.ElementParser.extend({
  initialize: function () {
    this.elementTag = 'gml:pos';
  },

  parse: function (element) {
    return element.textContent.split(' ').map(function (coord) {
      return parseFloat(coord);
    });
  }
});
