// Source of truth. Run `node scripts/build.ts` to write questions.json and questions.csv.
// Every question is original wording written for this dataset. Facts only; no copied Laws text.
export interface Q { law: number; lawName: string; question: string; options: string[]; answerIndex: number; explanation: string }

const N: Record<number, string> = {
  1: 'The Field of Play', 2: 'The Ball', 3: 'The Players', 4: "The Players' Equipment", 5: 'The Referee',
  7: 'The Duration of the Match', 8: 'The Start and Restart of Play', 9: 'The Ball In and Out of Play',
  10: 'Determining the Outcome of a Match', 11: 'Offside', 12: 'Fouls and Misconduct', 13: 'Free Kicks',
  14: 'The Penalty Kick', 15: 'The Throw-in', 16: 'The Goal Kick', 17: 'The Corner Kick',
}
const q = (law: number, question: string, options: string[], answerIndex: number, explanation: string): Q =>
  ({ law, lawName: N[law], question, options, answerIndex, explanation })

export const QUESTIONS: Q[] = [
  q(1, 'How far from the goal line is the penalty mark?', ['9.15 m', '11 m', '12 yards', '16.5 m'], 1, 'The mark sits 11 metres from the midpoint between the posts.'),
  q(1, 'How wide is a full-size goal, measured between the inside of the posts?', ['6.40 m', '7.32 m', '8.00 m', '7.00 m'], 1, 'The posts are 7.32 metres apart, and the crossbar is 2.44 metres above the ground.'),
  q(1, 'How high is the crossbar above the ground?', ['2.24 m', '2.44 m', '2.64 m', '2.40 m'], 1, 'The lower edge of the crossbar is 2.44 metres from the ground.'),
  q(1, 'How far does the goal area extend into the field from each goalpost?', ['5.5 m', '9.15 m', '11 m', '16.5 m'], 0, 'The goal area lines run 5.5 metres into the field from each post.'),
  q(1, 'How far does the penalty area extend into the field from each goalpost?', ['5.5 m', '11 m', '16.5 m', '18 m'], 2, 'The penalty area lines run 16.5 metres into the field from each post.'),
  q(1, 'What is the radius of the centre circle?', ['5 m', '9.15 m', '10 m', '11 m'], 1, 'The centre circle has a radius of 9.15 metres, the same as the distance opponents must keep at a free kick.'),
  q(2, 'Which circumference range is allowed for a size 5 match ball?', ['58 to 60 cm', '63 to 65 cm', '68 to 70 cm', '72 to 75 cm'], 2, 'A match ball is spherical with a circumference of 68 to 70 cm.'),
  q(3, 'What is the smallest number of players a team may have on the field for a match to start or continue?', ['5', '7', '8', '9'], 1, 'A match cannot start or continue if either team has fewer than seven players.'),
  q(3, 'Can an outfield player swap places with the goalkeeper?', ['Never', 'Yes, if the referee is told and play is stopped', 'Yes, at any time without telling anyone', 'Only at half-time'], 1, 'Any player can take over as goalkeeper if the referee is told first and play is stopped.'),
  q(4, 'Which item is compulsory for every player?', ['Gloves', 'Shinguards', 'Headband', 'Captain armband'], 1, 'Shirt with sleeves, shorts, socks, shinguards and footwear are the basic compulsory equipment.'),
  q(5, "How does the Laws treat the referee's decision about a fact of play, such as a goal being scored?", ['It can be changed by the captains', 'It is final', 'It goes to video review in every match', 'It needs the assistant referee to agree'], 1, 'Decisions on facts connected with play are final, subject to the rules for restarting play.'),
  q(7, 'How long is each half in a standard match?', ['30 minutes', '40 minutes', '45 minutes', '50 minutes'], 2, 'A standard match has two equal halves of 45 minutes, unless the competition rules agree otherwise.'),
  q(7, 'What is the maximum length of the half-time interval, unless competition rules say otherwise?', ['5 minutes', '10 minutes', '15 minutes', '20 minutes'], 2, 'Players are entitled to an interval of up to 15 minutes.'),
  q(8, 'Can a goal be scored directly from the kick-off?', ['No, never', 'Yes, against the opponents', 'Only after a second touch', 'Only in extra time'], 1, 'A goal may be scored directly against the opponents from the kick-off.'),
  q(9, 'When is the ball out of play over the touchline?', ['When any part of it crosses the line', 'When the whole ball crosses the line on the ground or in the air', 'When the referee blows the whistle', 'When it touches the line'], 1, 'The whole ball must cross the line completely, on the ground or in the air.'),
  q(10, 'What must happen for a goal to count?', ['Any part of the ball crosses the goal line', 'The whole ball passes over the goal line between the posts and under the crossbar, with no offence', 'The ball hits the net', 'The goalkeeper touches the ball'], 1, 'The whole ball must pass over the line between the posts and under the bar, and no offence may have been committed by the scoring team.'),
  q(11, 'Can a player be offside in their own half?', ['Yes, if the defender is far away', 'No', 'Only from a long pass', 'Only in the second half'], 1, 'A player is not in an offside position in their own half of the field.'),
  q(11, 'Is being in an offside position an offence on its own?', ['Yes, always', 'No, the player must also become involved in active play', 'Yes, if past the last defender', 'Only for strikers'], 1, 'The player is penalised only for becoming involved in active play from an offside position.'),
  q(11, 'From which restart can a player NOT be penalised for offside?', ['Free kick', 'Throw-in', 'Penalty kick', 'Dropped ball'], 1, 'There is no offside offence directly from a goal kick, throw-in or corner kick.'),
  q(12, 'What does a yellow card show?', ['A sending-off', 'A caution', 'An advantage', 'A substitution'], 1, 'A yellow card shows a caution. A red card shows a sending-off.'),
  q(12, 'A defender deliberately handles the ball inside their own penalty area. What restart follows?', ['Indirect free kick', 'Penalty kick', 'Corner kick', 'Dropped ball'], 1, 'A handball offence by a defender inside their own penalty area gives a penalty kick.'),
  q(12, 'What is the usual sanction for stopping an obvious goal-scoring opportunity by deliberate handball?', ['Yellow card', 'Red card', 'Warning only', 'No card'], 1, 'Denying a goal or obvious goal-scoring opportunity by deliberate handball is a sending-off offence.'),
  q(13, 'How far must opponents stand from the ball at a free kick?', ['5 m', '7 m', '9.15 m', '11 m'], 2, 'Opponents must be at least 9.15 metres from the ball until it is in play.'),
  q(13, 'A player kicks a direct free kick straight into their own goal. What is awarded?', ['Goal to the opponents', 'Corner kick to the opponents', 'Goal kick', 'Retake'], 1, 'An own goal from a direct free kick is not a goal. A corner kick goes to the opponents.'),
  q(14, 'During a penalty kick, what must the goalkeeper do until the ball is kicked?', ['Stay on the goal line with at least part of one foot touching or level with it', 'Stand on the penalty mark', 'Stay still with both feet together', 'Stand outside the penalty area'], 0, 'The goalkeeper must keep at least part of one foot on, or in line with, the goal line when the kick is taken.'),
  q(14, 'In which direction must the penalty taker kick the ball?', ['Backwards', 'Forward', 'Either way', 'Sideways only'], 1, 'The ball must be kicked forward.'),
  q(15, 'A throw-in goes directly into the thrower’s own goal. What is awarded?', ['Goal', 'Corner kick', 'Goal kick', 'Retake'], 1, 'A goal cannot be scored directly against your own team from a throw-in, so a corner kick is given.'),
  q(15, 'A throw-in goes directly into the opponents’ goal. What is awarded?', ['Goal', 'Goal kick', 'Corner kick', 'Retake'], 1, 'A goal cannot be scored directly from a throw-in. A goal kick is given.'),
  q(16, 'When is the ball in play at a goal kick?', ['When it leaves the penalty area', 'When it is kicked and clearly moves', 'When the referee signals', 'When it touches another player'], 1, 'The ball is in play once it is kicked and clearly moves. It does not have to leave the penalty area.'),
  q(17, 'Can a goal be scored directly from a corner kick?', ['No', 'Yes, against the opponents', 'Only if the goalkeeper touches it', 'Only in the second half'], 1, 'A goal may be scored directly from a corner kick against the opponents.'),
]
