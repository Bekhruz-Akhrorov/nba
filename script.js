// All-time player ranking data.
const allTime = [
  {name:"Michael Jordan",position:"SG",team:"Chicago Bulls",era:"1984–2003"},
  {name:"LeBron James",position:"SF / PF",team:"Los Angeles Lakers",era:"2003–present"},
  {name:"Kareem Abdul-Jabbar",position:"C",team:"Los Angeles Lakers",era:"1969–1989"},
  {name:"Bill Russell",position:"C",team:"Boston Celtics",era:"1956–1969"},
  {name:"Magic Johnson",position:"PG",team:"Los Angeles Lakers",era:"1979–1996"},
  {name:"Wilt Chamberlain",position:"C",team:"Philadelphia 76ers",era:"1959–1973"},
  {name:"Kobe Bryant",position:"SG",team:"Los Angeles Lakers",era:"1996–2016"},
  {name:"Larry Bird",position:"SF / PF",team:"Boston Celtics",era:"1979–1992"},
  {name:"Tim Duncan",position:"PF / C",team:"San Antonio Spurs",era:"1997–2016"},
  {name:"Shaquille O’Neal",position:"C",team:"Los Angeles Lakers",era:"1992–2011"},
];

// User-selected current-player ranking with 2025–26 team assignments.
const currentPlayers = [
  {name:"Shai Gilgeous-Alexander",position:"PG",team:"Oklahoma City Thunder",era:"2025–26 roster"},
  {name:"Nikola Jokić",position:"C",team:"Denver Nuggets",era:"2025–26 roster"},
  {name:"Giannis Antetokounmpo",position:"PF",team:"Milwaukee Bucks",era:"2025–26 roster"},
  {name:"Luka Dončić",position:"PG",team:"Los Angeles Lakers",era:"2025–26 roster"},
  {name:"Anthony Edwards",position:"SG",team:"Minnesota Timberwolves",era:"2025–26 roster"},
  {name:"Jalen Brunson",position:"PG",team:"New York Knicks",era:"2025–26 roster"},
  {name:"Victor Wembanyama",position:"C",team:"San Antonio Spurs",era:"2025–26 roster"},
  {name:"Stephen Curry",position:"PG",team:"Golden State Warriors",era:"2025–26 roster"},
  {name:"Kevin Durant",position:"SF / PF",team:"Houston Rockets",era:"2025–26 roster"},
  {name:"LeBron James",position:"SF / PF",team:"Philadelphia 76ers",era:"2025–26 roster"}
];

