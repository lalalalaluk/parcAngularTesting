import { VoteComponent } from './vote.component'; 


describe('VoteComponent', () => {
  let Component :VoteComponent;
  beforeEach(()=>{
    Component = new VoteComponent();
  })

  it('should add 1', () => {
    Component.upVote();
    expect(Component.totalVotes).toBe(1);
  });

  it('should minus 1', () => {
    Component.downVote();
    expect(Component.totalVotes).toBe(-1);
  });
});