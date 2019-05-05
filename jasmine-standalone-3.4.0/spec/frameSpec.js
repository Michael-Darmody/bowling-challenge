
describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#roll', function() {
    it('Adds a score to the frame', function() {
      frame.roll(7);
      expect(frame.getScore()).toEqual(7)
    });
  });
});