// Regular-season MVP winners: year, player, position, and team.
const mvpWinners = [
  [1956,"Bob Pettit","PF","St. Louis Hawks"],[1957,"Bob Cousy","PG","Boston Celtics"],[1958,"Bill Russell","C","Boston Celtics"],[1959,"Bob Pettit","PF","St. Louis Hawks"],[1960,"Wilt Chamberlain","C","Philadelphia Warriors"],
  [1961,"Bill Russell","C","Boston Celtics"],[1962,"Bill Russell","C","Boston Celtics"],[1963,"Bill Russell","C","Boston Celtics"],[1964,"Oscar Robertson","PG","Cincinnati Royals"],[1965,"Bill Russell","C","Boston Celtics"],
  [1966,"Wilt Chamberlain","C","Philadelphia 76ers"],[1967,"Wilt Chamberlain","C","Philadelphia 76ers"],[1968,"Wilt Chamberlain","C","Philadelphia 76ers"],[1969,"Wes Unseld","C","Baltimore Bullets"],[1970,"Willis Reed","C","New York Knicks"],
  [1971,"Kareem Abdul-Jabbar","C","Milwaukee Bucks"],[1972,"Kareem Abdul-Jabbar","C","Milwaukee Bucks"],[1973,"Dave Cowens","C","Boston Celtics"],[1974,"Kareem Abdul-Jabbar","C","Milwaukee Bucks"],[1975,"Bob McAdoo","C","Buffalo Braves"],
  [1976,"Kareem Abdul-Jabbar","C","Los Angeles Lakers"],[1977,"Kareem Abdul-Jabbar","C","Los Angeles Lakers"],[1978,"Bill Walton","C","Portland Trail Blazers"],[1979,"Moses Malone","C","Houston Rockets"],[1980,"Kareem Abdul-Jabbar","C","Los Angeles Lakers"],
  [1981,"Julius Erving","SF","Philadelphia 76ers"],[1982,"Moses Malone","C","Houston Rockets"],[1983,"Moses Malone","C","Philadelphia 76ers"],[1984,"Larry Bird","SF","Boston Celtics"],[1985,"Larry Bird","SF","Boston Celtics"],
  [1986,"Larry Bird","SF","Boston Celtics"],[1987,"Magic Johnson","PG","Los Angeles Lakers"],[1988,"Michael Jordan","SG","Chicago Bulls"],[1989,"Magic Johnson","PG","Los Angeles Lakers"],[1990,"Magic Johnson","PG","Los Angeles Lakers"],
  [1991,"Michael Jordan","SG","Chicago Bulls"],[1992,"Michael Jordan","SG","Chicago Bulls"],[1993,"Charles Barkley","PF","Phoenix Suns"],[1994,"Hakeem Olajuwon","C","Houston Rockets"],[1995,"David Robinson","C","San Antonio Spurs"],
  [1996,"Michael Jordan","SG","Chicago Bulls"],[1997,"Karl Malone","PF","Utah Jazz"],[1998,"Michael Jordan","SG","Chicago Bulls"],[1999,"Karl Malone","PF","Utah Jazz"],[2000,"Shaquille O’Neal","C","Los Angeles Lakers"],
  [2001,"Allen Iverson","SG","Philadelphia 76ers"],[2002,"Tim Duncan","PF","San Antonio Spurs"],[2003,"Tim Duncan","PF","San Antonio Spurs"],[2004,"Kevin Garnett","PF","Minnesota Timberwolves"],[2005,"Steve Nash","PG","Phoenix Suns"],
  [2006,"Steve Nash","PG","Phoenix Suns"],[2007,"Dirk Nowitzki","PF","Dallas Mavericks"],[2008,"Kobe Bryant","SG","Los Angeles Lakers"],[2009,"LeBron James","SF","Cleveland Cavaliers"],[2010,"LeBron James","SF","Cleveland Cavaliers"],
  [2011,"Derrick Rose","PG","Chicago Bulls"],[2012,"LeBron James","SF","Miami Heat"],[2013,"LeBron James","SF","Miami Heat"],[2014,"Kevin Durant","SF","Oklahoma City Thunder"],[2015,"Stephen Curry","PG","Golden State Warriors"],
  [2016,"Stephen Curry","PG","Golden State Warriors"],[2017,"Russell Westbrook","PG","Oklahoma City Thunder"],[2018,"James Harden","SG","Houston Rockets"],[2019,"Giannis Antetokounmpo","PF","Milwaukee Bucks"],[2020,"Giannis Antetokounmpo","PF","Milwaukee Bucks"],
  [2021,"Nikola Jokić","C","Denver Nuggets"],[2022,"Nikola Jokić","C","Denver Nuggets"],[2023,"Joel Embiid","C","Philadelphia 76ers"],[2024,"Nikola Jokić","C","Denver Nuggets"],[2025,"Shai Gilgeous-Alexander","PG","Oklahoma City Thunder"],[2026,"Shai Gilgeous-Alexander","PG","Oklahoma City Thunder"]
];

