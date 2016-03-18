// I switched python code to javascript code taken from this site
// __author__ = 'Ryan McGreal <ryan@quandyfactory.com>'
// __homepage__ = 'http://quandyfactory.com/insult'


function generateInsult(){
    var words = [['Artless', 'Bawdy', 'Beslubbering', 'Bootless', 'Churlish', 'Cockered', 'Clouted', 'Craven', 
                'Currish', 'Dankish', 'Dissembling', 'Droning', 'Errant', 'Fawning', 'Fobbing', 'Froward', 'Frothy', 
                'Gleeking', 'Goatish', 'Gorbellied', 'Impertinent', 'Infectious', 'Jarring', 'Loggerheaded', 'Lumpish', 
                'Mammering', 'Mangled', 'Mewling', 'Paunchy', 'Pribbling', 'Puking', 'Puny', 'Quailing', 'Rank', 'Reeky', 
                'Roguish', 'Ruttish', 'Saucy', 'Spleeny', 'Spongy', 'Surly', 'Tottering', 'Unmuzzled', 'Vain', 'Venomed', 
                'Villainous', 'Warped', 'Wayward', 'Weedy', 'Yeasty'],['Base-court', 'Bat-fowling', 'Beef-witted', 'Beetle-headed', 
                'Boil-brained', 'Clapper-clawed', 'Clay-brained', 'Common-kissing', 'Crook-pated', 'Dismal-dreaming', 'Dizzy-eyed', 
                'Dog-hearted', 'Dread-bolted', 'Earth-vexing', 'Elf-skinned', 'Fat-kidneyed', 'Fen-sucked', 'Flap-mouthed', 'Fly-bitten', 
                'Folly-fallen', 'Fool-born', 'Full-gorged', 'Guts-griping', 'Half-faced', 'Hasty-witted', 'Hedge-born', 'Hell-hated',
                'Idle-headed', 'Ill-breeding', 'Ill-nurtured', 'Knotty-pated', 'Milk-livered', 'Motley-minded', 'Onion-eyed', 
                'Plume-plucked', 'Pottle-deep', 'Pox-marked', 'Reeling-ripe', 'Rough-hewn','Rude-growing', 'Rump-fed', 'Shard-borne', 
                'Sheep-biting', 'Spur-galled', 'Swag-bellied', 'Tardy-gaited', 'Tickle-brained', 'Toad-spotted', 'Unchin-snouted', 
                'Weather-bitten'],['Apple-john', 'Baggage', 'Barnacle', 'Bladder', 'Boar-pig', 'Bugbear', 'Bum-bailey', 'Canker-blossom', 
                'Clack-dish', 'Clot-pole', 'Coxcomb', 'Codpiece', 'Death-token', 'Dewberry', 'Flap-dragon', 'Flax-wench', 'Flirt-gill', 
                'Foot-licker', 'Fustilarian', 'Giglet', 'Gudgeon', 'Haggard', 'Harpy', 'Hedge-pig', 'Horn-beast', 'Huggermugger', 
                'Jolt-head', 'Lewdster', 'Lout', 'Maggot-pie', 'Malt-worm', 'Mammet', 'Measle', 'Minnow','Miscreant', 'Mold-warp', 
                'Mumble-news', 'Nut-hook', 'Pigeon-egg', 'Pignut', 'Puttock','Pumpion', 'Rats-bane', 'Scut', 'Skains-mate', 
                'Strumpet', 'Varlot', 'Vassal', 'Whey-face', 'Wagtail']];
    var words0 = words[0];
    var words1 = words[1];
    var words2 = words[2];
    var randomwords0 = _.shuffle(words0);
    var random0 = randomwords0.pop();
    var randomwords1 = _.shuffle(words1);
    var random1 = randomwords1.pop();    
    var randomwords2 = _.shuffle(words2);
    var random2 = randomwords2.pop();    


    var insult = "Thou art a clueless " + random0 + " " + random1 + " " + random2;
    return insult;
}