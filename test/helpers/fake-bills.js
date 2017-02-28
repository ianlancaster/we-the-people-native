/* eslint-disable */

const fakeBills = [
  {
    id: 1234,
    official_title: 'A bill to impeach Donald Trump.',
    introduced_on: '2017-02-01',
    last_action_at: '2017-02-02',
    chamber: 'senate',
    progress: {
      index: 1,
      text: 'The bill is just a thought now, really.'
    }
  },
  {
    id: 3345,
    official_title: 'A bill to make everyone happy.',
    introduced_on: '2017-02-12',
    last_action_at: '2017-02-14',
    chamber: 'house',
    progress: {
      index: 2,
      text: 'The bill is now close to becoming law.'
    }
  }
]

const stringifiedFakeBills = JSON.stringify(fakeBills)

const fakeLongSummary = "garbage gabitron bluecifer lingo retro gusto milkman kansas-raptor NaN suhdude gradients! yoga-instructor blakement game-time K.U.-sucks blake-street-vault carne-asada javascript-tears go-blue chaz-isms magenta rabbit-holes epically-bad-gusto-coffee broncos bicycles champus daledalf rainbow-css-vomit star-bar k's-horse bree's-tattoos ps-lounge merge-conflicts weird-gifs command-line stack-overflow-forever monstertorium mod-1-beards dale's-pale-ale bad-wine dressage slack-attack steve's-bad-day where's-my-cubby to-posse-or-not-to-posse git-sh*t modulo lone-wolf-g foobar foobar foobar foobar garbage gabitron bluecifer lingo retro gusto milkman kansas-raptor NaN suhdude gradients! yoga-instructor blakement game-time K.U.-sucks blake-street-vault carne-asada javascript-tears go-blue chaz-isms magenta rabbit-holes epically-bad-gusto-coffee broncos bicycles champus daledalf rainbow-css-vomit star-bar k's-horse bree's-tattoos ps-lounge merge-conflicts weird-gifs command-line stack-overflow-forever monstertorium mod-1-beards dale's-pale-ale bad-wine dressage slack-attack steve's-bad-day where's-my-cubby to-posse-or-not-to-posse git-sh*t modulo lone-wolf-g foobar foobar foobar foobar"

const fakeShortSummary = "garbage gabitron bluecifer lingo retro gusto milkman kansas-raptor NaN suhdude"

const fakeLongTitle = "garbage gabitron bluecifer lingo retro gusto milkman kansas-raptor NaN suhdude gradients! yoga-instructor blakement game-time K.U.-sucks blake-street-vault carne-asada javascript-tears go-blue chaz-isms magenta rabbit-holes epically-bad-gusto-coffee broncos bicycles champus daledalf rainbow-css-vomit star-bar k's-horse bree's-tattoos ps-lounge merge-conflicts weird-gifs command-line stack-overflow-forever monstertorium mod-1-beards dale's-pale-ale bad-wine dressage slack-attack steve's-bad-day where's-my-cubby to-posse-or-not-to-posse git-sh*t modulo lone-wolf-g dressage slack-attack steve's-bad-day where's-my-cubby to-posse-or-not-to-posse git-sh*t modulo lone-wolf-g dressage slack-attack steve's-bad-day where's-my-cubby to-posse-or-not-to-posse git-sh*t modulo lone-wolf-g"

const fakeShortTitle = "garbage gabitron bluecifer lingo retro gusto milkman kansas-raptor"

Object.assign(exports,
  {
    fakeBills,
    stringifiedFakeBills,
    fakeLongSummary,
    fakeShortSummary,
    fakeLongTitle,
    fakeShortTitle
  }
)