// Finals MVP winners: year, player, position, and team.
const finalsWinners = [
  [1969,"Jerry West","PG","Los Angeles Lakers"],[1970,"Willis Reed","C","New York Knicks"],[1971,"Kareem Abdul-Jabbar","C","Milwaukee Bucks"],[1972,"Wilt Chamberlain","C","Los Angeles Lakers"],[1973,"Willis Reed","C","New York Knicks"],
  [1974,"John Havlicek","SF","Boston Celtics"],[1975,"Rick Barry","SF","Golden State Warriors"],[1976,"Jo Jo White","PG","Boston Celtics"],[1977,"Bill Walton","C","Portland Trail Blazers"],[1978,"Wes Unseld","C","Washington Bullets"],
  [1979,"Dennis Johnson","SG","Seattle SuperSonics"],[1980,"Magic Johnson","PG","Los Angeles Lakers"],[1981,"Cedric Maxwell","SF","Boston Celtics"],[1982,"Magic Johnson","PG","Los Angeles Lakers"],[1983,"Moses Malone","C","Philadelphia 76ers"],
  [1984,"Larry Bird","SF","Boston Celtics"],[1985,"Kareem Abdul-Jabbar","C","Los Angeles Lakers"],[1986,"Larry Bird","SF","Boston Celtics"],[1987,"Magic Johnson","PG","Los Angeles Lakers"],[1988,"James Worthy","SF","Los Angeles Lakers"],
  [1989,"Joe Dumars","SG","Detroit Pistons"],[1990,"Isiah Thomas","PG","Detroit Pistons"],[1991,"Michael Jordan","SG","Chicago Bulls"],[1992,"Michael Jordan","SG","Chicago Bulls"],[1993,"Michael Jordan","SG","Chicago Bulls"],
  [1994,"Hakeem Olajuwon","C","Houston Rockets"],[1995,"Hakeem Olajuwon","C","Houston Rockets"],[1996,"Michael Jordan","SG","Chicago Bulls"],[1997,"Michael Jordan","SG","Chicago Bulls"],[1998,"Michael Jordan","SG","Chicago Bulls"],
  [1999,"Tim Duncan","PF","San Antonio Spurs"],[2000,"Shaquille O’Neal","C","Los Angeles Lakers"],[2001,"Shaquille O’Neal","C","Los Angeles Lakers"],[2002,"Shaquille O’Neal","C","Los Angeles Lakers"],[2003,"Tim Duncan","PF","San Antonio Spurs"],
  [2004,"Chauncey Billups","PG","Detroit Pistons"],[2005,"Tim Duncan","PF","San Antonio Spurs"],[2006,"Dwyane Wade","SG","Miami Heat"],[2007,"Tony Parker","PG","San Antonio Spurs"],[2008,"Paul Pierce","SF","Boston Celtics"],
  [2009,"Kobe Bryant","SG","Los Angeles Lakers"],[2010,"Kobe Bryant","SG","Los Angeles Lakers"],[2011,"Dirk Nowitzki","PF","Dallas Mavericks"],[2012,"LeBron James","SF","Miami Heat"],[2013,"LeBron James","SF","Miami Heat"],
  [2014,"Kawhi Leonard","SF","San Antonio Spurs"],[2015,"Andre Iguodala","SF","Golden State Warriors"],[2016,"LeBron James","SF","Cleveland Cavaliers"],[2017,"Kevin Durant","SF","Golden State Warriors"],[2018,"Kevin Durant","SF","Golden State Warriors"],
  [2019,"Kawhi Leonard","SF","Toronto Raptors"],[2020,"LeBron James","SF","Los Angeles Lakers"],[2021,"Giannis Antetokounmpo","PF","Milwaukee Bucks"],[2022,"Stephen Curry","PG","Golden State Warriors"],[2023,"Nikola Jokić","C","Denver Nuggets"],
  [2024,"Jaylen Brown","SF","Boston Celtics"],[2025,"Shai Gilgeous-Alexander","PG","Oklahoma City Thunder"],[2026,"Jalen Brunson","PG","New York Knicks"]
];

