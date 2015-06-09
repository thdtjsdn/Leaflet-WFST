/**
 * Created by PRadostev on 09.06.2015.
 */

describe("L.GML.LinearRingParser", function () {
    var parser;

    before(function () {
        parser = new L.GML.LinearRingParser();
    });

    it('should parse gml:LinearRing element', function () {
        expect(parser.elementTag).to.equal('gml:LinearRing');
    });

    it('should returns array without last point', function () {
        var parentParse = sinon.stub(L.GML.PointSequenceParser.prototype, 'parse').returns([[0, 0], [1, 1], [2, 2]]);
        var result = parser.parse({});
        expect(result).to.deep.equal([[0, 0], [1, 1]]);
    })
});