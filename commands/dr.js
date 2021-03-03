const Discord = require('discord.js');
module.exports = {
	name: 'dr',
    description: 'BILLIGE REIME VON DIR KEINE KUNST',
    cooldown: 5,
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("deutschrap command has been initiated.");
        var audios = ['./deutschrap/abwennesabgeht.mp3','./deutschrap/afghanischersimba.mp3',
        './deutschrap/akkusativ.mp3','./deutschrap/akpella.mp3','./deutschrap/amazonprime.mp3','./deutschrap/anusprobleme.mp3','./deutschrap/aontraktor.mp3','./deutschrap/arschinslomo.mp3','./deutschrap/asterix.mp3',
        './deutschrap/auslaender.mp3','./deutschrap/ayranpferd.mp3','./deutschrap/babasaadfrisbee.mp3','./deutschrap/babyaufamazon.mp3','./deutschrap/backekacke.mp3','./deutschrap/bifimumu.mp3',
        './deutschrap/billigereime.mp3','./deutschrap/binisses.mp3','./deutschrap/blasenmann.mp3','./deutschrap/bogota.mp3','./deutschrap/boneztochter.mp3','./deutschrap/brruzi.mp3','./deutschrap/brudervertraunicht.mp3','./deutschrap/buntstiftverloren.mp3',
        './deutschrap/busfetischist.mp3','./deutschrap/bushidofrisbee.mp3','./deutschrap/capuccinokriminell.mp3','./deutschrap/chakuzamann.mp3','./deutschrap/chayaslesbisch.mp3','./deutschrap/coolwieeinkuehlschrank.mp3','./deutschrap/diewursthatzwei.mp3','./deutschrap/duhorstduhans.mp3',
        './deutschrap/eierziehen.mp3','./deutschrap/einsundeins.mp3','./deutschrap/ekostalin.mp3','./deutschrap/emaf.mp3','./deutschrap/engwieeinarschloch.mp3','./deutschrap/et.mp3','./deutschrap/fakeprofil.mp3','./deutschrap/fatalanal.mp3',
        './deutschrap/faust.mp3','./deutschrap/faxen.mp3','./deutschrap/fickaufcharts.mp3','./deutschrap/fickpegida.mp3','./deutschrap/fifaspielen.mp3','./deutschrap/finanzamt.mp3','./deutschrap/fingernagel.mp3',
        './deutschrap/flacheerde.mp3','./deutschrap/fledermauskopfab.mp3','./deutschrap/flowsfuerdiehoes.mp3','./deutschrap/foegeldeinebitch.mp3','./deutschrap/freddykrueger.mp3','./deutschrap/gargamel.mp3',
        './deutschrap/gaykelig.mp3','./deutschrap/gerichtssaal.mp3','./deutschrap/graskacken.mp3','./deutschrap/gratispenis.mp3','./deutschrap/gurken.mp3','./deutschrap/gurkensahne.mp3','./deutschrap/halbeshemd.mp3','./deutschrap/halbschnodder.mp3','./deutschrap/handschellen.mp3','./deutschrap/hartergarten.mp3','./deutschrap/heleneistfischer.mp3',
        './deutschrap/hintereingang.mp3','./deutschrap/hirscharsch.mp3','./deutschrap/hosentraeger.mp3','./deutschrap/hulkschwanz.mp3','./deutschrap/hurensohnmagier.mp3','./deutschrap/indeinarschpinkel.mp3','./deutschrap/insgesichtgefurzt.mp3','./deutschrap/juergenfritzl.mp3',
        './deutschrap/juraschwuler.mp3','./deutschrap/justinbieber.mp3','./deutschrap/kaltsowieyeti.mp3','./deutschrap/kamikaze.mp3','./deutschrap/kennstdusatan.mp3','./deutschrap/kilopfirsich.mp3','./deutschrap/kohlebriketts.mp3','./deutschrap/kuhaufdemdach.mp3',
        './deutschrap/kurdewiehitler.mp3','./deutschrap/laermwiederwind.mp3','./deutschrap/laterne.mp3','./deutschrap/lieferando.mp3','./deutschrap/luege.mp3','./deutschrap/lutscher.mp3','./deutschrap/maedchenklo.mp3','./deutschrap/messerbesser.mp3','./deutschrap/microsoftword.mp3',
        './deutschrap/modeblogger.mp3','./deutschrap/momaufmichsteht.mp3','./deutschrap/monalisa.mp3','./deutschrap/mondhoden.mp3','./deutschrap/moneydonaldduck.mp3','./deutschrap/moneypaypal.mp3',
        './deutschrap/mumdeutsch.mp3','./deutschrap/nackigkacken.mp3','./deutschrap/nutellabrot.mp3','./deutschrap/parmesan.mp3','./deutschrap/passfotos.mp3','./deutschrap/perfektion.mp3',
        './deutschrap/pissindievase.mp3','./deutschrap/popel.mp3','./deutschrap/pornoankacken.mp3','./deutschrap/potenterochse.mp3','./deutschrap/pullerrasiert.mp3','./deutschrap/pumpernickel.mp3',
        './deutschrap/rechtenwichst.mp3','./deutschrap/sakemaki.mp3','./deutschrap/sandwichsubway.mp3','./deutschrap/scheissecharts.mp3','./deutschrap/schlangengrasen.mp3','./deutschrap/schweinemedallion.mp3','./deutschrap/schwerkraft.mp3','./deutschrap/schwulundgay.mp3','./deutschrap/sechsstellen.mp3',
        './deutschrap/sexonbday.mp3','./deutschrap/shiteater.mp3','./deutschrap/skrrt.mp3','./deutschrap/snickersaufmmars.mp3','./deutschrap/sohartfroehlich.mp3','./deutschrap/somelungen.mp3','./deutschrap/stadtlandfluss.mp3','./deutschrap/tausendfieber.mp3','./deutschrap/teflonvorderbrust.mp3',
        './deutschrap/textehinkacken.mp3','./deutschrap/thunfisch.mp3','./deutschrap/tretboot.mp3','./deutschrap/trivago.mp3','./deutschrap/valezka.mp3','./deutschrap/veyselfrisbee.mp3','./deutschrap/voegelpoebel.mp3','./deutschrap/waslabertkay.mp3','./deutschrap/weiberleiter.mp3',
        './deutschrap/weihnachtsmann.mp3','./deutschrap/wieduundich.mp3','./deutschrap/wozuphysik.mp3','./deutschrap/zdfneo.mp3','./deutschrap/zeckenbiss.mp3','./deutschrap/zehnmetermalvier.mp3','./deutschrap/zumiesereime.mp3','./deutschrap/anispenis.mp3','./deutschrap/arschlochaufhellen.mp3',
        './deutschrap/bangfaust.mp3','./deutschrap/flowking.mp3','./deutschrap/frankweint.mp3','./deutschrap/gayvorite.mp3','./deutschrap/kaltwiealaska.mp3','./deutschrap/maestro_asche.mp3','./deutschrap/schwulaussehend.mp3','./deutschrap/schwulios.mp3','./deutschrap/arschhaare1.mp3','./deutschrap/arschhaare2.mp3',
        './deutschrap/barmitzwah.mp3','./deutschrap/behindert.mp3','./deutschrap/fiattwingo.mp3','./deutschrap/guenther.mp3','./deutschrap/promobeef.mp3','./deutschrap/schiefenasen.mp3','./deutschrap/strichcode.mp3','./deutschrap/weltohnebigmac.mp3'];
        let value = Math.round(Math.random()*(audios.length-1));
        stream = audios[value];
    if (!args.length && message.member.voice.channel) {
        const voiceChannel = message.member.voice.channel;

        voiceChannel.join().then(connection => {
            const dispatcher = connection.play(stream);
            dispatcher.on('finish',() => voiceChannel.leave());
    });
    }
    else if (!args.length) {
        return message.reply('you need to be connected to a voice channel to use this command.');
    }
    else if (!(isNaN(parseInt(args[0])))) {
        if (parseInt(args[0])>=0 && parseInt(args[0]) < audios.length) {
            stream = audios[parseInt(args[0])];
            if (!args[1] && message.member.voice.channel) {
                const voiceChannel = message.member.voice.channel;

                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play(stream);
                    dispatcher.on('finish',() => voiceChannel.leave());
                })
            }
            else if (message.mentions.users.size>=1 && message.mentions.members.first().voice.channel) {
                if (!auRole) {
                    return message.reply("this server has not configured 'AUSOUP'.\nPlease create this role to configure permissions for alternative usage of commands.");
                }
                else {
                    if (!message.member.roles.cache.has(auRole.id) && !message.member.permissions.has('ADMINISTRATOR')) {
                        return message.reply("you are not allowed to use this command.\nYou need to have 'AUSOUP' role assigned to execute.");
                    }
                    else {
                        const voiceChannel = message.mentions.members.first().voice.channel;
                        voiceChannel.join().then(connection => {
                        const dispatcher = connection.play(stream);
                        dispatcher.on('finish',() => voiceChannel.leave());
                        })
                    }
                }
            }
            else {
                message.reply('No connection available.');
            }
        }
        else {
            return message.reply("your given number is not in accepted range.");
        }
    }
    else if (message.mentions.users.size>=1 && message.mentions.members.first().voice.channel) {
        if (!auRole) {
            return message.reply("this server has not configured 'AUSOUP'.\nPlease create this role to configure permissions for alternative usage of commands.");
        }
        else {
            if (!message.member.roles.cache.has(auRole.id) && !message.member.permissions.has('ADMINISTRATOR')) {
                return message.reply("you are not allowed to use this command.\nYou need to have 'AUSOUP' role assigned to execute.");
            }
            else {
                const voiceChannel = message.mentions.members.first().voice.channel;
                voiceChannel.join().then(connection => {
                const dispatcher = connection.play(stream);
                dispatcher.on('finish',() => voiceChannel.leave());
                })
            }
            
        }
    }
    else if (args[0] === "info") {
        message.channel.send("```0 - Hier geht's ab wenn es abgeht\n1 - Afghanischer Simba\n2 - Akkusativ\n3 - GIBDEINERBITCHFICKDEINEBITCHSCHICKDEINEBITCH\n4 - AmAzoNprIme\n5 - Anusprobleme\n6 - Aon Faktor Traktor\n7 - Fick dein Arsch in Slow-Mo du Homo\n8 - Asterix\n9 - Kriminell"
        + "\n10 - Ayran aus der Wichse eines Pferds\n11 - Baba Saad Frisbee\n12 - Baby auf Amazon\n13 - Backe Kacke\n14 - BIBI BUBU BIFI MUMU\n15 - BILLIGE REIME VON DIR KEINE KUNST\n16 - BINISSES\n17 - Mann zum Blasen\n18 - BOGOTA"
        + "\n19 - Bonez Tochter\n20 - BRR UZI\n21 - Bruder vertrau nicht\n22 - Buntstift verloren\n23 - Busfetischist\n24 - Bushido Frisbee\n25 - Capuccino kriminell\n26 - Chakuzu Hubba Bubba Mann\n27 - Chayas lesbisch\n28 - Cool wie ein Kühlschrank```");
        message.channel.send("```\n29 - ALLES HAT EIN ENDE DOCH DIE WURST HAT ZWEI\n30 - DU HORST DU HANS\n31 - WIE VIEL EIER KANNST DU ZIEHEN\n32 - EINS UND EINS\n33 - EKO STALIN\n34 - EMAF\n35 - ENG WIE EIN ARSCHLOCH\n36 - E.T.\n37 - Fake wie ein Fake Profil\n38 - FATAL ANAL\n39 - GOETHE ODER FAUST"
        + "\n40 - RAPPER SIND WIE FAXGERÄTE\n41 - FICK AUF DIE CHARTS\n42 - Fick Pegida\n43 - Registriert zum FIFA spielen\n44 - Finanzamt beißt dich\n45 - Dreckiger Fingernagel\n46 - Flache Erde schwör auf alles\n47 - Fledermaus\n48 - Flows für die Hoes\n49 - Fögel deine Bitch"
        + "\n50 - Freddy Krueger\n51 - Gargamel\n52 - Gaykelig\n53 - Ich komm ins Gerichtssaal\n54 - Geh mal Gras kacken\n55 - Zehner für Gratis\n56 - Gurken pflücken\n57 - Gurkensahne\n58 - HALBES HEMD\n59 - Halb Schnodder```");
        message.channel.send("```\n60 - Verhaftet in Handschellen\n61 - Deshalb hab ich einen Garten\n62 - Helene ist Fischer\n63 - Hintereingang\n64 - Hirsch in den Arsch\n65 - Du Hosenträger\n66 - Hulk Schwanz\n67 - Hurensohn Magier\n68 - In dein Arsch pinkeln\n69 - Ins Gesicht gefurzt"
        + "\n70 - Jürgen Fritzl\n71 - Du studierst Jura?\n72 - Höre Justin Bieber\n73 - Kalt so wie Yeti\n74 - KAMIKAZE\n75 - Kennst du Satan?\n76 - Kilo Pfirsich\n77 - Kohlebriketts\n78 - Kuh auf dem Dach\n79 - Kurde wie Hitler```");
        message.channel.send("```\n80 - Lärm wie der Wind\n81 - Laterne\n82 - Lieferando\n83 - Wer sich selbst belügt\n84 - Du Lutscher\n85 - Mädchenklo\n86 - Messer besser besser besser\n87 - Microsoft Word\n88 - Modeblogger\n89 - Deine Mom steht auf mich"
        + "\n90 - Mona Lisa\n91 - Linker Hoden\n92 - Money Donald Duck\n93 - Money kommt auf mein Paypal\n94 - Meine Mum ist deutsch\n95 - Nackig kacken\n96 - Nutella Brot\n97 - Parmesan\n98 - Passfotos\n99 - Perfektion"
        + "\n100 - Piss in die Vase\n101 - Popel in meiner Nase\n102 - Porno nur mit Ankacken\n103 - Potenter als Ochse\n104 - Puller rasiert\n105 - Pumpernickel\n106 - Der Typ der mit der Rechten wichst\n107 - Sake Maki\n108 - Öfter Sandwich als bei Subway\n109 - Scheisse in die Charts```");
        message.channel.send("```\n110 - Schlangen grasen\n111 - Schweinemedallion\n112 - Schwerkraft\n113 - Schwul und gay\n114 - Sechs Stellen vor dem Komma, Multimillionär\n115 - Cousinen wollen Sex am B-Day\n116 - Shit-Eater\n117 - Skrrt\n118 - Snickers aufm Mars\n119 - So hart fröhlich"
        + "\n120 - Some Lungen\n121 - Stadt Land Fluss\n122 - Krank wie tausend Fieber\n123 - Teflon vor der Brust\n124 - Texte hinkacken\n125 - Thunfisch Thunfisch\n126 - Tretboot\n127 - Trivago\n128 - Valezka, meine Freundin und Schwester\n129 - Veysel Frisbee"
        + "\n130 - Vögel vögel und vögel ihr Vögel\n131 - Was labert Kay da für 'ne Scheiße?\n132 - Weiber Leiter\n133 - Weihnachtsmann\n134 - Wie du und ich\n135 - Wozu brauchen wir Physik?\n136 - Hurensohn ZDF Neo\n137 - Zeckenbiss\n138 - Zehn meter mal vier\n139 - Zu miese Reime```");
        message.channel.send("```140 - Anis Penis\n141 - Arschloch aufhellen\n142 - Geballte Faust\n143 - Flowmonster John Webber\n144 - Frank weint\n145 - Gayvorite\n146 - Kalt wie Alaska\n147 - Maestro vs. Asche\n148 - Schwul aussehend\n149 - Schwulios Caesar"
        + "\n150 - Arschhaare 1\n151 - Arschhaare 2\n152 - Bar Mitzwah\n153 - Behindert\n154 - Fiat Twingo\n155 - Fick die wie Günther\n156 - Promobeef\n157 - Schiefe Nasen\n158 - Strichcode\n159 - Welt ohne Big Mac```");
    }
    else {
        message.reply(`this user is currently not connected to any voice channel.`);
        }
    },
};