// Defensive Player of the Year: year, player, position, and team code.
const dpoyWinners = [
  [1983,"Sidney Moncrief","SG","MIL"],[1984,"Sidney Moncrief","SG","MIL"],[1985,"Mark Eaton","C","UTA"],[1986,"Alvin Robertson","PG","SAS"],
  [1987,"Michael Cooper","SG","LAL"],[1988,"Michael Jordan","SG","CHI"],[1989,"Mark Eaton","C","UTA"],[1990,"Dennis Rodman","PF","DET"],
  [1991,"Dennis Rodman","PF","DET"],[1992,"David Robinson","C","SAS"],[1993,"Hakeem Olajuwon","C","HOU"],[1994,"Hakeem Olajuwon","C","HOU"],
  [1995,"Dikembe Mutombo","C","DEN"],[1996,"Gary Payton","PG","SEA"],[1997,"Dikembe Mutombo","C","ATL"],[1998,"Dikembe Mutombo","C","ATL"],
  [1999,"Alonzo Mourning","C","MIA"],[2000,"Alonzo Mourning","C","MIA"],[2001,"Dikembe Mutombo","C","PHI"],[2002,"Ben Wallace","C","DET"],
  [2003,"Ben Wallace","C","DET"],[2004,"Ron Artest","SF","IND"],[2005,"Ben Wallace","C","DET"],[2006,"Ben Wallace","C","DET"],
  [2007,"Marcus Camby","C","DEN"],[2008,"Kevin Garnett","PF","BOS"],[2009,"Dwight Howard","C","ORL"],[2010,"Dwight Howard","C","ORL"],
  [2011,"Dwight Howard","C","ORL"],[2012,"Tyson Chandler","C","NYK"],[2013,"Marc Gasol","C","MEM"],[2014,"Joakim Noah","C","CHI"],
  [2015,"Kawhi Leonard","SF","SAS"],[2016,"Kawhi Leonard","SF","SAS"],[2017,"Draymond Green","PF","GSW"],[2018,"Rudy Gobert","C","UTA"],
  [2019,"Rudy Gobert","C","UTA"],[2020,"Giannis Antetokounmpo","PF","MIL"],[2021,"Rudy Gobert","C","UTA"],[2022,"Marcus Smart","PG","BOS"],
  [2023,"Jaren Jackson Jr.","C","MEM"],[2024,"Rudy Gobert","C","MIN"],[2025,"Evan Mobley","C","CLE"],[2026,"Victor Wembanyama","C","SAS"]
];

// Most Improved Player: year, player, position, and team code.
const mipWinners = [
  [1986,"Alvin Robertson","PG","SAS"],[1987,"Dale Ellis","SG","SEA"],[1988,"Kevin Duckworth","C","POR"],[1989,"Kevin Johnson","PG","PHO"],
  [1990,"Rony Seikaly","C","MIA"],[1991,"Scott Skiles","PG","ORL"],[1992,"Pervis Ellison","C","WSB"],[1993,"Mahmoud Abdul-Rauf","PG","DEN"],
  [1994,"Don MacLean","PF","WSB"],[1995,"Dana Barros","PG","PHI"],[1996,"Gheorghe Mureșan","C","WSB"],[1997,"Isaac Austin","C","MIA"],
  [1998,"Alan Henderson","PF","ATL"],[1999,"Darrell Armstrong","PG","ORL"],[2000,"Jalen Rose","SF","IND"],[2001,"Tracy McGrady","SG","ORL"],
  [2002,"Jermaine O’Neal","PF","IND"],[2003,"Gilbert Arenas","PG","GSW"],[2004,"Zach Randolph","PF","POR"],[2005,"Bobby Simmons","SF","LAC"],
  [2006,"Boris Diaw","PF","PHO"],[2007,"Monta Ellis","SG","GSW"],[2008,"Hedo Türkoğlu","SF","ORL"],[2009,"Danny Granger","SF","IND"],
  [2010,"Aaron Brooks","PG","HOU"],[2011,"Kevin Love","PF","MIN"],[2012,"Ryan Anderson","PF","ORL"],[2013,"Paul George","SF","IND"],
  [2014,"Goran Dragić","PG","PHO"],[2015,"Jimmy Butler","SF","CHI"],[2016,"C. J. McCollum","SG","POR"],[2017,"Giannis Antetokounmpo","PF","MIL"],
  [2018,"Victor Oladipo","SG","IND"],[2019,"Pascal Siakam","PF","TOR"],[2020,"Brandon Ingram","SF","NOP"],[2021,"Julius Randle","PF","NYK"],
  [2022,"Ja Morant","PG","MEM"],[2023,"Lauri Markkanen","PF","UTA"],[2024,"Tyrese Maxey","PG","PHI"],[2025,"Dyson Daniels","SG","ATL"],
  [2026,"Nickeil Alexander-Walker","SG","ATL"]
];

