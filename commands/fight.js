const Discord = require('discord.js');
module.exports = {
	name: 'fight',
	description: 'starts a fight with a tagged user',
	execute(message, args) {
        let fight = true;
        let hp1 = 0;
        let hp2 = 0;
        if (!args.length || message.mentions.users.size==0) {
            return message.reply("you need to tag another user to start a fight.");
        }
        function newR() {
            return Math.round(Math.random()*9);
        }
            
        if (message.mentions.users.size==1) {
            let Author = message.author;
            let Tagged = message.mentions.users.first();
            let name1 = Author.username;
            let name2 = Tagged.username;
            let rel = Math.round(Math.random());
            if (rel) {
                hp1 = 100+Math.round(Math.random()*30);
            }
            else {
                hp1 = 100-Math.round(Math.random()*30);
            }
            rel = Math.round(Math.random());
            if (rel) {
                hp2 = 100+Math.round(Math.random()*30);
            }
            else {
                hp2 = 100-Math.round(Math.random()*30);
            }
            message.channel.send(name1+" challenges "+name2+" to a fight!");
            setTimeout(function() {
                message.channel.send(name1+' starts with '+hp1+' health points.');
              }, 500);
            setTimeout(function() {
                message.channel.send(name2+' has '+hp2+' health points to begin with.');
            }, 200);
            while(fight) {
                attack();
            }
        }
        else {
            return message.reply("something wrent wrong...");
        }


        //FIGHT FUNCTIONS

        function selectAttack(a) {
            var attackName = ["Quick Attack","Thunder Shock","Surfer","Crunch","Double Kick","Razor Wind","Water Gun","Pay Day","Body Slam","Bite"];
            return attackName[a];
        }
        function hit(a) {
            var accuracy = [95,90,90,85,90,90,95,85,75,90];
            if (Math.random()*100>accuracy[a]) {
                return false;
            }
            return true;
        }
        function getDmg(a) {
            var dmgbase = [9,14,13,20,10,15,10,15,15,12];
            var spread = [5,5,10,4,15,8,3,10,15,5];
            var spreadVal = Math.round(Math.random()*spread[a]);
            var value = dmgbase[a] + spreadVal;
            return value;
        }
        function attack() {
            rel = newR();
            var at = selectAttack(rel);
            var acc = hit(rel);
            var dmg = getDmg(rel);
            // AUTHOR ATTACKS
            setTimeout(function() {
                message.channel.send(name1+" attacks with "+at+".");
            }, 500);
            if (!acc) {
                setTimeout(function() {
                    message.channel.send(name1+" missed his attack!");
                }, 300);
            }
            else {
                hp2 = hp2 - dmg;
                setTimeout(function() {
                    message.channel.send(name1+"'s attack scored a damage of"+dmg);
                }, 500);
            }
            if (hp2>0) {
                setTimeout(function() {
                    message.channel.send(name2+" has "+hp2+" HP remaining.");
                }, 300);
                //TAGGED ATTACKS
                rel = newR();
                var at = selectAttack(rel);
                var acc = hit(rel);
                var dmg = getDmg(rel);
                setTimeout(function() {
                    message.channel.send(name2+" attacks with"+at+".");
                }, 1000);
                if (!acc) {
                    setTimeout(function() {
                        message.channel.send(name2+" missed his attack!");
                    }, 300);
                }
                else {
                    hp1 = hp1 - dmg;
                    setTimeout(function() {
                        message.channel.send(name2+"'s attack scored a damage of"+dmg);
                    }, 500);
                    if (hp1>0) {
                        setTimeout(function() {
                            message.channel.send(name1+" has "+hp1+" HP remaining.");
                        }, 300);
                    }
                    else {
                        fight = false;
                        setTimeout(function() {
                            message.channel.send(name1+" fainted.\n"+name2+" won the fight with "+hp2+" HP remaining!");
                        }, 1000);
                    }
                }
            }
            else {
                fight = false;
                setTimeout(function() {
                    message.channel.send(name2+" fainted.\n"+name1+" won the fight with "+hp1+" HP remaining!");
                }, 1000);
            }
        }
	},
};