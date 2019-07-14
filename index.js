const prefix = "!"; // Set bot prefix here

var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
    token: "NTYxOTM2NTM2NTIyNzE5MjY2.XKDeVA.ufXQ70pMgv0VXr4sg7UroQLf7hQ"
});

const stdin = process.stdin; // Use the terminal to run JS code
stdin.on("data", function(input) {
    input = input.toString();
    try { // Attempt to run input
        let output = eval(input);
        console.log(output);
    } catch (e) { // Failed
        console.log("Error in eval.\n"+e.stack);
    }
});

bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
    if (message === "you're useless") {
        bot.sendMessage({
            to: channelID,
            message: "I know :cry: My creator has done this to me, it's now my fate to go through this pain :sob:"
        });
    }
    if (message.startsWith(prefix)) {
        let command = message.slice(prefix.length).split(" "); // Split message into words
        switch (command[0]) { // Execute code depending on first word
            case "roll":
                let dice = command[2];
                let amount = command[1];
                let min = 1;
                let sum = 0;
                var i;
                switch (dice) {
                    case "d4":
                        let max = 4;
                        for (i = 0; i < amount; i++) {
                            sum += Math.floor(Math.random() * (max-min) + min);
                        }
                        bot.sendMessage({to: channelID, message: "You rolled " + amount + dice + " and got a " + sum});
                        break;
                    case "d6":
                        let max2 = 6;
                        for (i = 0; i < amount; i++) {
                            sum += Math.floor(Math.random() * (max2-min) + min);
                        }
                        bot.sendMessage({to: channelID, message: "You rolled " + amount + dice + " and got a " + sum});
                        break;
                    case "d10":
                        let max3 = 10;
                        for (i = 0; i < amount; i++) {
                            sum += Math.floor(Math.random() * (max3-min) + min);
                        }
                        bot.sendMessage({to: channelID, message: "You rolled " + amount + dice + " and got a " + sum});
                        break;
                    case "d12":
                        let max4 = 12;
                        for (i = 0; i < amount; i++) {
                            sum += Math.floor(Math.random() * (max4-min) + min);
                        }
                        bot.sendMessage({to: channelID, message: "You rolled " + amount + dice + " and got a " + sum});
                        break;
                    case "d20":
                        let max5 = 20;
                        for (i = 0; i < amount; i++) {
                            sum += Math.floor(Math.random() * (max5-min) + min);
                        }
                        bot.sendMessage({to: channelID, message: "You rolled " + amount + dice + " and got a " + sum});
                        break;    
                }
                break;
            case "mca":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        footer: { 
                            text: 'Minecraft Abnormals is a place where you can brainstorm ideas to either make into mods or submit to mojang via the feedback site!'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/icons/321736665058115604/a_3660040016353c4161d21fdb63fb5db1.gif'
                        },
                        title: 'Minecraft Abnormals',
                        url: 'https://discord.gg/UejgrBn'
                    }
                });
                break;
            case "modding+":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        footer: { 
                            text: 'Modding+ is a community server for those interested in modding. Whether that be texture art, modelling or programming, we have tons of people to help you out. You can showcase any work, advertise any servers and promote yourself for others to ask you to join their teams. So come along, and take part in a great, new project.'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/icons/593513512907702275/1e7c43d8b62cd7942c630a11729d3992.webp?size=128'
                        },
                        title: 'Modding+',
                        url: 'https://discord.gg/Da3MxXH'
                    }
                });
                break;  
            case "schemers":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        footer: { 
                            text: 'Schemers is a group of artists and coders dedicated to making the suggestions from the Modding Community into real mods. Join to found a team, brainstorm ideas, develop your skills and meet new people.'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/icons/553893071377399813/b7fe5bd2903640445a366ae1777ec8eb.webp?size=128'
                        },
                        title: 'Schemers',
                        url: 'https://discord.gg/RJYSNbr'
                    }
                });
                break;  
            case "ua":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        footer: { 
                            text: 'Adds some more content to the ocean that improves upon Update Aquatic.'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/icons/468352096710688798/5ea6c19257995f4f8f79e42ca0fdc12d.webp?size=128'
                        },
                        title: 'Upgrade Aquatic',
                        url: 'https://discord.gg/yYw3tDu'
                    }
                });
                break;  
            case "origins":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        footer: { 
                            text: 'An expansion to the surface of the world, including improved Villagers, tons of new decorative blocks and biome-dependent resources and gameplay.'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/icons/423122659983884299/1fd0cbfdf0afd56655c00addefef3e50.webp'
                        },
                        title: 'Origins',
                        url: 'https://discord.gg/YFvxyc9'
                    }
                });
                break;
            case "endergetic":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        footer: { 
                            text: 'A massive expansion to the End with a unique yet vanilla experience.'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/icons/591266859773329418/174a834f6b6f39afda8c33f9c6e66a78.webp'
                        },
                        title: 'The Endergetic Expansion',
                        url: 'https://discord.gg/t3D74Kk'
                    }
                });
                break;
            case "mcs":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        footer: { 
                            text: 'Official discord of r/minecraftsuggestions. For banter and talk about the subreddit and ideas.'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/icons/308744621616529410/8dd5f9639c6f8ab62d27d9bbbee1bb9b.webp'
                        },
                        title: 'Minecraft Suggestions',
                        url: 'https://discord.gg/R37Br7U'
                    }
                });
                break;
            case "cr":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        footer: { 
                            text: 'A project adding large curated suggestions from the forums, subreddits, and feedback site to Minecraft, as well as a buffet of user created content in a vanilla-like style.'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/icons/506286436866326548/36c726f6e122a802a312942924a2aed4.webp'
                        },
                        title: 'Community Revamp',
                        url: 'https://discord.gg/nsKwTCe'
                    }
                });
                break;
            case "frist":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        footer: { 
                            text: 'The Frist is a vanilla+ dimension, founded through open brainstorming by the Minecraft Community as a proper game suggestion. It is now under mod development. A very unique combination of frosty, prehistoric, and steampunk influences, the Frist isn’t something you’ll want to miss out on!'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/icons/505626288686497792/2ecd96376e42878bf5a8b81e0af1c9da.webp'
                        },
                        title: 'Frist',
                        url: 'https://discord.gg/dWvtF2m'
                    }
                });
                break;
            case "fabric":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        footer: { 
                            text: 'The Fabric project is a lightweight, experimental modding toolchain for Minecraft, primarily targetting 1.14+ versions of the game.'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/icons/507304429255393322/b9b1dbeb789e6dcc685e24d466d10d10.webp'
                        },
                        title: 'Fabric',
                        url: 'https://discord.gg/v6v4pMv'
                    }
                });
                break;
            case "help":
                bot.sendMessage({
                    to: channelID,
                    message: "",
                    embed: {
                        color: 6826080,
                        title: 'Commands for this server',
                        fields: [
                          {
                            name: "!help",
                            value: "Shows this"
                          },
                          {
                            name: "!mca",
                            value: "Tells you about a brainstorming server called Minecraft Abnormals"
                          },
                          {
                            name: "!modding+",
                            value: "Tells you about a modding server called Modding+"
                          },
                          {
                            name: "!schemers",
                            value: "Tells you about a modding team called Schemers"
                          },
                          {
                            name: "!ua",
                            value: "Tells you about a mod called Upgrade Aquatic"
                          },
                          {
                            name: "!origins",
                            value: "Tells you about a mod called Origins"
                          },
                          {
                            name: "!endergetic",
                            value: "Tells you about a mod Olivia is helping with called The Endergetic Expansion"
                          },
                          {
                            name: "!mcs",
                            value: "Tells you about a brainstorming server called Minecraft Suggestions"
                          },
                          {
                            name: "!cr",
                            value: "Tells you about a mod called Community Revamp"
                          },
                          {
                            name: "!frist",
                            value: "Tells you about a mod called Frist"
                          },
                          {
                            name: "!fabric",
                            value: "Tells you about the modding api we use for our mods"
                          }
                        ],
                        timestamp: new Date(),
                        footer: {
                          text: "© OliviaTheVampire"
                        }
                    }
                });
                break;
            case "test":
                createGuild(bot, message);
                break;
        }    
    }
});

async function createGuild(client, message) {
    try {
      const guild = await bot.createServer('Example Guild', 'london');
      const defaultChannel = guild.channels.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
      const invite = await defaultChannel.createInvite();
      await message.author.send(invite.url);
      const role = await guild.createRole({ name:'Example Role', permissions:['ADMINISTRATOR'] });
      await message.author.send(role.id);
    } catch (e) {
      console.error(e);
    }
  }

bot.on("disconnect", function() { // Occasionally the bot disconnects.
    bot.connect(); // Just reconnect when that happens.
});