// Rookie of the Year: year, player, position, and team code; tied winners share a year.
const royWinners = [
  [1953,"Monk Meineke","C","FTW"],[1954,"Ray Felix","C","BLB"],[1955,"Bob Pettit","PF","MLH"],[1956,"Maurice Stokes","PF","ROC"],
  [1957,"Tom Heinsohn","PF","BOS"],[1958,"Woody Sauldsberry","PF","PHW"],[1959,"Elgin Baylor","SF","MNL"],[1960,"Wilt Chamberlain","C","PHW"],
  [1961,"Oscar Robertson","PG","CIN"],[1962,"Walt Bellamy","C","CHP"],[1963,"Terry Dischinger","SF","CHZ"],[1964,"Jerry Lucas","PF","CIN"],
  [1965,"Willis Reed","C","NYK"],[1966,"Rick Barry","SF","SFW"],[1967,"Dave Bing","PG","DET"],[1968,"Earl Monroe","SG","BAL"],
  [1969,"Wes Unseld","C","BAL"],[1970,"Kareem Abdul-Jabbar","C","MIL"],[1971,"Dave Cowens","C","BOS"],[1971,"Geoff Petrie","SG","POR"],
  [1972,"Sidney Wicks","PF","POR"],[1973,"Bob McAdoo","C","BUF"],[1974,"Ernie DiGregorio","PG","BUF"],[1975,"Jamaal Wilkes","SF","GSW"],
  [1976,"Alvan Adams","C","PHO"],[1977,"Adrian Dantley","SF","BUF"],[1978,"Walter Davis","SG","PHO"],[1979,"Phil Ford","PG","KCK"],
  [1980,"Larry Bird","SF","BOS"],[1981,"Darrell Griffith","SG","UTA"],[1982,"Buck Williams","PF","NJN"],[1983,"Terry Cummings","PF","SDC"],
  [1984,"Ralph Sampson","C","HOU"],[1985,"Michael Jordan","SG","CHI"],[1986,"Patrick Ewing","C","NYK"],[1987,"Chuck Person","SF","IND"],
  [1988,"Mark Jackson","PG","NYK"],[1989,"Mitch Richmond","SG","GSW"],[1990,"David Robinson","C","SAS"],[1991,"Derrick Coleman","PF","NJN"],
  [1992,"Larry Johnson","PF","CHH"],[1993,"Shaquille O’Neal","C","ORL"],[1994,"Chris Webber","PF","GSW"],[1995,"Grant Hill","SF","DET"],
  [1995,"Jason Kidd","PG","DAL"],[1996,"Damon Stoudamire","PG","TOR"],[1997,"Allen Iverson","SG","PHI"],[1998,"Tim Duncan","PF","SAS"],
  [1999,"Vince Carter","SG","TOR"],[2000,"Elton Brand","PF","CHI"],[2000,"Steve Francis","PG","HOU"],[2001,"Mike Miller","SF","ORL"],
  [2002,"Pau Gasol","PF","MEM"],[2003,"Amar’e Stoudemire","PF","PHO"],[2004,"LeBron James","SF","CLE"],[2005,"Emeka Okafor","C","CHA"],
  [2006,"Chris Paul","PG","NOK"],[2007,"Brandon Roy","SG","POR"],[2008,"Kevin Durant","SF","SEA"],[2009,"Derrick Rose","PG","CHI"],
  [2010,"Tyreke Evans","SG","SAC"],[2011,"Blake Griffin","PF","LAC"],[2012,"Kyrie Irving","PG","CLE"],[2013,"Damian Lillard","PG","POR"],
  [2014,"Michael Carter-Williams","PG","PHI"],[2015,"Andrew Wiggins","SF","MIN"],[2016,"Karl-Anthony Towns","C","MIN"],[2017,"Malcolm Brogdon","PG","MIL"],
  [2018,"Ben Simmons","PG","PHI"],[2019,"Luka Dončić","PG","DAL"],[2020,"Ja Morant","PG","MEM"],[2021,"LaMelo Ball","PG","CHO"],
  [2022,"Scottie Barnes","SF","TOR"],[2023,"Paolo Banchero","PF","ORL"],[2024,"Victor Wembanyama","C","SAS"],[2025,"Stephon Castle","PG","SAS"],
  [2026,"Cooper Flagg","SF","DAL"]
];

