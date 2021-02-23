header = header()
function header() {
    let title = document.getElementById("title");
    title.innerText = "The History of Football";

    let originBtn = document.getElementById("originBtn");
    originBtn.innerText = "Origins";

    let rulesBtn = document.getElementById("rulesBtn");
    rulesBtn.innerText = "Rules";
}

origin = originArticle()
function originArticle() {
    let title = document.getElementById("origin");
    title.innerText = "Football's Origin";

    let sectionTitle = document.getElementById("afterSection");
    sectionTitle.innerText = "After 1877";

    let p1 = document.getElementById("originParagraph1");
    p1.innerText = "When talking about the origins of football its important to draw up a distinction between the game as we know it today and any sport that involved using your feet to kick a ball. That's because if youre talking purely about the latter then you'll travel all the way back to the second and third centuries BC in your search for a reference to a game played with the feet";

    let p2 = document.getElementById("originParagraph2");
    p2.innerText = "The Chinese military used to play a game called Tsu' Chu, which involved the kicking of a ball made of leather and filled with hair and feathers through a small opening and into a net. The player wasn't allowed to use their hands bud had to make use of their body in order to hold off opponents who were trying to put them off by jumping on top of them. So a lot like playing against a Tony Pulis team.";

    let p3 = document.getElementById("originParagraph3");
    p3.innerText = "About 500 years later the Japanese invented a game called Kemari. This was less adversarial and more about working as a team to stop the ball from touching the ground. Like a more organised version of keepie-uppie, this game is still played today.";

    let p4 = document.getElementById("originParagraph4");
    p4.innerText = "Ancient Greece had a game called Episkyros, which involved using the feet, and the Romans had their own sport known as Harpastum. This involved trying to get the ball across boundary lines in the opposition's half of the pitch and was popular for nearly a century. They did introduce the game into Britain but it's unlikely to have had any real influence on modern day football.";

    let p5 = document.getElementById("originParagraph5");
    p5.innerText = "No, today's game takes its origins from a decision in 1863 for rugby football and association football to go their separate ways. That was when the rules of the game began to be formalised, though there are reports of games of football being played as early as 1581 in schools in England. The first documented use of the word 'football' actually happened as long ago as 1409!";
}

rulesAfter = rulesAfterArticle()
function rulesAfterArticle() {
    let sectionTitle = document.getElementById("beforeSection");
    sectionTitle.innerText = "After 1877";

    let p1 = document.getElementById("afterParagraph1");
    p1.innerText = "Generally there have been few changes to the laws of football as we know it since 1877. Inevitably, though, some things needed to be brought in either as a clarification or in order to move with the times. The first such amendment came about in 1891 when the penalty kick became part of the rules.";

    let p2 = document.getElementById("afterParagraph2");
    p2.innerText = "Not much happened until 1925 when a change was made to the offside rule. Before then there had to be three opposition players between the attacker and the goal, but this was reduced to two. Thousands of people who had patronisingly explained the offside law to non-football fans suddenly had to investigate what on earth was going on.";

    let p3 = document.getElementById("afterParagraph3");
    p3.innerText = "In 1958 came the introduction of substitutes. Prior to that players simply had to carry on through injury and illness if they didnt want their team to be reduced in number in their absence. Whether or not managers immediately started making changes when there were only two minutes left on the clock just to waste time has never been confirmed.";

    let p4 = document.getElementById("afterParagraph4");
    p4.innerText = "In 1970 yellow and red cards were introduced. Players who broke the laws of the game could be punished for doing so. Its unclear at what point blokes started rolling around on the floor as if theyd been shot in order to get members of the opposition sent off. Judging by some the tackles that went unpunished in the 1970s and 1980s, however, we'd suggest that's probably a modern thing.";

    let p5 = document.getElementById("afterParagraph5");
    p5.innerText = "The formation of the Premier League in 1992 gave the FA the opportunity to have a little look at the rules. The only change they decided to make was to introduce the backpass rule, meaning that goalkeepers couldn't pick up the ball if it was passed to them by one of their own players. Liverpool apparently used the ability to pass back to the goalkeeper as a way to waste time. Accordingly it took their goalkeeper, Bruce Grobelaar, months to get used to the new way of playing.";

    let p6 = document.getElementById("afterParagraph6");
    p6.innerText = "The biggest change to football in modern times came in 2012 when goal-line technology was introduced. This system alerts the referee to whether or not the entirety of the ball has crossed the line, meaning Manchester United goalkeepers can no longer claw the ball out from the back of the net and pretend it never went in. It was used for the first time during the FIFA Club World Cup of 2012. Whether that will pave the way for technology to be used at other times remains to be seen, though it really should. We have the ability to watch every incident in minute detail at home, so referees should be given some help where possible.";
}


rulesBefore = rulesBeforeArticle()
function rulesBeforeArticle() {
    let title = document.getElementById("rules");
    title.innerText = "The Development Of Official Rules";

    let sectionTitle = document.getElementById("beforeSection");
    sectionTitle.innerText = "Before 1877";

    let p1 = document.getElementById("beforeParagraph1");
    p1.innerText = "The need to come up with some official rules for football became clear as the nineteenth century wore on. Different public school wanted to play games against each other but struggled to do so because each had their own set of laws and rules for the game. From the beginning of the 1840s representatives of Englands most prestigious public schools met in order to discuss rules that all would be happy with.";

    let p2 = document.getElementById("beforeParagraph2");
    p2.innerText = "The Cambridge Rules of 1848 were the first known set of laws laid down officially surrounding the game. They were also probably the closest of the first sets of rules to the ones later adopted officially by the Football Association. The rules allowed forward passes, for example, as well as throw-ins, goal kicks and they also forbade running whilst holding onto the ball.";

    let p3 = document.getElementById("beforeParagraph3");
    p3.innerText = "As is the case with most things in life, not everything went smoothly. Whilst the lads and lasses in Cambridge might have come up with some rules they were happy with, folk in Sheffield were playing by their own rules. They were officially formed in 1857 and were played by the newly created Sheffield Football Club. These rules were a lot closer to what we know of today as rugby, hence why there was so much confusion between the different ways that people played the game.";

    let p4 = document.getElementById("beforeParagraph4");
    p4.innerText = "Despite the formation of the Football Association in 1863 different areas of the country continued to employ different sets of rules for the game. It became clear that something needed to be done when the Football Association Challenge Cup began to be played in 1871. Over the previous eight years there had been at least sixteen inter-association games between teams and played under the rules of Cambridge, Sheffield or a mixture of the two. A regular cup competition involving all association teams meant firm and clear rules needed to be established.";

    let p5 = document.getElementById("beforeParagraph5");
    p5.innerText = "It was in April of 1877 that a cohesive set of rules for football were finally drawn up and agreed upon. Although the vast majority of the rules came from the London Football Associations version of the game there were numerous laws taken from the Sheffield Rules. Together they became known as The Laws Of The Game and have been in place in a similar format ever since";   
}

aside = asideSection()
function asideSection() {
    let title = document.getElementById("aboutMe");
    title.innerText = "About Me";

    let name = document.getElementById("name");
    name.innerText = "Name : Febriansyah Rizqi Putra Setiyadi";

    let bornDate = document.getElementById("bornDate");
    bornDate.innerText = "Born Date : February, 6 2002";

    let address = document.getElementById("address");
    address.innerText = "Address : Banjarnegara, Central Java"; 
}