// Clutch Player of the Year: award introduced in 2023.
const clutchWinners = [
  [2023,"De’Aaron Fox","PG","SAC"],[2024,"Stephen Curry","PG","GSW"],[2025,"Jalen Brunson","PG","NYK"],[2026,"Shai Gilgeous-Alexander","PG","OKC"]
];

// Sixth Man of the Year: year, player, position, and team code.
const sixthWinners = [
  [1983,"Bobby Jones","PF","PHI"],[1984,"Kevin McHale","PF","BOS"],[1985,"Kevin McHale","PF","BOS"],[1986,"Bill Walton","C","BOS"],
  [1987,"Ricky Pierce","SG","MIL"],[1988,"Roy Tarpley","PF","DAL"],[1989,"Eddie Johnson","SG","PHO"],[1990,"Ricky Pierce","SG","MIL"],
  [1991,"Detlef Schrempf","SF","IND"],[1992,"Detlef Schrempf","SF","IND"],[1993,"Clifford Robinson","PF","POR"],[1994,"Dell Curry","SG","CHH"],
  [1995,"Anthony Mason","PF","NYK"],[1996,"Toni Kukoč","SF","CHI"],[1997,"John Starks","SG","NYK"],[1998,"Danny Manning","PF","PHO"],
  [1999,"Darrell Armstrong","PG","ORL"],[2000,"Rodney Rogers","SF","PHO"],[2001,"Aaron McKie","SG","PHI"],[2002,"Corliss Williamson","PF","DET"],
  [2003,"Bobby Jackson","PG","SAC"],[2004,"Antawn Jamison","PF","DAL"],[2005,"Ben Gordon","SG","CHI"],[2006,"Mike Miller","SG","MEM"],
  [2007,"Leandro Barbosa","SG","PHO"],[2008,"Manu Ginóbili","SG","SAS"],[2009,"Jason Terry","PG","DAL"],[2010,"Jamal Crawford","SG","ATL"],
  [2011,"Lamar Odom","PF","LAL"],[2012,"James Harden","SG","OKC"],[2013,"J. R. Smith","SG","NYK"],[2014,"Jamal Crawford","SG","LAC"],
  [2015,"Lou Williams","SG","TOR"],[2016,"Jamal Crawford","SG","LAC"],[2017,"Eric Gordon","SG","HOU"],[2018,"Lou Williams","SG","LAC"],
  [2019,"Lou Williams","SG","LAC"],[2020,"Montrezl Harrell","C","LAC"],[2021,"Jordan Clarkson","SG","UTA"],[2022,"Tyler Herro","SG","MIA"],
  [2023,"Malcolm Brogdon","PG","BOS"],[2024,"Naz Reid","C","MIN"],[2025,"Payton Pritchard","PG","BOS"],[2026,"Keldon Johnson","SF","SAS"]
];

const teamNames = {
  ATL:"Atlanta Hawks",BAL:"Baltimore Bullets",BOS:"Boston Celtics",BUF:"Buffalo Braves",CHI:"Chicago Bulls",CHH:"Charlotte Hornets",CHP:"Chicago Packers",CHZ:"Chicago Zephyrs",CLE:"Cleveland Cavaliers",CIN:"Cincinnati Royals",DAL:"Dallas Mavericks",DEN:"Denver Nuggets",DET:"Detroit Pistons",FTW:"Fort Wayne Pistons",GSW:"Golden State Warriors",HOU:"Houston Rockets",IND:"Indiana Pacers",KCK:"Kansas City Kings",LAC:"Los Angeles Clippers",LAL:"Los Angeles Lakers",MEM:"Memphis Grizzlies",MIA:"Miami Heat",MIL:"Milwaukee Bucks",MIN:"Minnesota Timberwolves",MNL:"Minneapolis Lakers",MLH:"Milwaukee Hawks",NJN:"New Jersey Nets",NOK:"New Orleans/Oklahoma City Hornets",NYK:"New York Knicks",ORL:"Orlando Magic",PHI:"Philadelphia 76ers",PHO:"Phoenix Suns",PHW:"Philadelphia Warriors",POR:"Portland Trail Blazers",ROC:"Rochester Royals",SAC:"Sacramento Kings",SAS:"San Antonio Spurs",SEA:"Seattle SuperSonics",SDC:"San Diego Clippers",SFW:"San Francisco Warriors",TOR:"Toronto Raptors",UTA:"Utah Jazz",WSB:"Washington Bullets",CHO:"Charlotte Bobcats",CHA:"Charlotte Bobcats",NOP:"New Orleans Pelicans",OKC:"Oklahoma City Thunder",PHX:"Phoenix Suns"
};

const awardCategories = {
  mvp:{label:"REGULAR-SEASON MVP",winners:mvpWinners},
  finals:{label:"FINALS MVP",winners:finalsWinners},
  dpoy:{label:"DEFENSIVE PLAYER OF THE YEAR",winners:dpoyWinners},
  mip:{label:"MOST IMPROVED PLAYER",winners:mipWinners},
  roy:{label:"ROOKIE OF THE YEAR",winners:royWinners},
  clutch:{label:"CLUTCH PLAYER OF THE YEAR",winners:clutchWinners},
  sixth:{label:"SIXTH MAN OF THE YEAR",winners:sixthWinners}
};

// League milestones displayed in the horizontally scrolling timeline.
const timelineItems = [
  [1946,"A league is born","The Basketball Association of America is founded in New York. Eleven franchises make up its inaugural season."],
  [1949,"The NBA takes shape","The BAA and National Basketball League merge. The combined organization becomes the National Basketball Association."],
  [1950,"A changing game","The NBA integrates; Earl Lloyd becomes the first Black player to appear in an NBA game."],
  [1956,"The MVP begins","Bob Pettit wins the first NBA Most Valuable Player award, beginning a new measure of individual excellence."],
  [1959,"The Celtics dynasty","Bill Russell joins Boston. The Celtics go on to win 11 championships in 13 seasons."],
  [1969,"Finals MVP introduced","The first Finals MVP is awarded to Jerry West—the only player to win it while on the losing team."],
  [1976,"The ABA merger","Four ABA franchises join the NBA: the Nets, Nuggets, Pacers and Spurs."],
  [1979,"Three is a magic number","The NBA introduces the three-point line. Larry Bird and Magic Johnson enter the league."],
  [1984,"A new global era","Michael Jordan is drafted. David Stern begins his tenure as commissioner the following year."],
  [1992,"The Dream Team","NBA stars represent the United States at the Barcelona Olympics, captivating a worldwide audience."],
  [1995,"Beyond North America","The Toronto Raptors and Vancouver Grizzlies expand the league into Canada."],
  [2004,"A new look","The Charlotte Bobcats join as the NBA’s 30th franchise; the league continues to expand its global reach."],
  [2016,"A record season","Golden State wins 73 regular-season games. The Warriors and Cavaliers deliver a historic Finals comeback."],
  [2020,"The bubble season","The NBA completes its season in a secure campus at Walt Disney World amid the COVID-19 pandemic."],
  [2023,"A first championship","Denver wins its first NBA title, led by Finals MVP Nikola Jokić."],
  [2025,"OKC returns to the top","The Thunder win the 2025 championship; Shai Gilgeous-Alexander earns both regular-season and Finals MVP."],
  [2026,"The 53-year drought ends","The New York Knicks win their first NBA championship since 1973. Jalen Brunson leads the title run and earns Finals MVP, while Shai Gilgeous-Alexander wins regular-season MVP."],
  ["2026–27","The next chapter","The 2026–27 season is underway. Its champion and award winners will be known after the season concludes."]
];

// Shared DOM helpers and active tab state.
const $ = (selector) => document.querySelector(selector);
const initials = (name) => name.split(/[\s-]+/).filter(Boolean).slice(0,2).map((part) => part[0]).join("").toUpperCase();
let activeRanking = "allTime";
let activeAward = "mvp";

// Render the selected top-10 player list.
function renderRankings() {
  const players = activeRanking === "allTime" ? allTime : currentPlayers;
  $("#rankingSubtitle").textContent = activeRanking === "allTime" ? "THE ICONS WHO BUILT THE GAME" : "A CURRENT-PLAYER SNAPSHOT FROM 2025–26";
  $("#rankingNote").textContent = activeRanking === "allTime"
    ? "Editorial all-time selection. Team shown is the player’s signature NBA franchise, not necessarily the only team they played for."
    : "Team assignments reflect the 2025–26 season, not live 2026–27 roster updates. Player ranking is editorial.";
  $("#rankingRows").innerHTML = players.map((player,index) => `<tr><td class="rank-number">${String(index+1).padStart(2,"0")}</td><td><div class="player-cell"><span class="player-avatar">${initials(player.name)}</span><span><span class="player-name">${player.name}</span><span class="player-sub">${activeRanking === "allTime" ? "ALL-TIME LEGEND" : "ACTIVE PLAYER"}</span></span></div></td><td><span class="position-chip">${player.position}</span></td><td class="team-label">${player.team}</td><td class="era-label">${player.era}</td><td class="rank-arrow">↗</td></tr>`).join("");
}

// Populate the season picker and render searchable award records.
function updateSeasonOptions() {
  const rows = awardCategories[activeAward].winners;
  const select = $("#seasonFilter");
  const selected = select.value;
  const seasons = [...new Set(rows.map(([year]) => year))].sort((a,b) => a-b);
  select.innerHTML = '<option value="all">All seasons</option>' + seasons.map((year) => `<option value="${year}">${year} season</option>`).join("");
  if ([...select.options].some((option) => option.value === selected)) select.value = selected;
}

function renderAwards() {
  const category = awardCategories[activeAward];
  const records = category.winners;
  const query = $("#awardSearch").value.trim().toLowerCase();
  const season = $("#seasonFilter").value;
  const filtered = records.filter(([year,name,position,teamCode]) => {
    const team = teamNames[teamCode] || teamCode;
    return (season === "all" || String(year) === season) &&
    (!query || `${year} ${name} ${position} ${team}`.toLowerCase().includes(query))
  });
  $("#awardRows").innerHTML = filtered
    .slice()
    .sort((a,b) => a[0] - b[0])
    .map(([year,name,position,teamCode]) => `<tr><td class="season-cell">${year}</td><td class="award-player">${name}</td><td><span class="position-chip">${position}</span></td><td class="team-name">${teamNames[teamCode] || teamCode}</td><td class="award-type">${category.label}</td></tr>`).join("");
  $("#awardEmpty").hidden = filtered.length > 0;
  $("#resultCount").textContent = `${filtered.length} ${filtered.length === 1 ? "record" : "records"}`;
}

// Build the timeline cards from the milestone data.
function renderTimeline() {
  $("#timelineTrack").innerHTML = timelineItems.map(([year,title,description]) => `<article class="timeline-card"><div class="timeline-year">${year}</div><h3>${title}</h3><p>${description}</p></article>`).join("");
}

// Ranking-tab, award-tab, search, and season-picker interactions.
document.querySelectorAll(".tab-button").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".tab-button").forEach((tab) => {
    tab.classList.toggle("active", tab === button);
    tab.setAttribute("aria-selected", String(tab === button));
  });
  activeRanking = button.dataset.ranking;
  renderRankings();
}));

document.querySelectorAll(".award-button").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".award-button").forEach((tab) => {
    tab.classList.toggle("active", tab === button);
    tab.setAttribute("aria-selected", String(tab === button));
  });
  activeAward = button.dataset.award;
  updateSeasonOptions();
  renderAwards();
}));

$("#awardSearch").addEventListener("input", renderAwards);
$("#seasonFilter").addEventListener("change", renderAwards);
// Timeline controls and responsive navigation menu.
$(".timeline-prev").addEventListener("click", () => $("#timelineTrack").scrollBy({left:-470,behavior:"smooth"}));
$(".timeline-next").addEventListener("click", () => $("#timelineTrack").scrollBy({left:470,behavior:"smooth"}));
$(".menu-toggle").addEventListener("click", (event) => {
  const nav = $(".main-nav");
  const isOpen = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", () => {
  $(".main-nav").classList.remove("open");
  $(".menu-toggle").setAttribute("aria-expanded","false");
}));

// Initial page render.
renderTimeline();
renderRankings();
updateSeasonOptions();
renderAwards();
